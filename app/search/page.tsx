"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Navbar from "../components/Navbar";

interface Hospital {
  id: number;
  tags: {
    [key: string]: string;
  };
}

const cities = [
  { name: "Kolkata", lat: 22.5726, lon: 88.3639 },
  { name: "Delhi", lat: 28.7041, lon: 77.1025 },
  { name: "Mumbai", lat: 19.076, lon: 72.8777 },
];

const Page = () => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hospitalsPerPage] = useState(6);

  const fetchHospitals = async (lat: number, lon: number) => {
    try {
      const response = await axios.get(
        `https://overpass-api.de/api/interpreter?data=[out:json];(node["amenity"="hospital"](around:50000,${lat},${lon}););out;`
      );

      setHospitals(response.data.elements);
      console.log("Fetched Data:", response.data);
    } catch (err) {
      console.error("Error fetching data from OpenStreetMap API", err);
      setError("Failed to fetch hospital data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchHospitals(selectedCity.lat, selectedCity.lon);
  }, [selectedCity]);

  if (loading) {
    return <div className="text-white text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-10">{error}</div>;
  }

  const indexOfLastHospital = currentPage * hospitalsPerPage;
  const indexOfFirstHospital = indexOfLastHospital - hospitalsPerPage;

  // Filter hospitals with both name and address
  const currentHospitals = hospitals
    .filter(
      (hospital) =>
        hospital.tags.name &&
        (hospital.tags["addr:full"] ||
          hospital.tags["addr:district"] ||
          hospital.tags["addr:state"])
    )
    .slice(indexOfFirstHospital, indexOfLastHospital);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="text-white overflow-hidden flex flex-col">
      <Navbar />
      <Image
        src={"/images/bg2.png"}
        alt="background"
        width={1000}
        height={400}
        className="-mt-30 w-full h-96 object-cover relative"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to Your Healthcare Journey
        </h1>
        <p className="text-md mb-6 hidden md:block max-w-3xl mx-auto">
          At our platform, we believe in empowering you with the right tools and
          information to make informed decisions about your health. Whether
          you&apos;re seeking a trusted hospital for treatment, looking to explore
          healthcare innovations, or simply learning about medical services,
          we&apos;re here to guide you every step of the way. Join us in discovering
          hospitals that are dedicated to providing exceptional care and
          expertise.
        </p>
      </div>

      {/* City Selection */}
      <div className="flex justify-center mt-10 relative">
  <div className="flex flex-col items-center mt-6">
    <p className="text-white mb-2 text-3xl sm:text-4xl lg:text-5xl font-semibold">
      Which city are you in?
    </p>
    <select
      className="bg-black text-white rounded-lg px-6 py-3 sm:px-4 sm:py-2"
      value={selectedCity.name}
      onChange={(e) => {
        const cityName = e.target.value;
        const city = cities.find((city) => city.name === cityName);
        if (city) {
          setSelectedCity(city);
          setCurrentPage(1);
        }
      }}
    >
      {cities.map((city) => (
        <option key={city.name} value={city.name}>
          {city.name}
        </option>
      ))}
    </select>
  </div>
</div>


      {/* Hospital Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {currentHospitals.map((hospital) => {
          const { tags } = hospital;
          const address = [
            tags["addr:full"],
            tags["addr:district"],
            tags["addr:state"],
            tags["addr:postcode"],
          ]
            .filter(Boolean)
            .join(", ");
          const phone = tags["contact:phone"];
          const operator = tags["operator:type"];
          const specialist = tags["healthcare:speciality"];
          return (
            <div
              key={hospital.id}
              className="relative bg-black p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 -z-10 overflow-hidden"
            >
              <div className="absolute w-10 h-14 right-0 top-0 rounded-full bg-[rgba(99,102,241,0.4)] blur-2xl z-0 shadow-[0_0_35px_15px_rgba(255,193,69,0.8)]"></div>
              <div className="mt-4 relative z-10">
                <h3 className="text-xl font-semibold text-white">{tags.name}</h3>
                <p className="mt-2 text-sm text-white/60">{address}</p>
                <div className="flex items-center gap-1">
                    {tags.wheelchair && (
                      <p className="text-white/80 flex gap-2 text-xs bg-[rgba(99,102,241,0.4)] py-1 px-1 rounded-xl mt-2 justify-center text-center w-24">
                        Wheelchair: {tags.wheelchair}
                      </p>
                    )}
                    {phone && (
                      <p className="text-white/80 flex gap-2 text-xs bg-[rgba(99,102,241,0.4)] py-1 px-1 rounded-xl mt-2 justify-center text-center w-40">
                        {phone}
                      </p>
                    )}
                    {operator && (
                      <p className="text-white/80 flex gap-2 text-xs bg-[rgba(99,102,241,0.4)] py-1 px-1 rounded-xl mt-2 justify-center text-center w-28">
                        {operator}
                      </p>
                    )}
                    {specialist && (
                      <p className="text-white/80 flex gap-2 text-xs bg-[rgba(99,102,241,0.4)] py-1 px-1 rounded-xl mt-2 justify-center text-center w-auto">
                        {specialist}
                      </p>
                    )}
                  </div>
                  
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-[#FF9D23] text-white rounded-lg disabled:bg-gray-400"
        >
          Previous
        </button>
        <span className="mx-4 text-white">
          Page {currentPage} of {Math.ceil(hospitals.length / hospitalsPerPage)}
        </span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(hospitals.length / hospitalsPerPage)
          }
          className="px-4 py-2 bg-[#FF9D23] text-white rounded-lg disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Page;


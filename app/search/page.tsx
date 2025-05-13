"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaWheelchair } from "react-icons/fa";
import { IoIosCall, IoIosFingerPrint } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
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
    <div className="min-h-screen font-poppins bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-hidden flex flex-col">
      <Navbar />
      <div className="relative w-full h-[500px] overflow-hidden">
        <Image
          src={"/images/bg2.png"}
          alt="background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center transform scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FF9D23] to-[#FF6B6B]">
            Welcome to Your Healthcare Journey
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto text-gray-200 leading-relaxed">
            At our platform, we believe in empowering you with the right tools and
            information to make informed decisions about your health. Whether
            you&apos;re seeking a trusted hospital for treatment, looking to explore
            healthcare innovations, or simply learning about medical services,
            we&apos;re here to guide you every step of the way.
          </p>
        </div>
      </div>

      {/* City Selection */}
      <div className="flex justify-center mt-12 relative z-10">
        <div className="flex flex-col items-center">
          <p className="text-white mb-4 text-3xl sm:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#FF9D23] to-[#FF6B6B]">
            Which city are you in?
          </p>
          <select
            className="bg-gray-800/80 backdrop-blur-sm text-white rounded-xl px-8 py-3 border border-gray-700 focus:border-[#FF9D23] focus:ring-2 focus:ring-[#FF9D23]/20 outline-none transition-all duration-300 hover:bg-gray-800"
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
      <div className="grid grid-cols-1 font-poppins sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 max-w-7xl mx-auto w-full">
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
              className="group relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-[#FF9D23]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#FF9D23]/5 hover:-translate-y-1"
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF9D23]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative z-10">
                {/* Hospital Name with subtle underline */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-neutral-100 group-hover:text-[#FF9D23] transition-colors duration-300">
                    {tags.name}
                  </h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-[#FF9D23]/50 to-transparent mt-2" />
                </div>

                {/* Address with clean styling */}
                <div className="mb-5">
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    {address}
                  </p>
                </div>

                {/* Tags with refined styling */}
                <div className="flex flex-wrap gap-2">
                  {tags.wheelchair && (
                    <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-800/80 text-[#FF9D23] border border-gray-700/50 backdrop-blur-sm">
                      <span className="mr-1.5"><FaWheelchair /></span>
                      {tags.wheelchair}
                    </span>
                  )}
                  {phone && (
                    <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-800/80 text-blue-400 border border-gray-700/50 backdrop-blur-sm">
                      <span className="mr-1.5"><IoIosCall /></span>
                      {phone}
                    </span>
                  )}
                  {operator && (
                    <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-800/80 text-purple-400 border border-gray-700/50 backdrop-blur-sm">
                      <span className="mr-1.5"><IoIosFingerPrint /></span>
                      {operator}
                    </span>
                  )}
                  {specialist && (
                    <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-800/80 text-green-400 border border-gray-700/50 backdrop-blur-sm">
                      <span className="mr-1.5"><FaUserDoctor /></span>
                      {specialist}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination with refined styling */}
      <div className="flex justify-center items-center gap-4 mt-8 mb-12">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-6 py-2 bg-gray-800/80 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700/80 transition-all duration-300 disabled:hover:bg-gray-800/80 border border-gray-700/50"
        >
          Previous
        </button>
        <span className="text-gray-300 font-medium px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700/50">
          Page {currentPage} of {Math.ceil(hospitals.length / hospitalsPerPage)}
        </span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(hospitals.length / hospitalsPerPage)}
          className="px-6 py-2 bg-gray-800/80 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700/80 transition-all duration-300 disabled:hover:bg-gray-800/80 border border-gray-700/50"
        >
          Next
        </button>
      </div>

     <Footer/>
    </div>
  );
};

export default Page;


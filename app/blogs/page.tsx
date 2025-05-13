"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import BloggerCard from "./card3";
import ArticleCard2 from "./card2";
import WorkExperience from "./card1";
import Image from "next/image";
import Navbar from "../components/Navbar";

interface Article {
  id: number;
  category: string;
  toptitle: string;
  title: string;
  date: string;
  author: string;
  description: string;
  imageUrl: string;
  header: string;
  intro: string;
  paragraphs: string[];
  image: string;
  sections: {
    heading: string;
    content: string[];
  }[];
}

const Page: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("/articles.json"); // Path to your JSON file
      const data = await response.json();
      setArticles(data);
    };

    fetchArticles();
  }, []);

  const topics = [
    { name: "Heart" },
    { name: "Neurological" },
    { name: "Mental Health" },
    { name: "Nutrition" },
    { name: "Fitness" },
    { name: "Diseases" },
    { name: "Wellness" },
  ];

  const createSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
    <div className="mb-6 flex flex-col font-poppins sm:flex-row border-b border-slate-300 py-4">
      <div className="relative mb-4 sm:mb-0 sm:mr-6 w-full sm:w-[50%] h-64">
        <div className="absolute top-5 left-4 rounded-md py-1 px-1 text-sm bg-white font-semibold text-gray-500 z-10">
          {article.category}
        </div>
        <Image
          className="w-full h-full object-cover rounded-xl"
          src={article.imageUrl}
          alt={`${article.title} image`}
          width={640}
          height={256}
        />
      </div>

      <div className="flex-1">
        <h6 className="text-slate-100 font-medium text-xs">
          {article.author} on {article.date}
        </h6>
        <h3 className="mt-2 text-lg font-medium text-neutral-200">
          {article.title}
        </h3>
        <p className="mt-2 text-sm text-gray-400">{article.description}</p>
        <div className="mt-4">
          <Link href={`/blogs/${createSlug(article.title)}`}>
            <button className="bg-gradient-to-r from-yellow-700 to-black/60 text-white font-normal py-2 px-4 rounded-lg shadow-md hover:from-indigo-500 hover:to-indigo-700 transition-colors duration-300">
              Discover More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Navbar />
      <div className="px-4 font-poppins sm:px-8">
        {/* Header Section */}
        <div className="px-4 py-12 border-b border-slate-300">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-[rgb(193,193,216)]">
              Heartfelt <span className="text-indigo-500">Reflections</span>:
              Stories of Health,
              <br className="hidden sm:block" /> Loss, and Growth
            </h1>
            <p className="mt-4 text-sm sm:text-lg text-[rgb(171,171,198)]">
              Revision welcomes you to the ultimate source for fresh
              perspectives! Explore curated content to enlighten, entertain, and engage global readers.
            </p>
          </div>
        </div>

        {/* Explore Tabs */}
        <div className="py-12 px-4 sm:px-40 relative bg-black/45">
          <div className="text-center">
            <h2 className="text-4xl sm:text-7xl text-white font-semibold">
              Explore Trending Topics
            </h2>
            <div className="mt-6 flex justify-center flex-wrap gap-4 sm:gap-6">
              {topics.map((topic) => (
                <div
                  key={topic.name}
                  className="flex items-center text-white space-x-2 bg-gradient-to-tr from-white/15 to-black/50 rounded-full shadow-[0_4px_10px_rgba(99,102,241,0.4)] px-4 py-2 sm:px-6 sm:py-3 hover:bg-white/80 cursor-pointer transition"
                >
                  <span className="text-sm sm:text-lg font-medium text-white">
                    {topic.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bg-[rgba(134,136,245,0.4)] w-40 sm:w-80 h-40 sm:h-80 blur-3xl -z-10 left-0 shadow-[0_0_35px_2px_rgba(255,193,69,0.8)] -top-6 sm:-top-12"></div>
          <div className="absolute bg-[rgba(99,102,241,0.4)] w-40 sm:w-80 h-40 sm:h-80 blur-3xl -z-10 right-0 shadow-[0_0_35px_5px_rgba(255,193,69,0.8)] -bottom-4 sm:-bottom-8"></div>
        </div>

        {/* Articles Section */}
        <div className="flex flex-col md:flex-row py-4 w-full gap-8">
          {/* Left Side: Articles */}
          <div className="w-full md:w-[120%]">
            <div className="max-w-full mx-auto">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          {/* Right Side: BloggerCard */}
          <div className="hidden md:block md:w-[40%]">
            <BloggerCard />
            <div className="mt-10">
              <ArticleCard2
                category="AI"
                author="Dr Anup Jain"
                date="July 7, 2025"
                title="AI in Healthcare: Improving Efficiency and Decision Making"
                imageUrl="https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/09/demo-image-0021-768x432.webp"
              />
            </div>
            <div className="mt-10">
              <WorkExperience />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;


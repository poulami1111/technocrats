"use client";
import React, { useEffect, useState } from "react";
import WorkExperience from "../card1";
import ArticleCard2 from "../card2";
import BloggerCard from "../card3";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";

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

const ArticleDetail = ({ params }: { params: { title: string } }) => {
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("/articles.json");
      const data = await response.json();

      const foundArticle = data.find((article: Article) =>
        createSlug(article.title) === params.title
      );
      setArticle(foundArticle || null);
    };

    fetchArticles();
  }, [params.title]);

  const createSlug = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  if (!article) {
    return <p className="text-center text-white mt-12">Article not found</p>;
  }

  return (
    <div>
      <Navbar />

      {/* Header Section */}
      <div className=" relative text-center px-6 py-16 z-10">
        <h1 className="text-xl sm:text-6xl font-bold text-white">{article.title}</h1>
        <p className="mt-4 text-xs hidden md:block sm:text-lg text-white/90">{article.description}</p>
        <button className="mt-6 bg-slate-100 text-black rounded-md py-2 px-4">
          {article.category}
        </button>
      </div>

      {/* Image */}
      {article.imageUrl && (
        <Image
          width={1400}
          height={450}
          alt="article-image"
          src={article.imageUrl}
          className="w-full h-64 sm:h-96 -mt-96 object-cover hidden md:block  opacity-80"
        />
      )}

      {/* Content Section */}
      <div className="px-6 sm:px-12 lg:px-20 py-8">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Main Content */}
          <div className="w-full md:w-[70%] bg-blue-950/20 p-6 rounded-md shadow-md border border-white/10">
            <section className="mb-8">
              <h1 className="text-xl sm:text-2xl mb-4 text-white">
                {article.header} {article.intro}
              </h1>
            </section>

            {article.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="text-base text-gray-200 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}

            {article.sections.map((section, index) => (
              <section key={index} className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
                  {section.heading}
                </h2>
                {section.content.map((content, idx) => (
                  <p key={idx} className="text-base text-gray-200 leading-relaxed mb-4">
                    {content}
                  </p>
                ))}
              </section>
            ))}

            {article.image && (
              <Image
                width={700}
                height={400}
                alt="article-details"
                src={article.image}
                className="rounded-md object-cover mt-6"
              />
            )}
          </div>

          {/* Sidebar */}
          <div className="hidden md:block md:w-[30%] space-y-8">
            <BloggerCard />
            <ArticleCard2
              category="Management"
              author="Ethan Caldwell"
              date="July 7, 2024"
              title="AI in Business Management: Improving Efficiency and Decision Making"
              imageUrl="https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/09/demo-image-0021-768x432.webp"
            />
            <WorkExperience />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;


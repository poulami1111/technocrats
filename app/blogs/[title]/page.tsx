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
    return <p>Article not found</p>;
  }

  return (
    <div className="">
      <Navbar/>
      {/* Header Section */}
      <div className="px-12 py-16 absolute inset-0">
        <div className="text-center px-10">
          <h1 className="text-6xl font-bold text-white">{article.title}</h1>
          <p className="mt-4 text-lg px-16 text-white/90">{article.description}</p>
          <button className="mt-9 bg-slate-100 rounded-md py-2 px-4">
            {article.category}
          </button>
        </div>
      </div>

      {/* Image */}
      {article.imageUrl && (
        <Image
          width={1400}
          height={450}
          alt="article-image"
          src={article.imageUrl}
          className="rounded-xl object-cover opacity-35 bg-black/50 relative -z-10 h-96"
        />
      )}
    
      <div className="px-20">
        <div className="flex justify-between py-4 px-40 mt-6 sm:px-6 lg:px-2 w-full">
          <div className="w-full md:w-[70%] border border-white/10 rounded-md px-4 py-2">
            <section className="mb-12">
              <h1 className="text-ld mb-6 text-white">
                {article.header} {article.intro}
              </h1>
            </section>
            <div className="absolute  bg-[rgba(99,102,241,0.4)] w-80 h-80 blur-3xl -z-10  right-20  shadow-[0_0_35px_5px_rgba(255,193,69,0.8)]  -bottom-8"></div>
            {article.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="text-base text-gray-200 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}

            {article.sections.map((section, index) => (
              <section key={index} className="mb-12">
                <h2 className="text-4xl font-semibold mb-4 text-[rgb(238,238,242)]">
                  {section.heading}
                </h2>
                {section.content.map((content, idx) => (
                  <p key={idx} className="text-base text-gray-100 leading-relaxed mb-4">
                    {content}
                  </p>
                ))}
              </section>
            ))}
           
            {article.image && (
              <Image
                width={700}
                height={400}
                alt="card-details"
                src={article.image}
                className="object-cover rounded-xl"
              />
            )}
          </div>
         
          <div className="hidden md:block md:w-[30%] ml-32">
            <div>
              <BloggerCard />
            </div>

            <div className="mt-10">
              <ArticleCard2
                category="Management"
                author="Ethan Caldwell"
                date="July 7, 2024"
                title="AI in Business Management: Improving Efficiency and Decision Making"
                imageUrl="https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/09/demo-image-0021-768x432.webp"
              />
            </div>
            <div className="mt-10">
              <WorkExperience />
            </div>
          </div>
        </div>
        <div className="absolute  bg-[rgba(99,102,241,0.4)] w-40 h-40 blur-3xl -z-10  left-0  shadow-[0_0_35px_15px_rgba(255,193,69,0.8)]  origin-bottom-left"></div>
      </div>
     
    </div>
  );
};

export default ArticleDetail;

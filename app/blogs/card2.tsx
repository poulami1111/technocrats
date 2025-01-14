import Image from 'next/image';
import React from 'react';

interface ArticleCardProps {
  category: string;
  author: string;
  date: string;
  title: string;
  imageUrl: string;
}

const ArticleCard2: React.FC<ArticleCardProps> = ({ category, author, date, title, imageUrl }) => {
  return (
    <div className="relative max-w-lg h-72 rounded-lg overflow-hidden shadow-lg">
      {/* Background Image */}
      < Image
      width={1000}
      height={1000}
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4">
        {/* Category Tag */}
        <div className="absolute top-4 left-4 bg-amber-700 bg-opacity-5  text-white text-xs font-semibold px-2 py-1 rounded-full">
          {category}
        </div>

        {/* Author and Date */}
        <p className="text-white text-sm">
          {author} <span className="opacity-70">on {date}</span>
        </p>

        {/* Article Title */}
        <h2 className="text-white text-lg font-semibold leading-tight">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default ArticleCard2;

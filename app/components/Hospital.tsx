
'use client';

import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.location.href = `/search`;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black h-72 py-10 rounded-lg shadow-2xl">
      <h1 className="text-4xl font-bold text-white mb-6">Find the Perfect Hospital</h1>
      <div className="relative w-full max-w-md">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for hospitals..."
          className="w-full py-3 px-6 text-gray-700 placeholder-gray-500 bg-white rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={handleSearch}
          className="absolute right-2 top-2 bg-purple-600 text-white p-2 rounded-full shadow-md hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <FiSearch className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;




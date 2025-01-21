"use client"
import React, { useEffect, useState } from 'react';

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get('query');
    
    console.log('Search query:', searchQuery); // Debug log
    
    if (searchQuery) {
      setQuery(searchQuery);
    }
  }, []); // This effect runs only once on component mount

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Search Results</h1>
      {query ? (
        <p className="text-lg text-gray-600">
          Showing results for: <span className="font-semibold">{query}</span>
        </p>
      ) : (
        <p className="text-lg text-gray-600">Please enter a search term.</p>
      )}

      {/* Placeholder for search results */}
      <div className="mt-6">
        <p className="text-gray-500">No results found. Try refining your search.</p>
      </div>
    </div>
  );
};

export default SearchPage;


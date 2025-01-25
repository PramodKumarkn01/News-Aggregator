// SearchBar.tsx
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string, category: string, source: string, publishedAt: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState(''); 
  const [category, setCategory] = useState(''); 
  const [source, setSource] = useState('');
  const [publishedAt, setPublishedAt] = useState(''); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query && !category && !source && !publishedAt) {
      alert('Please enter at least one filter or search term');
      return;
    }

    onSearch(query, category, source, publishedAt);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-[#1A5E79] p-6 rounded-2xl shadow-lg text-white space-y-4">
      <input
        type="text"
        className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
        placeholder="Search for news..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} 
      />
      
      <select
        className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
        value={category}
        onChange={(e) => setCategory(e.target.value)} 
      >
        <option value="">Select Category</option>
        <option value="newsweek">Tesla News</option>
        <option value="business-insider">Business</option>
        <option value="nbc-news">Electronic Vehicle</option>
        <option value="time">Entertainment</option>
      </select>
      
      <select
        className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
        value={source}
        onChange={(e) => setSource(e.target.value)} // Update source on change
      >
        <option value="">Select Source</option>
        <option value="bbc-news">ETF Daily News</option>
        <option value="cnn">The Daily Dot</option>
        <option value="the-times-of-india">The Times of India</option>
        <option value="business-insider">Business Insider</option>
        <option value="fox-news">Fox News</option>
        <option value="the-guardian">The Guardian (UK)</option>
        <option value="the-new-york-times">The New York Times</option>
        <option value="newsweek">Newsweek</option>
      </select>
      
      <input
        type="date"
        className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
        value={publishedAt}
        onChange={(e) => setPublishedAt(e.target.value)} // Update published date on change
      />
      
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;

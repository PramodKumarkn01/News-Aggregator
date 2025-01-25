import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string, category: string, source: string, date: string) => void; // Add date to the function signature
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [source, setSource] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
    onSearch(query, category, source, date); // Call the passed onSearch function with query, category, source, and date
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-gray-100 p-4 rounded">
      <input
        type="text"
        className="border rounded p-2 w-full"
        placeholder="Search for news..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update the query state
      />
      <select
        className="border rounded p-2 mt-2 w-full"
        value={category}
        onChange={(e) => setCategory(e.target.value)} // Update category state
      >
        <option value="">Select Category</option>
        <option value="technology">Technology</option>
        <option value="sports">Sports</option>
        <option value="business">Business</option>
        <option value="entertainment">Entertainment</option>
      </select>
      <select
        className="border rounded p-2 mt-2 w-full"
        value={source}
        onChange={(e) => setSource(e.target.value)} // Update source state
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
        className="border rounded p-2 mt-2 w-full"
        value={date}
        onChange={(e) => setDate(e.target.value)} // Update date state
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        Search
      </button>
    </form>
  );
};

export default SearchBar;

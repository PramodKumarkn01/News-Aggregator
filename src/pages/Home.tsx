// Home.tsx
import React, { useState, useEffect } from 'react';
import SearchBar from '../Components/SearchBar'; // Importing the SearchBar component
import NewsList from '../Components/NewsList'; // Importing the NewsList component
import { fetchNews } from '../../src/api/newsApi'; // Assuming fetchNews is the function for API calls

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

const Home: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]); // State to store articles
  const [loading, setLoading] = useState(false); // State to track loading state
  const [error, setError] = useState<string | null>(null); // State to handle errors

  // Function to fetch all news (on initial load)
  const fetchAllNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const allNews = await fetchNews('', '', '', ''); // Fetch all news with no filters
      setArticles(allNews); // Store fetched news in state
    } catch (err) {
      console.error('Error fetching all news:', err);
      setError('Failed to fetch news. Please try again later.');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAllNews(); // Fetch news when the component mounts
  }, []);

  // Function to handle search and fetch filtered news
  const handleSearch = async (query: string, category: string, source: string, publishedAt: string) => {
    setLoading(true);
    setError(null);
    try {
      const news = await fetchNews(query, category, source, publishedAt); // Fetch filtered news
      if (news.length === 0) {
        setError('No articles found for the selected filters.');
      }
      setArticles(news); // Set filtered articles in state
    } catch (err) {
      console.error('Error fetching news:', err);
      setError('Failed to fetch news. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">News Aggregator</h1>
      <div className="max-w-2xl mx-auto">
        <SearchBar onSearch={handleSearch} /> {/* Pass handleSearch to SearchBar */}
      </div>
      {loading ? (
        <div className="flex justify-center items-center mt-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : error ? (
        <p className="text-center mt-8 text-red-500 font-medium text-lg">{error}</p>
      ) : articles.length > 0 ? (
        <div className="mt-8">
          <NewsList articles={articles} /> {/* Display filtered news here */}
        </div>
      ) : (
        <p className="text-center mt-8 text-gray-600 text-lg">
          No articles found. Please adjust your search and try again.
        </p>
      )}
    </div>
  );
};

export default Home;

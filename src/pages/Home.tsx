import React, { useState, useEffect } from 'react';
import SearchBar from '../Components/SearchBar';
import NewsList from '../Components/NewsList';
import { fetchNews } from '../../src/api/newsApi';

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

const Home: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch and set all news
  const fetchAllNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const allNews = await fetchNews('', '', '');
      setArticles(allNews);
    } catch (err) {
      console.error('Error fetching all news:', err);
      setError('Failed to fetch news. Please try again later.');
    }
    setLoading(false);
  };

  // Fetch all news on initial render
  useEffect(() => {
    fetchAllNews();
  }, []);

  const handleSearch = async (query: string, category: string, source: string) => {
    setLoading(true);
    setError(null);
    try {
      const news = await fetchNews(query, category, source);
      setArticles(news);
    } catch (err) {
      console.error('Error fetching news:', err);
      setError('No articles or news found for the selected category or source. Please try again with a different search.');
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">News Aggregator</h1>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <p className="text-center mt-4">Loading...</p>
      ) : error ? (
        <p className="text-center mt-4 text-red-500">{error}</p>
      ) : articles.length > 0 ? (
        <NewsList articles={articles} />
      ) : (
        <p className="text-center mt-4 text-gray-500">
          No articles or news found for the selected category or source. Please try again with a different search or adjust your filters.
        </p>
      )}
    </div>
  );
};

export default Home;

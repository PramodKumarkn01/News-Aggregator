import axios from 'axios';

const BASE_URL = `https://newsapi.org/v2/everything?q=tesla&from=2024-12-25&sortBy=publishedAt&apiKey=289662a1508a468f9461d11b65910e80`;

// Function to fetch news articles
export const fetchNews = async (query: string, category: string, source: string, publishedAt: string) => {
  const apiKey = '289662a1508a468f9461d11b65910e80'; // Get API key from environment variables

  if (!apiKey) {
    throw new Error('API key is missing. Please set REACT_APP_NEWS_API_KEY in your .env file.');
  }

  try {
    // Construct the query parameters dynamically based on the passed arguments
    const response = await axios.get(BASE_URL, {
      params: {
        q: query || '', // Default to an empty query if none is provided
        category: category || '', // Optional category filter
        sources: source || '', // Optional source filter
        from: publishedAt || '', // Optional published date filter (can be an empty string)
        sortBy: 'publishedAt', // Sort by publication date
        apiKey: apiKey, // Use the API key from environment variables
      },
    });

    return response.data.articles; // Return the articles from the API response
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error; // Re-throw the error for further handling
  }
};

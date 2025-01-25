import axios from 'axios';

const BASE_URL = `https://newsapi.org/v2/everything?q=tesla&from=2024-12-25&sortBy=publishedAt&apiKey=289662a1508a468f9461d11b65910e80`;

// Function to fetch news articles
export const fetchNews = async (query: string, category: string, source: string) => {
  const apiKey = '289662a1508a468f9461d11b65910e80'; // Replace with your actual API key from environment variables

  if (!apiKey) {
    throw new Error('API key is missing. Please set NEWS_API_KEY in your .env file.');
  }

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: query || 'tesla', 
        category: category || '', 
        sources: source || '', // Optional source
        from: '2024-12-22', // Example date filter
        sortBy: 'publishedAt', // Example sort parameter
        apiKey: apiKey, // Use the API key from environment variables
      },
    });

    return response.data.articles; // Return articles from the API response
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error; // Re-throw the error for further handling
  }
};

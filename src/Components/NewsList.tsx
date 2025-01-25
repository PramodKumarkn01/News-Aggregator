// NewsList.tsx
import React from 'react';

interface Article {
  title: string;
  description: string;
  url: string;
}

interface NewsListProps {
  articles: Article[];
}

const NewsList: React.FC<NewsListProps> = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {articles.map((article) => (
        <div key={article.url} className="bg-white shadow-md p-4 rounded">
          <h3 className="text-xl font-semibold">{article.title}</h3>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 inline-block">
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsList;

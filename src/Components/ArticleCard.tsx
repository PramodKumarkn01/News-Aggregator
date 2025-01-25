import React from 'react';

interface ArticleCardProps {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, description, imageUrl, url }) => {
  return (
    <div className="border rounded-lg p-4 shadow">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <h3 className="text-lg font-bold mt-2">{title}</h3>
      <p className="text-sm mt-2">{description}</p>
      <a href={url} target="_blank" className="text-blue-500 mt-4 block">
        Read more
      </a>
    </div>
  );
};

export default ArticleCard;

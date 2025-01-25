import React, { useState, useEffect } from 'react';

const Settings: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSources, setSelectedSources] = useState<string[]>([]);

  const categories = ['Technology', 'Sports', 'Politics', 'Business', 'Entertainment'];
  const sources = ['BBC News', 'CNN', 'The Guardian', 'New York Times'];

  // Save preferences to localStorage
  useEffect(() => {
    const savedCategories = localStorage.getItem('selectedCategories');
    const savedSources = localStorage.getItem('selectedSources');
    if (savedCategories) setSelectedCategories(JSON.parse(savedCategories));
    if (savedSources) setSelectedSources(JSON.parse(savedSources));
  }, []);

  const toggleSelection = (item: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const savePreferences = () => {
    localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
    localStorage.setItem('selectedSources', JSON.stringify(selectedSources));
    alert('Preferences saved!');
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Settings</h1>
      
      {/* Categories */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Select Categories</h2>
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => toggleSelection(category, selectedCategories, setSelectedCategories)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ease-in-out border-2 
                          ${selectedCategories.includes(category) ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-100 text-gray-700 border-gray-300'} 
                          hover:bg-blue-500 hover:text-white hover:border-blue-500 focus:outline-none`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Sources */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Select Sources</h2>
        <div className="flex flex-wrap gap-4">
          {sources.map((source) => (
            <button
              key={source}
              onClick={() => toggleSelection(source, selectedSources, setSelectedSources)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ease-in-out border-2 
                          ${selectedSources.includes(source) ? 'bg-green-600 text-white border-green-600' : 'bg-gray-100 text-gray-700 border-gray-300'} 
                          hover:bg-green-500 hover:text-white hover:border-green-500 focus:outline-none`}
            >
              {source}
            </button>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Preferences</h2>
        <p className="text-lg text-gray-600">Categories: {selectedCategories.join(', ') || 'None selected'}</p>
        <p className="text-lg text-gray-600">Sources: {selectedSources.join(', ') || 'None selected'}</p>
      </div>

      {/* Save Button */}
      <div className="text-center">
        <button
          onClick={savePreferences}
          className="bg-green-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300"
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
};

export default Settings;

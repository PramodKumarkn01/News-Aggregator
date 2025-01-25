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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      
      {/* Categories */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Select Categories</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => toggleSelection(category, selectedCategories, setSelectedCategories)}
              className={`px-4 py-2 rounded border ${
                selectedCategories.includes(category) ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Sources */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Select Sources</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {sources.map((source) => (
            <button
              key={source}
              onClick={() => toggleSelection(source, selectedSources, setSelectedSources)}
              className={`px-4 py-2 rounded border ${
                selectedSources.includes(source) ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              {source}
            </button>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Your Preferences</h2>
        <p>Categories: {selectedCategories.join(', ') || 'None selected'}</p>
        <p>Sources: {selectedSources.join(', ') || 'None selected'}</p>
      </div>

      {/* Save Button */}
      <button
        onClick={savePreferences}
        className="bg-green-500 text-white px-6 py-2 rounded"
      >
        Save Preferences
      </button>
    </div>
  );
};

export default Settings;

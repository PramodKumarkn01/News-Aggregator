import React, { createContext, useContext, useState } from 'react';

interface AppContextProps {
  sources: string[];
  categories: string[];
  setSources: (sources: string[]) => void;
  setCategories: (categories: string[]) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sources, setSources] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  return (
    <AppContext.Provider value={{ sources, categories, setSources, setCategories }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

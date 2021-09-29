import React, { useState } from 'react';

interface SearchContextProps {
  searchCharacter: string;
  setSearchCharacter: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = React.createContext<SearchContextProps>({
  searchCharacter: '',
  setSearchCharacter: () => '',
});

const SearchContextProvider: React.FC = ({ children }) => {
  const [searchCharacter, setSearchCharacter] = useState<string>('');
  
  const context = {
    searchCharacter,
    setSearchCharacter,
  };
  
  return <SearchContext.Provider value={context}>{children}</SearchContext.Provider>
};

export default SearchContextProvider;

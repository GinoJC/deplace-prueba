import React, { useState } from 'react';
import { FilterCharacter } from '../interfaces/Character';

interface FilterContextProps {
  filterCharacter: FilterCharacter;
  setFilterCharacter: React.Dispatch<React.SetStateAction<FilterCharacter>>;
}

export const FilterContext = React.createContext<FilterContextProps>({
  filterCharacter: {status: '', gender: ''},
  setFilterCharacter: () => {},
});

const FilterContextProvider: React.FC = ({ children }) => {
  const [filterCharacter, setFilterCharacter] = useState<FilterCharacter>({status: '', gender: ''});
  
  const context = {
    filterCharacter,
    setFilterCharacter,
  };
  
  return <FilterContext.Provider value={context}>{children}</FilterContext.Provider>
};

export default FilterContextProvider;

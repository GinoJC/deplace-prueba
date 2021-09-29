import React, { useState, useContext } from 'react';
import { SearchContent, InputText, InputSubmit } from './styles';
import { SearchContext } from 'context/searchContext';

const Search: React.FC = () => {
  const [search, setSearch] = useState('');
  const { setSearchCharacter } = useContext(SearchContext);

  const searchCharacter = e => {
    e.preventDefault();
    setSearchCharacter(search);
  }

  return (
    <SearchContent onSubmit={searchCharacter}>
      <InputText
        type='text'
        placeholder='Search Character'
        onChange={e => setSearch(e.target.value)}
      />
      <InputSubmit type='submit'></InputSubmit>
    </SearchContent>
  );
};

export default Search;
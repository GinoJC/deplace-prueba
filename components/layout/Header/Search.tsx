import React, { useState } from "react";
import { SearchContent, InputText, InputSubmit } from './styles';

const Search: React.FC = () => {
  const [search, setSearch] = useState('');

  const searchCharacter = e => {
    e.preventDefault();

    if(search.trim() === '') return;

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
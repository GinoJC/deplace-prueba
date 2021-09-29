import React, {useState, useEffect, useContext} from 'react';
import Link from 'next/link';
import { Character } from "interfaces/Character";
import { ListElement } from './styles';
import { SearchContext } from "context/searchContext";
import { FilterContext } from "context/filterContext";

interface Props {
  characters: Character[]
}

const Container: React.FC<Props> = ({characters}) => {
  const [characterList, setCharacterList] = useState<Character[]>(characters);
  const {searchCharacter} = useContext(SearchContext);
  const {filterCharacter} = useContext(FilterContext);

  useEffect(() => {
    const searchFiltered = searchCharacter ? characters.filter(character => (character.name).toLowerCase().includes(searchCharacter.toLowerCase())) : characters;
    const statusFiltered = filterCharacter.status ? searchFiltered.filter(character => character.status.toLowerCase() === filterCharacter.status.toLowerCase()) : searchFiltered;
    const genderFiltered = filterCharacter.gender ? statusFiltered.filter(character => character.gender.toLowerCase() === filterCharacter.gender.toLowerCase()) : statusFiltered;
    setCharacterList(genderFiltered);
  }, [searchCharacter, filterCharacter]);

  return (
    <div>
    {characterList.map(character => 
      <Link href={'/character/[id]'} as={`/character/${character.id}`} key={character.id}>
        <ListElement >
          <h1>{character.name}</h1>
        </ListElement>
      </Link>
    )}
    </div>

  );
};

export default Container;

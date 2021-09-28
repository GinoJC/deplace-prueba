import React from 'react';
import Link from 'next/link';
import { Character } from "core/character/character";
import { ListElement } from './styles';

interface Props {
  characters: Character[]
}

const Container: React.FC<Props> = ({characters}) => {
  console.log('Characters', characters);
  
  return (
    <div>
    {characters.map(character => 
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

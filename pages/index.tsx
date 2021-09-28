import React from "react";
import { NextPage } from "next";
import { CharactersContainer } from "components";
import { Character, CharacterService } from "core/character/character";

interface Props {
  characters: Character[];
}

const Characters: NextPage<Props> = ({ characters }) => {
  return <CharactersContainer characters={characters} />;
};

export async function getServerSideProps() {
  const [characters] = await Promise.all([
    CharacterService.getAllCharacters(),
  ]);

  return { props: { characters } };
}

export default Characters;
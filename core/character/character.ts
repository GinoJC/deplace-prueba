import client from "apollo-client";
import { allCharacters, characterById } from "./query";
import { Character } from 'interfaces/Character';

interface ICharacterService {
  getAllCharacters: () => Promise<Character[]>;
  getCharacterById: (id: string) => Promise<Character[]>;
}

const getAllCharacters = async () => {
  const { data } = await client.query({
    query: allCharacters,
  });
  return data.characters.results;
}

const getCharacterById = async (id: string) => {
  const { data } = await client.query({
    query: characterById,
    variables: { id }
  });
  return data.character;
}

export const CharacterService: ICharacterService = {
  getAllCharacters,
  getCharacterById
};
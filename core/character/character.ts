import client from "apollo-client";
import { allCharacters, characterById } from "./query";

export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}

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
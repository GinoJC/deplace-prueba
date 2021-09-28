import { gql } from "@apollo/client";

export const allCharacters = gql`
  query allCharacters {
    characters {
      results {
        id
        name
      }
    }
  }
`;

export const characterById = gql`
  query characterById($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
    }
  }
`;
import React from "react";
import { Character } from "../../core/character/character";
import { DetailContainer } from './styles';
import Image from 'next/image';

interface Props {
  character: Character;
}

const Container: React.FC<Props> = ({ character }) => {
  const {name, status, species, type, gender, image} = character;
  console.log(image);
  
  return (
    <DetailContainer>
      <div>
        <h2>Name: {name}</h2>
        <h2>Status: {status}</h2>
        <h2>Species: {species}</h2>
        <h2>Type: {type}</h2>
        <h2>Gender: {gender}</h2>
      </div>
      <div>
        <Image
          src={image}
          alt={name}
          width='300'
          height='300'
        />
      </div>
    </DetailContainer>
  );
};

export default Container;

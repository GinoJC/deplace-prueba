import { NextPage } from "next";
import Container from "components/Character/Character";
import { Character as ICharacter, CharacterService } from "core/character/character";

interface CharacterPageProps {
  character: ICharacter;
}
const Character: NextPage<CharacterPageProps> = ({ character }) => {
  return <Container character={character} />;
};

export async function getServerSideProps({ params }) {
  const { id } = params;
  
  const [character] = await Promise.all([
    CharacterService.getCharacterById(id)
  ]);
  return { props: { character } };
}

export default Character;

import { NextPage } from 'next';
import Container from 'components/Character/Character';
import { CharacterService } from 'core/character/character';
import { Character as ICharacter } from 'interfaces/Character';

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

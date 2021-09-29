import styled from 'styled-components';
import { breakpoints } from "common/theme";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-Bottom: 0px;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 0.5px solid grey;
`;

export const SearchContent = styled.form`
  display: flex;
`;

export const InputText = styled.input`
  border: 1px solid grey;
  padding: 1rem;
  min-width: 300px;
  @media ${breakpoints.s} {
    min-width: 100px;
  }
`;

export const InputSubmit = styled.button`
  height: 3rem;
  width: 3rem;
  background-size: 4rem;
  background-position: center;
  background-image: url('/buscar.png');
  background-repeat: no-repeat;
  background-color: white;
  border: none;
  margin-left: 3px;

  &:hover {
    cursor: pointer;
  }
`;

export const FilterButton = styled.button`
  height: 3rem;
  width: 3rem;
  background-size: 4rem;
  background-position: center;
  background-image: url('/filter.png');
  background-repeat: no-repeat;
  background-color: white;
  border: none;
  margin-left: 3px;

  &:hover {
    cursor: pointer;
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.5);
`;

export const ModalContent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;  
  width: 60%;
  height: 50%;
  background-color: white;
  padding: 2rem;
`;

export const Selector = styled.select`
  height: 50px;
  width: 100%;
  padding: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const Button = styled.button`
  height: 50px;
  width: 40%;
  padding: 1rem;
`;

export const BackButton = styled.button`
  height: 50px;
  width: 150px;
  line-height: 20px;
  background-color: white;
`;
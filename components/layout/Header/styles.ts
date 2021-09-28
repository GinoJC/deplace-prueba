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
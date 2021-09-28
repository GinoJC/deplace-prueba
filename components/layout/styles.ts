import styled from 'styled-components';
import { breakpoints } from "common/theme";

export const GlobalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LayoutContainer = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media ${breakpoints.s} {
    box-shadow: none;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const ChildrenContainer = styled.div`
  width: 60vw;
  padding: 2rem;
  border-radius: 5px;
  @media ${breakpoints.s} {
    width: 100vw;
  }
`;
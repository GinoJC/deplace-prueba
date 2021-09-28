import styled from 'styled-components';
import { breakpoints } from "common/theme";

export const DetailContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${breakpoints.s} {
    flex-direction: column;
    align-items: center;
  }
`;
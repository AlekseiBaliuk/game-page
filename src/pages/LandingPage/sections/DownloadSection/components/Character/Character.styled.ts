import styled from "styled-components";

export const Img = styled.img`
  width: 240px;
  height: 240px;

  @media (max-width: 1200px) {
    display: none;
    width: 100px;
  }

  @media (min-width: 1440px) {
    width: 288px;
    height: 288px;
  }
`;

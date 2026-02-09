import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  max-width: 520px;
  width: 325px;
  height: 200px;
  margin: 0 auto 32px auto;
  display: block;

  @media (max-width: 768px) {
    max-width: 320px;
  }
`;

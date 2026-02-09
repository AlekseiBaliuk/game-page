import styled from "styled-components";
import casinoRoyale from "../../../../../../shared/assets/images/casino-royale.png";

export const LogoStyled = styled.div`
  width: 264px;
  height: 120px;
  margin: 0 auto 48px auto;

  background: linear-gradient(90deg, #ff7700 0%, #ffd736 100%);

  -webkit-mask: url(${casinoRoyale}) no-repeat center / contain;
  mask: url(${casinoRoyale}) no-repeat center / contain;
`;

import styled from "styled-components";
import { geoPalette } from "../../../../theme/geoThemes";
import { Geo } from "../../../../shared/config/geo.config";

export const Wrapper = styled.section<{ locale: Geo }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 199px 16px;

  background: ${({ locale }) => `linear-gradient(
    to bottom,
    transparent 0%,
    transparent 70%,
    rgba(0, 0, 0, 0.75) 85%,
    rgba(0, 0, 0, 1) 100%
  ), url(${geoPalette[locale].hero})`};

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 480px) {
    padding: 199px 60px;
  }

  @media (min-width: 768px) {
    padding: 199px 220px;
  }

  @media (min-width: 1200px) {
    padding: 199px 420px;
  }

  @media (min-width: 1400px) {
    padding: 199px 557px;
  }
`;

export const CenterBlock = styled.div`
  text-align: center;
  max-width: 700px;
  width: 100%;
`;

import { Character } from "./components/Character/Character";
import { DownloadCard } from "./components/DownloadCard/DownloadCard";
import { GeoAndSocials } from "./components/GeoAndSocials/GeoAndSocials";
import { ResponsibleBlock } from "./components/ResponsibleBlock/ResponsibleBlock";
import {
  Content,
  SocialsAndResponsibleContainer,
  Wrapper,
} from "./DownloadSection.styled";

export const DownloadSection = () => {
  return (
    <Wrapper>
      <Content>
        <Character />
        <DownloadCard />

        <SocialsAndResponsibleContainer>
          <ResponsibleBlock />
          <GeoAndSocials />
        </SocialsAndResponsibleContainer>
      </Content>
    </Wrapper>
  );
};

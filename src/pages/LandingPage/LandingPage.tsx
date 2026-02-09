import { PageBackground } from "./LandingPage.styled";
import { DownloadSection } from "./sections/DownloadSection/DownloadSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";

export const LandingPage = () => {
  return (
    <PageBackground>
      <HeroSection />
      <DownloadSection />
    </PageBackground>
  );
};

import { useContext, useState } from "react";
import { GameModal } from "../../../../features/GameModal/GameModal";
import { Logo } from "./components/Logo/Logo";
import { OpenGameButton } from "./components/OpenGameButton/OpenGameButton";
import { Wrapper, CenterBlock } from "./HeroSection.styled";
import { SlotsImage } from "./components/SlotsImage/SlotsImage";
import { GeoContext } from "../../../../app/providers/GeoProvider";
import { geoPalette } from "../../../../theme/geoThemes";

export const HeroSection = () => {
  const { geo } = useContext(GeoContext);

  const [open, setOpen] = useState(false);

  return (
    <Wrapper locale={geo}>
      <CenterBlock>
        <Logo />
        <SlotsImage />
        <OpenGameButton onClick={() => setOpen(true)} />
      </CenterBlock>

      <GameModal open={open} onClose={() => setOpen(false)} />
    </Wrapper>
  );
};

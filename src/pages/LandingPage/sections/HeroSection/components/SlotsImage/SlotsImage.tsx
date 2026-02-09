import { useContext } from "react";
import { GeoContext } from "../../../../../../app/providers/GeoProvider";
import { geoAssets } from "../../../../../../shared/config/geo.assets";
import { Img } from "./SlotsImage.styled";

export const SlotsImage = () => {
  const { geo } = useContext(GeoContext);

  return <Img src={geoAssets[geo].slots} alt="Slots" />;
};

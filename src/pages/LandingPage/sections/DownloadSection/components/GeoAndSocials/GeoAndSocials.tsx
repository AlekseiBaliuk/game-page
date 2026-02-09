import { GeoSelect } from "../GeoSelect/GeoSelect";
import { SocialIcons } from "../SocialIcons/SocialIcons";
import { Container } from "./GeoAndSocials.styled";

interface IProps {}

export const GeoAndSocials = ({}: IProps) => {
  return (
    <Container>
      <GeoSelect />
      <SocialIcons />
    </Container>
  );
};

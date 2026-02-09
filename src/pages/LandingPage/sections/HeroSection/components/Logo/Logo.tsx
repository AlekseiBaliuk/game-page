import { LogoStyled } from "./Logo.styled";

interface IProps {
  styles?: React.CSSProperties;
}

export const Logo = ({ styles }: IProps) => <LogoStyled style={styles} />;

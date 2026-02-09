import { ButtonProps } from "@mui/material";
import { ButtonStyled } from "./Button.styled";

interface Props extends ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button = ({ onClick, children, ...props }: Props) => {
  return (
    <ButtonStyled {...props} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

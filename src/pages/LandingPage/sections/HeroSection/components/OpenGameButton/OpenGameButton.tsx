import { useTranslate } from "../../../../../../shared/hooks/useTranslate";
import { OpenGameButtonStyled } from "./OpenGameButton.styled";

type Props = {
  onClick: () => void;
};

export const OpenGameButton = ({ onClick }: Props) => {
  const t = useTranslate();

  return (
    <OpenGameButtonStyled variant="contained" size="large" onClick={onClick}>
      {t("open the game")}
    </OpenGameButtonStyled>
  );
};

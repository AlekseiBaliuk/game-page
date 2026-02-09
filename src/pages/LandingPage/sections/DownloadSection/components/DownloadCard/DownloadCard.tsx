import { useTranslate } from "../../../../../../shared/hooks/useTranslate";
import { ButtonStyled, Card, Description, Title } from "./DownloadCard.styled";
import DownloadIcon from "../../../../../../shared/assets/download.svg";
import { Logo } from "../../../HeroSection/components/Logo/Logo";

export const DownloadCard = () => {
  const t = useTranslate();

  return (
    <Card>
      <Logo styles={{ width: "176px", height: "80px" }} />

      <Title>{t("Download Casino")}</Title>

      <Description>{t("Play Min anywhere, anytime")}</Description>

      <ButtonStyled variant="contained" fullWidth>
        <img
          style={{ width: "24px", height: "24px", marginRight: "16px" }}
          src={DownloadIcon}
          alt="download"
        />
        {t("Install App")}
      </ButtonStyled>
    </Card>
  );
};

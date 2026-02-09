import { Container, Icon, SocialsText, Wrapper } from "./SocialIcons.styled";
import InstagramIcon from "../../../../../../shared/assets/images/instagram.png";
import TelegramIcon from "../../../../../../shared/assets/images/tg.png";
import XIcon from "../../../../../../shared/assets/images/x.png";
import Mail from "../../../../../../shared/assets/images/mail.png";
import { useTranslate } from "../../../../../../shared/hooks/useTranslate";

export const SocialIcons = () => {
  const t = useTranslate();

  return (
    <Container>
      <SocialsText>{t("Us on social media")}:</SocialsText>
      <Wrapper>
        <Icon src={InstagramIcon} alt="Instagram" />
        <Icon src={TelegramIcon} alt="Telegram" />
        <Icon src={XIcon} alt="X" />
        <Icon src={Mail} alt="Mail" />
      </Wrapper>
    </Container>
  );
};

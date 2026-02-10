import { Container, Icon, SocialsText, Wrapper } from "./SocialIcons.styled";
import InstagramIcon from "../../../../../../shared/assets/insta.png";
import TelegramIcon from "../../../../../../shared/assets/tg.png";
import XIcon from "../../../../../../shared/assets/x.png";
import Mail from "../../../../../../shared/assets/mail.png";
import { useTranslate } from "../../../../../../shared/hooks/useTranslate";
import { IconButton } from "@mui/material";

export const SocialIcons = () => {
  const t = useTranslate();

  const config = [
    {
      name: "Instagram",
      url: "https://www.instagram.com",
      icon: InstagramIcon,
    },
    {
      name: "Telegram",
      url: "https://t.me",
      icon: TelegramIcon,
    },
    {
      name: "X",
      url: "https://www.x.com",
      icon: XIcon,
    },
    {
      name: "Mail",
      url: "mailto:",
      icon: Mail,
    },
  ];

  return (
    <Container>
      <SocialsText>{t("Us on social media")}:</SocialsText>
      <Wrapper>
        {config.map((item) => (
          <IconButton
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ padding: 0 }}
          >
            <Icon src={item.icon} alt={item.name} />
          </IconButton>
        ))}
      </Wrapper>
    </Container>
  );
};

import { Container, Icon, Text, Wrapper } from "./ResponsibleBlock.styled";
import { useTranslate } from "../../../../../../shared/hooks/useTranslate";
import Icon18Plus from "../../../../../../shared/assets/18.png";
import Certificate from "../../../../../../shared/assets/certificate.png";

export const ResponsibleBlock = () => {
  const t = useTranslate();

  return (
    <Container>
      <Wrapper>
        <Icon src={Icon18Plus} alt="18+" />
        <Text sx={{ width: "287px" }}>{t("Only")} 18+</Text>
      </Wrapper>

      <Wrapper>
        <Icon src={Certificate} alt="Certificate" />
        <Text sx={{ width: "287px" }}>
          {t("Casino is certified by the Anjouan Gaming Authority")}
        </Text>
      </Wrapper>
    </Container>
  );
};

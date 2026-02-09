import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding: 60px 28px;
  background: linear-gradient(90deg, #02011f 65%, #06225d 100%);

  @media (min-width: 480px) {
    padding: 60px 45px;
  }

  @media (min-width: 768px) {
    padding: 60px 188px;
  }

  @media (min-width: 1200px) {
    padding: 60px 404px;
  }

  @media (min-width: 1440px) {
    padding: 60px 32px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  gap: 28px;

  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 64px;
  }
`;

export const SocialsAndResponsibleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-flow: column-reverse;
  gap: 16px;
  margin-top: 52px;

  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;

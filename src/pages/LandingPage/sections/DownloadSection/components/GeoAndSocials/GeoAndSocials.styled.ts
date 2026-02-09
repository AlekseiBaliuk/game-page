import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const SocialOrder = styled.div`
  order: 3;

  @media (max-width: 768px) {
    order: 2;
  }
`;

export const ResponsibleOrder = styled.div`
  order: 2;

  @media (max-width: 768px) {
    order: 3;
  }
`;

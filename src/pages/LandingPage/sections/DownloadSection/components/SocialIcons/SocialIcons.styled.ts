import { Typography } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 52px;
  width: 220px;

  @media (min-width: 1440px) {
    margin: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 3px;

  @media (min-width: 480px) {
    align-items: center;
    justify-content: center;
  }
`;

export const Icon = styled.img`
  width: 52px;
  height: 52px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;
`;

export const SocialsText = styled(Typography)`
  && {
    text-align: center;
    color: #bababa;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;

    @media (min-width: 1440px) {
      align-self: flex-end;
    }
  }
`;

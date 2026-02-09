import { Typography } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 24px;

  @media (min-width: 480px) {
    flex-direction: column;
    text-align: center;
    /* width: 287px; */
  }

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: center;
    justify-content: center;

    gap: 24px;
  }

  @media (min-width: 1440px) {
    flex-direction: column;
    text-align: left;
  }
`;

export const Wrapper = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
  }
`;

export const Icon = styled.img`
  width: 58px;
  height: 58px;
`;

export const Text = styled(Typography)`
  && {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #fbfbfbb2;
  }
`;

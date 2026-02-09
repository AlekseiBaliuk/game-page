import styled from "styled-components";
import { Button } from "../../../../../../shared/ui/Button/Button";
import { Box, Typography } from "@mui/material";

export const Card = styled(Box)`
  && {
    padding: 20px 28px;
    border-radius: 16px;
    width: 320px;
    background: transparent;
    border: 1px dashed #ff8d6b;
    /* background: linear-gradient(90deg, #ff8d6b 0%, #ffba47 100%); */

    @media (min-width: 480px) {
      width: 390px;
    }
  }
`;

export const Title = styled(Typography)`
  && {
    font-weight: 860;
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 6px;
    color: #fff;
    text-wrap-mode: nowrap;
  }
`;

export const Description = styled(Typography)`
  && {
    font-weight: 590;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 18px;
    color: #bababa;
  }
`;

export const ButtonStyled = styled(Button)`
  && {
    padding: 8px 24px;
    width: 250px;
    height: 56px;
  }
`;

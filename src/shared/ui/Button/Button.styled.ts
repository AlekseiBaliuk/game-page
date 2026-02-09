import { Button } from "@mui/material";
import styled from "styled-components";

export const ButtonStyled = styled(Button)`
  && {
    border-radius: 12px;
    font-weight: 590 !important;
    line-height: 22px;
    font-size: 16px;
    text-transform: capitalize;
    background: linear-gradient(90deg, #ff8d6b 0%, #ffba47 100%);
    color: #fff;

    &:hover {
      background: linear-gradient(90deg, #ff8d6b 0%, #ffba47 100%);
      opacity: 0.9;
    }
  }
`;

import styled, { css } from "styled-components";

import { ButtonVariant } from "./types";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariant = {
  primary: "purple",
  secondary: "orange",
  success: "green",
  danger: "red"
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  background-color: ${({ theme }) => theme.primary};

  /* ${({ variant }) =>
    css`
      background-color: ${buttonVariant[variant]};
      color: white;
    `} */
`;

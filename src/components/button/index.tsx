import { ButtonProps } from "./types";

import * as S from "./styles";

export function Button({ variant = "primary" }: ButtonProps) {
  return (
    <S.ButtonContainer variant={variant}>
      <span>Enviar</span>
    </S.ButtonContainer>
  );
}

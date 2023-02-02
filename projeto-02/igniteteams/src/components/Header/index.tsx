import * as Styled from "./styles";

import logoImg from '@assets/logo.png';

type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
  return (
    <Styled.Container>
      { 
        showBackButton &&
        <Styled.BackButton>
          <Styled.BackIcon />
        </Styled.BackButton>
      }

      <Styled.Logo source={logoImg} />
    </Styled.Container>
  )
}
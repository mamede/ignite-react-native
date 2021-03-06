import React from 'react';
import { SvgProps } from 'react-native-svg';
import { useTheme } from 'styled-components';

import * as Styled from './styles';

interface Props {
  name: string;
  icon: React.FC<SvgProps>
}

export function Accessory({
  name,
  icon: Icon,
  ...rest
}:Props){
  const theme = useTheme();

  return (
    <Styled.Container {...rest}>
      <Icon 
        width={32} 
        height={32} 
        fill={theme.colors.header} 
      />
      <Styled.Name>{name}</Styled.Name>
    </Styled.Container>
  );
}
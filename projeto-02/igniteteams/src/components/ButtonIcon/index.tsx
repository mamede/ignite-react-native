import { TouchableOpacityProps } from 'react-native';

import * as Styled from './styles';

type Props = TouchableOpacityProps & {

}

export function ButtonIcon({}: Props) {
  return(
    <Styled.Container>
      <Styled.Icon name="home" type="PRIMARY" />
    </Styled.Container>
  );
}
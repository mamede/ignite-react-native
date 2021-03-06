import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { Car as ModelCar } from '../../database/model/Car';

import * as Styled from './styles';

interface Props extends RectButtonProps {
  data: ModelCar
}

export function Car({ data, ...rest } : Props){
  const MotorIcon = getAccessoryIcon(data.fuel_type);
  
  return (
    <Styled.Container {...rest}>
      <Styled.Details>
        <Styled.Brand>{data.brand}</Styled.Brand>
        <Styled.Name>{data.name}</Styled.Name>

        <Styled.About>
          <Styled.Rent>
            <Styled.Period>{data.period}</Styled.Period>
            <Styled.Price>{`R$ ${data.price}`}</Styled.Price>
          </Styled.Rent>

          <Styled.Type>
            <MotorIcon />
          </Styled.Type>
        </Styled.About>
      </Styled.Details>

      <Styled.CarImage 
        source={{ uri: data.thumbnail}} 
        resizeMode="contain"
      />
    </Styled.Container>
  );
}
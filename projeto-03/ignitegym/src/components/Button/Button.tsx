import { Button as ButtonNativeBase, Text } from 'native-base';

// TYPES
import { ButtonProps as Props } from '@components/Button/Button.types'
 
export function Button({ title, variant = 'solid', ...rest }: Props) {
  return (
    <ButtonNativeBase
      w="full"
      h={16}
      bg={variant === 'outline' ? 'transparent' : 'green.700'}
      borderWidth={variant === 'outline' ? 1 : 0}
      borderColor="green.500"
      rounded="sm"
      _pressed={{
        bg: variant === 'outline' ? 'gray.500' : 'green.500'
      }}
      {...rest}
    >
      <Text 
        color={variant === 'outline' ? 'green.500' : 'white'} 
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
}
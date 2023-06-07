import { VStack } from 'native-base';

// COMPONENTS
import { HomeHeader } from '@components/HomeHeader/HomeHeader';

export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />
    </VStack>
  );
}
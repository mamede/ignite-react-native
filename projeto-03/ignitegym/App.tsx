import { StatusBar, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';

// FONTS
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

// COMPONENTS
import { Loading } from '@components/Loading/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Loading /> : <View />}
    </NativeBaseProvider>
  );
}
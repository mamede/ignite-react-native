import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';

// ROUTES
import { Routes } from '@routes/index';

// FONTS
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

// COMPONENTS
import { Loading } from '@components/Loading/Loading';

// SCREENS
import { SignUp } from '@screens/SignUp/SignUp';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}
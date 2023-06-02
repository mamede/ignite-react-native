import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
const { Navigator, Screen } = createNativeStackNavigator();

// SCREENS
import { SignIn } from '@screens/SignIn/SignIn';
import { SignUp } from '@screens/SignUp/SignUp';

// TYPES
type AuthRoutes = {
  signIn: undefined;
  signUp: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="signIn"
        component={SignIn}
      />

      <Screen 
        name="signUp"
        component={SignUp}
      />
    </Navigator>
  )
}
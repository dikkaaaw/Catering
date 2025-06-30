import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import useCachedResources from './hooks/useCachedResource';
import OnboardingScreen from '~/onboarding/OnboardingScreen';
import LoginScreen from '~/auth/LoginScreen';
import RegisterScreen from '~/auth/RegisterScreen';
import EnterEmailScreen from '~/auth/forgot-password/EnterEmailScreen';
import ResetPasswordScreen from '~/auth/forgot-password/ResetPasswordScreen';
import TabsLayout from '~/tabs/_layout';
import './global.css';

const Stack = createNativeStackNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="EnterEmail" component={EnterEmailScreen} />
          <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
          <Stack.Screen name="Tabs" component={TabsLayout} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

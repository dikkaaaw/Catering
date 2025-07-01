import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';

import useCachedResources from './hooks/useCachedResource';
import OnboardingScreen from '~/onboarding/OnboardingScreen';
import LoginScreen from '~/auth/LoginScreen';
import RegisterScreen from '~/auth/RegisterScreen';
import EnterEmailScreen from '~/auth/forgot-password/EnterEmailScreen';
import ResetPasswordScreen from '~/auth/forgot-password/ResetPasswordScreen';
import SelectLocationScreen from '~/location/SelectLocationScreen';
import TabsLayout from '~/tabs/_layout';

import './global.css';

const Stack = createStackNavigator();

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
          <Stack.Screen name="SelectLocation" component={SelectLocationScreen} />
          <Stack.Screen
            name="Tabs"
            component={TabsLayout}
            options={{
              cardStyleInterpolator: ({ current, layouts }) => {
                return {
                  cardStyle: {
                    transform: [
                      {
                        translateY: current.progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [-layouts.screen.height, 0],
                          extrapolate: 'clamp',
                        }),
                      },
                    ],
                  },
                };
              },
              transitionSpec: {
                open: TransitionSpecs.TransitionIOSSpec,
                close: TransitionSpecs.TransitionIOSSpec,
              },
              gestureDirection: 'vertical-inverted',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

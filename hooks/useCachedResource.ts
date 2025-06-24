import {  useEffect, useState } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        const fonts = await Font.loadAsync({
          'SF-Pro-Display-Regular': require('../assets/fonts/SF-Pro-Display-Regular.otf'),
          'SF-Pro-Display-Medium': require('../assets/fonts/SF-Pro-Display-Medium.otf'),
          'SF-Pro-Display-Semibold': require('../assets/fonts/SF-Pro-Display-Semibold.otf'),
          'SF-Pro-Display-Bold': require('../assets/fonts/SF-Pro-Display-Bold.otf'),
        });

    console.log('Loaded fonts:', fonts);
    const loadedFonts = await Font.getLoadedFonts();
    console.log('Currently loaded fonts:', loadedFonts);

    await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
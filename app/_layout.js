import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync(); // When app is loading, it will make splash screen still visible

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            SplashScreen.hideAsync(); // When fonts are loaded, it will hide the splash screen 
        }
    }, [fontsLoaded]); 

    if (!fontsLoaded) return null;

    return <Stack onLayout={onLayoutRootView} />
}
export default Layout;
import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync(); // When app is loading, it will make splash screen still visible

const Layout = () => {
    return <Stack />
}

export default Layout;
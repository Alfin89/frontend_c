import React, { useState, useEffect } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import SplashScreenCustom from '@/app/screen/SplashScreen'; // SplashScreen buatan Anda
import { useColorScheme } from '@/hooks/useColorScheme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isSplashFinished, setSplashFinished] = useState(false); // State untuk kontrol splash
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null; // Jangan render apa pun sebelum font selesai dimuat
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {isSplashFinished ? ( // Tampilkan layar splash sebelum ke Stack
        <>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
        </>
      ) : (
        <SplashScreenCustom onFinish={() => setSplashFinished(true)} />
      )}
    </ThemeProvider>
  );
}

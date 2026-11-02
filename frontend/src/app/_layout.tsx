import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import "../global.css";

import AppTabs from '@/components/app-tabs';

import { useFonts } from "expo-font";
import {
  Quicksand_400Regular,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import {
  Caveat_400Regular,
  Caveat_700Bold,
} from "@expo-google-fonts/caveat";

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const [loaded] = useFonts({
    Quicksand: Quicksand_400Regular,
    QuicksandBold: Quicksand_700Bold,
    Caveat: Caveat_400Regular,
    CaveatBold: Caveat_700Bold
  });

  if (!loaded) return null;

  return (
    <AppTabs />
  );
}

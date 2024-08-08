// app/index.tsx
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { hp, wp } from '../helpers/common';
import { theme } from '../constants/Colors';
import * as SplashScreen from 'expo-splash-screen';
import ScreenWraper from '@/components/ScreenWraper';

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const prepare = async () => {
      // Preload assets
      await new Promise(resolve => setTimeout(resolve, 2000));
      SplashScreen.hideAsync();
      // Navigate to feed and clear the history stack
      router.replace('screens/feed');
    };
    prepare();
  }, [router]);

  return (
    <ScreenWraper bg={theme.colors.background}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Image style={styles.welcomeImage} resizeMode='contain' source={require('../assets/images/splash.png')} />
        <Text style={styles.title}>Eroticgram</Text>
        <Text style={styles.splashTitle}>Eroticgram is the platform where words ignite desire</Text>
      </View>
    </ScreenWraper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
    marginHorizontal: wp(4),
  },
  welcomeImage: {
    height: hp(30),
    width: wp(100),
    alignSelf: 'center',
  },
  title: {
    color: theme.colors.rose,
    fontSize: hp(6),
    fontWeight: theme.fonts.extraBold,
  },
  splashTitle: {
    textAlign: 'center',
    paddingHorizontal: wp(10),
    fontSize: hp(1.7),
    color: theme.colors.roseLight,
  },
});

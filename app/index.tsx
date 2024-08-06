import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ScreenWraper from '@/components/ScreenWraper';
import { StatusBar } from 'expo-status-bar';
import { hp, wp } from '../helpers/common';
import { theme } from '../constants/Colors';
import SplashScreen from 'react-native-splash-screen';
import { useRouter } from 'expo-router';

export default function index() {
  const router = useRouter();

  useEffect(() => {
    // Hide the splash screen after 3 seconds
    setTimeout(() => {
      router.push('signUp');
    }, 3000);
  }, []);

  return (
    <ScreenWraper bg={theme.colors.background}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* Welcome Image */}
        <Image style={styles.welcomeImage} resizeMode='contain' source={require('../assets/images/splash.png')} />
        {/* title */}
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
    marginHorizontal: wp(4)
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
  }

})
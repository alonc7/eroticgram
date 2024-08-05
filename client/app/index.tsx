import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from 'react'
import ScreenWraper from '@/components/ScreenWraper'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '../helpers/common';
import { theme } from '../constants/Colors';
import Loading from '@/components/Loading';
import { useRouter } from 'expo-router';
export default function index() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      router.push('login')

    }, 3000); // Display splash screen for 3 seconds
  }, []);

  return (
    <ScreenWraper bg='white'>
      <StatusBar style="dark" />
      {isLoading ? (
        <View style={styles.container}>

          {/* Welcome Image */}
          <Image style={styles.welcomeImage} resizeMode='contain' source={require('../assets/images/splash.png')} />
          {/* title */}
          <Text style={styles.title}> Sextual</Text>
          <Text style={styles.splashTitle}>Sextual is the platform where words ignite desire</Text>
          <View style={{ paddingTop: hp(4) }}>
            <Loading />
          </View>
        </View>
      ) :
        <View>

        </View>
      }
    </ScreenWraper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#383637',
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
import React, { useEffect, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { hp, wp } from '@/helpers/common';
import { theme } from '@/constants/Colors';
import * as SplashScreen from 'expo-splash-screen';
import ScreenWrapper from '@/components/ScreenWrapper';
import * as Animatable from 'react-native-animatable';
import { useFonts } from 'expo-font';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function SplashScreenComponent() {
    const router = useRouter();
    const [fontsLoaded] = useFonts({
        // Load your custom fonts here
        // 'CustomFont-Regular': require('@/assets/fonts/CustomFont-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            // Hide the splash screen after a delay
            setTimeout(async () => {
                await SplashScreen.hideAsync();
            }, 2000); // 2 seconds delay
        }
    }, [fontsLoaded]);

    useEffect(() => {
        if (fontsLoaded) {
            const timer = setTimeout(() => {
                router.replace('screens/feed');
            }, 3000); // Navigate after 3 seconds

            return () => clearTimeout(timer);
        }
    }, [fontsLoaded, router]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <ScreenWrapper bg={theme.colors.background}>
            <View style={styles.container} onLayout={onLayoutRootView}>
                <StatusBar style="dark" />
                <Animatable.Image
                    animation="fadeInUp"
                    duration={1200}
                    style={styles.welcomeImage}
                    resizeMode='contain'
                    source={require('@/assets/images/splash.png')}
                />
                <Animatable.Text
                    animation="zoomIn"
                    duration={1500}
                    delay={500}
                    style={styles.title}
                >
                    Eroticgram
                </Animatable.Text>
                <Animatable.Text
                    animation="fadeIn"
                    duration={1500}
                    delay={1000}
                    style={styles.splashTitle}
                >
                    Eroticgram is the platform where words ignite desire
                </Animatable.Text>
            </View>
        </ScreenWrapper>
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
        fontWeight: '900',
        marginTop: hp(2),
        // fontFamily: 'CustomFont-Regular', // Uncomment when you have custom fonts
    },
    splashTitle: {
        textAlign: 'center',
        paddingHorizontal: wp(10),
        fontSize: hp(1.7),
        color: theme.colors.roseLight,
        marginTop: hp(1.5),
        // fontFamily: 'CustomFont-Regular', // Uncomment when you have custom fonts
    }
});
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Pressable, GestureResponderEvent } from 'react-native';
import { theme } from '@/constants/Colors';
import { wp } from '@/helpers/common';
import { useNavigation } from 'expo-router';

const AccountScreen = () => {
    const navigation = useNavigation();

    const [user,] = useState({
        name: 'John Doe',
        username: 'johndoe',
        profilePicture: 'https://picsum.photos/200/500',
    });
    const [isLoggedIn, setIsLogedIn] = useState(false)

    const handleNavigation: (targetId: string) => void = (targetId) => {
        switch (targetId) {
            case 'login':
                navigation.navigate('login'); // Assuming 'login' is a screen name
                break;
            case 'signUp':
                navigation.navigate('signUp'); 
                break;
            case 'contact':
                navigation.navigate('contact'); // Assuming 'contact' is a screen name
                break;
            default:
                console.warn(`Unhandled target ID: ${targetId}`);
        }
    };



    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>
                {isLoggedIn ? `Hello, ${user.name}!` : 'Hello, dear guest'}
            </Text>

            <View style={styles.linksContainer}>
                <Pressable
                    onPress={() => handleNavigation('login')}>
                    <Text style={styles.linkText}>Login</Text>
                </Pressable>
                <Pressable
                    onPress={() => handleNavigation('signUp')}>

                    <Text style={styles.linkText}>Sign Up</Text>
                </Pressable>
                <Pressable
                    onPress={() => handleNavigation('contact')}>
                    <Text style={styles.linkText}>Contact Us</Text>
                </Pressable>
            </View>

            <Text style={styles.version}>Prototype 0.0.1</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    linksContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    linkText: {
        fontSize: 16,
        color: theme.light.text,
        marginBottom: 10,
    },
    version: {
        position: 'absolute',
        bottom: wp(2),
    },
});

export default AccountScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Pressable, KeyboardAvoidingView, Platform, Animated, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { supabase } from '../../lib/supabase';
import { theme } from '@/constants/Colors';
import { hp, wp } from '@/helpers/common';

const SignUpForm = () => {
    const [fadeAnim] = useState(new Animated.Value(0));
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    React.useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, []);

    async function signUpWithEmail() {
        setLoading(true);
        const { error } = await supabase.auth.signUp({ email, password });

        if (error) Alert.alert('Error', error.message);
        else Alert.alert('Success', 'Please verify your email!');
        setLoading(false);
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <LinearGradient
                colors={[theme.colors.background, theme.colors.secondary]}
                style={styles.gradient}
            >
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Animated.View style={[styles.formContainer, { opacity: fadeAnim }]}>
                        <Text style={styles.title}>Create an Account</Text>
                        <Text style={styles.subtitle}>Sign up to get started</Text>

                        <View style={styles.inputWrapper}>
                            <Ionicons name="person-outline" size={24} color={theme.colors.text} style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Username"
                                placeholderTextColor={theme.colors.neutral}
                                value={username}
                                onChangeText={setUsername}
                                autoCapitalize="none"
                            />
                        </View>

                        <View style={styles.inputWrapper}>
                            <Ionicons name="mail-outline" size={24} color={theme.colors.text} style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                placeholderTextColor={theme.colors.neutral}
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                        </View>

                        <View style={styles.inputWrapper}>
                            <Ionicons name="lock-closed-outline" size={24} color={theme.colors.text} style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                placeholderTextColor={theme.colors.neutral}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                            />
                        </View>

                        <Pressable
                            style={[styles.button, loading && styles.buttonDisabled]}
                            onPress={signUpWithEmail}
                            disabled={loading}
                        >
                            <Text style={styles.buttonText}>
                                {loading ? 'Signing Up...' : 'Sign Up'}
                            </Text>
                        </Pressable>

                        <View style={styles.switchContainer}>
                            <Text style={styles.switchText}>Already have an account? </Text>
                            <Pressable>
                                <Text style={styles.switchLink}>Log In</Text>
                            </Pressable>
                        </View>
                    </Animated.View>
                </ScrollView>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    formContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 20,
        padding: hp(4),
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: hp(4),
        fontWeight: 'bold',
        color: theme.colors.text,
        marginBottom: hp(1),
    },
    subtitle: {
        fontSize: hp(2),
        color: theme.colors.neutral,
        marginBottom: hp(3),
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: hp(6),
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 10,
        marginBottom: hp(2),
        paddingHorizontal: wp(3),
    },
    icon: {
        marginRight: wp(2),
    },
    input: {
        flex: 1,
        color: theme.colors.text,
        fontSize: hp(2),
    },
    button: {
        backgroundColor: theme.colors.accent2,
        paddingVertical: hp(1.5),
        paddingHorizontal: wp(10),
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonDisabled: {
        opacity: 0.7,
    },
    buttonText: {
        color: theme.colors.text,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: hp(2.2),
    },
    switchContainer: {
        flexDirection: 'row',
        marginTop: hp(3),
    },
    switchText: {
        color: theme.colors.neutral,
        fontSize: hp(1.8),
    },
    switchLink: {
        color: theme.colors.accent1,
        fontSize: hp(1.8),
        fontWeight: 'bold',
    },
});

export default SignUpForm;

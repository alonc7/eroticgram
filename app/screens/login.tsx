import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Pressable, KeyboardAvoidingView, Platform, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { supabase } from '../../lib/supabase';
import { theme } from '@/constants/Colors';
import { hp, wp } from '@/helpers/common';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const fadeAnim = useState(new Animated.Value(0))[0];

    React.useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, []);

    async function signInWithEmail() {
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) Alert.alert('Error', error.message);
        setLoading(false);
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <LinearGradient
                colors={[theme.colors.background, theme.colors.primary]}
                style={styles.gradient}
            >
                <Animated.View style={[styles.formContainer, { opacity: fadeAnim }]}>
                    <Text style={styles.title}>Welcome Back</Text>
                    <Text style={styles.subtitle}>Sign in to continue</Text>

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
                            secureTextEntry={!isPasswordVisible}
                        />
                        <Pressable onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                            <Ionicons
                                name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
                                size={24}
                                color={theme.colors.text}
                            />
                        </Pressable>
                    </View>

                    <Pressable style={styles.forgotPassword}>
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </Pressable>

                    <Pressable
                        style={[styles.button, loading && styles.buttonDisabled]}
                        onPress={signInWithEmail}
                        disabled={loading}
                    >
                        <Text style={styles.buttonText}>
                            {loading ? 'Signing In...' : 'Sign In'}
                        </Text>
                    </Pressable>

                    <View style={styles.signupContainer}>
                        <Text style={styles.signupText}>Don't have an account? </Text>
                        <Pressable>
                            <Text style={styles.signupLink}>Sign Up</Text>
                        </Pressable>
                    </View>
                </Animated.View>
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
    formContainer: {
        width: '80%',
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
    forgotPassword: {
        alignSelf: 'flex-end',
        marginBottom: hp(3),
    },
    forgotPasswordText: {
        color: theme.colors.accent1,
        fontSize: hp(1.8),
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
    signupContainer: {
        flexDirection: 'row',
        marginTop: hp(3),
    },
    signupText: {
        color: theme.colors.neutral,
        fontSize: hp(1.8),
    },
    signupLink: {
        color: theme.colors.accent1,
        fontSize: hp(1.8),
        fontWeight: 'bold',
    },
});

export default LoginForm;
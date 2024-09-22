import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Alert,
    Pressable,
    KeyboardAvoidingView,
    Platform,
    Animated,
    Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { supabase } from '../../lib/supabase';
import { theme } from '@/constants/Colors';
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const fadeAnim = useState(new Animated.Value(0))[0];
    const navigation = useNavigation();

    useEffect(() => {
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
                    <Text style={styles.title}>Welcome</Text>
                    <Text style={styles.subtitle}>Sign in to continue</Text>

                    <View style={styles.inputWrapper}>
                        <Ionicons
                            name="mail-outline"
                            size={width * 0.06}
                            color={theme.colors.text}
                            style={styles.icon}
                        />
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
                        <Ionicons
                            name="lock-closed-outline"
                            size={width * 0.06}
                            color={theme.colors.text}
                            style={styles.icon}
                        />
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
                                size={width * 0.06}
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
                        <Pressable onPress={() => navigation.navigate('SignUp')}>
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
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 20,
        padding: height * 0.04,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: height * 0.002,
        },
        shadowOpacity: 0.25,
        shadowRadius: height * 0.005,
        elevation: 5,
    },
    title: {
        fontSize: height * 0.04,
        fontWeight: 'bold',
        color: theme.colors.text,
        marginBottom: height * 0.01,
    },
    subtitle: {
        fontSize: height * 0.02,
        color: theme.colors.neutral,
        marginBottom: height * 0.03,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: height * 0.06,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 10,
        marginBottom: height * 0.02,
        paddingHorizontal: width * 0.03,
    },
    icon: {
        marginRight: width * 0.02,
    },
    input: {
        flex: 1,
        color: theme.colors.text,
        fontSize: height * 0.02,
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginBottom: height * 0.03,
    },
    forgotPasswordText: {
        color: theme.colors.accent1,
        fontSize: height * 0.018,
    },
    button: {
        backgroundColor: theme.colors.accent2,
        paddingVertical: height * 0.015,
        paddingHorizontal: width * 0.1,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: height * 0.002,
        },
        shadowOpacity: 0.25,
        shadowRadius: height * 0.005,
        elevation: 5,
    },
    buttonDisabled: {
        opacity: 0.7,
    },
    buttonText: {
        color: theme.colors.text,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: height * 0.022,
    },
    signupContainer: {
        flexDirection: 'row',
        marginTop: height * 0.03,
    },
    signupText: {
        color: theme.colors.neutral,
        fontSize: height * 0.018,
    },
    signupLink: {
        color: theme.colors.accent1,
        fontSize: height * 0.018,
        fontWeight: 'bold',
    },
});

export default LoginForm;

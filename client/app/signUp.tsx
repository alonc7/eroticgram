import { theme } from '@/constants/Colors';
import { hp } from '@/helpers/common';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Mail from '@/assets/icons/Mail';
import Lock from '@/assets/icons/Lock';

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = () => {
        if (password === confirmPassword) {
            Alert.alert('Signup', `Email: ${email}, Password: ${password}`);
        } else {
            Alert.alert('Error', 'Passwords do not match.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <View style={styles.inputWrapper}>
                <Mail width={24} height={24} style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Your Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.inputWrapper}>
                <Lock width={24} height={24} style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>
            <View style={styles.inputWrapper}>
                <Lock width={24} height={24} style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                />
            </View>


            <TouchableOpacity style={styles.button} onPress={handleSignup}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: hp(20),
        backgroundColor: theme.colors.background,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        color: theme.colors.primary,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        borderColor: theme.colors.primary,
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 4,
        backgroundColor: theme.colors.secondary,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        color: theme.colors.text,
    },
    button: {
        backgroundColor: theme.colors.border,
        paddingVertical: 10,
        borderRadius: 4,
    },
    buttonText: {
        color: theme.colors.text,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default SignupForm;

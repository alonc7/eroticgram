import { theme } from '@/constants/Colors';
import { hp } from '@/helpers/common';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Pressable } from 'react-native';
import Mail from '@/assets/icons/Mail'; // Adjust the import based on your project structure
import Lock from '@/assets/icons/Lock';
import { supabase } from '../../lib/supabase'

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)

    const handleLogin = () => {
        Alert.alert('Login', `Email: ${email}, Password: ${password}`);
    };
    async function signInWithEmail() {
        setLoading(true)
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        if (error) Alert.alert(error.message)
        setLoading(false)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.inputWrapper}>
                <Mail width={24} height={24} style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
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

            {/* <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity> */}
            <Pressable style={styles.button} onPress={() => signInWithEmail()} >
                <Text style={styles.buttonText}>Sign in</Text>
            </Pressable>
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

export default LoginForm;

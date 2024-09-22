import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, KeyboardAvoidingView, Platform, Animated, ScrollView, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '@/constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const AddPostScreen = () => {
    const [fadeAnim] = useState(new Animated.Value(0));
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, []);

    const handlePost = () => {
        if (title && content) {
            setLoading(true);
            // Simulate post saving logic, then reset the form
            setTimeout(() => {
                setLoading(false);
                setTitle('');
                setContent('');
                navigation.goBack(); // Navigate back to feed after posting
            }, 2000);
        } else {
            Alert.alert('Error', 'Title and content cannot be empty.');
        }
    };

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
                        <Text style={styles.title}>Create a Magical Post</Text>
                        <Text style={styles.subtitle}>Share your thoughts, creativity, or story.</Text>

                        <View style={styles.inputWrapper}>
                            <Ionicons name="pencil-outline" size={24} color={theme.colors.text} style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Post Title"
                                placeholderTextColor={theme.colors.neutral}
                                value={title}
                                onChangeText={setTitle}
                                autoCapitalize="none"
                            />
                        </View>

                        <View style={styles.textAreaWrapper}>
                            <Ionicons name="document-text-outline" size={24} color={theme.colors.text} style={styles.icon} />
                            <TextInput
                                style={styles.textArea}
                                placeholder="What's on your mind?"
                                placeholderTextColor={theme.colors.neutral}
                                value={content}
                                onChangeText={setContent}
                                multiline
                                numberOfLines={6}
                            />
                        </View>

                        <Pressable
                            style={[styles.button, loading && styles.buttonDisabled]}
                            onPress={handlePost}
                            disabled={loading}
                        >
                            <Text style={styles.buttonText}>
                                {loading ? 'Posting...' : 'Post'}
                            </Text>
                        </Pressable>

                        <View style={styles.extrasContainer}>
                        
                            {/* <Pressable style={styles.extrasButton}>
                                <Ionicons name="mic-outline" size={24} color={theme.colors.accent1} />
                                <Text style={styles.extrasText}>Record Audio</Text>
                            </Pressable> */}
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
        paddingHorizontal: '5%', // Added padding for responsiveness
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
        textAlign: 'center'
    },
    subtitle: {
        fontSize: width * 0.05,
        color: theme.colors.neutral,
        marginBottom: height * 0.03,
        textAlign: 'center',
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
    textAreaWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
        height: height * 0.15, // Adjusted to be smaller
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 10,
        marginBottom: '4%',
        paddingHorizontal: '3%',
    },
    icon: {
        marginRight: width * 0.02,
    },
    input: {
        flex: 1,
        color: theme.colors.text,
        fontSize: height * 0.02,
    },
    textArea: {
        flex: 1,
        color: theme.colors.text,
        fontSize: width * 0.045,
        textAlignVertical: 'top',
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
    extrasContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '5%',
        width: '100%',
    },
    extrasButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    extrasText: {
        color: theme.colors.accent1,
        marginLeft: '3%',
        fontWeight: 'semibold',
        fontSize: width * 0.04,
    },
});

export default AddPostScreen;

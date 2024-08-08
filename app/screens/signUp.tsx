import React, { useState } from 'react'
import { Alert, StyleSheet, View, Text, ScrollView, Pressable, TextInput } from 'react-native'
import { supabase } from '../../lib/supabase'
import { isLoading } from 'expo-font'
import { theme } from '@/constants/Colors'
import { hp, } from '@/helpers/common'
import { Input } from '@rneui/base';
import Loading from '@/components/Loading'

export default function SignUPForm() {
    const [loading, setLoading] = useState(false)
    const [isCreator, setIsCreator] = useState(true);
    const [creatorData, setCreatorData] = useState({
        name: '',
        email: '',
        password: '',
        username: '',
        bio: '',
        contentNiche: '',
        socialMediaHandles: '',
        profilePicture: '',
        contentSamples: ''
    });
    const [consumerData, setConsumerData] = useState({
        name: '',
        email: '',
        password: '',
        username: '',
        profilePicture: '',
        interests: ''
    });

    const handleCreatorChange = (name: string, value: string) => {
        setCreatorData({ ...creatorData, [name]: value });
    };

    const handleConsumerChange = (name: string, value: string) => {
        setConsumerData({ ...consumerData, [name]: value });
    };

    const switchForm = () => {
        setIsCreator(!isCreator);
    }



    async function signUpWithEmail() {
        setLoading(true)
        const { data: { session }, error, } = await supabase.auth.signUp({
            email: isCreator ? creatorData.email : consumerData.email,
            password: isCreator ? creatorData.password : consumerData.password,
        })

        if (error) Alert.alert(error.message)
        if (!session) Alert.alert('Please check your inbox for email verification!')
        setLoading(false)
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{isCreator ? 'Join as Content Creator' : 'Content Consumer Registration'}</Text>
                <Pressable onPress={switchForm}>
                    <Text style={styles.switchText}>{isCreator ? 'Join as Content Creator' : 'Join as Consumer'}</Text>
                </Pressable>
            </View>
            {isCreator ? (
                <View>
                    <Input
                        style={styles.inputWrapper}
                        placeholder="Name"
                        value={creatorData.name}
                        onChangeText={(text) => handleCreatorChange('name', text)}
                        leftIcon={{ type: 'font-awesome', name: 'user', color: theme.colors.neutral }}
                        // rightIcon={{ type: 'font-awesome', name: 'check-circle', color: 'green' }} // Show validation icon
                        autoCapitalize="none"
                    />
                    <Input
                        style={styles.inputWrapper}
                        placeholder="User name"
                        value={creatorData.username}
                        onChangeText={(text) => handleCreatorChange('username', text)}
                        leftIcon={{ type: 'font-awesome', name: 'user', color: theme.colors.neutral }}
                        // rightIcon={{ type: 'font-awesome', name: 'check-circle', color: 'green' }} // Show validation icon
                        autoCapitalize="none"
                    />
                    <Input
                        style={styles.inputWrapper}
                        placeholder="Email"
                        value={creatorData.email}
                        onChangeText={(text) => handleCreatorChange('email', text)}
                        leftIcon={{ type: 'font-awesome', name: 'envelope', color: theme.colors.neutral }}

                    />
                    <Input
                        style={styles.inputWrapper}
                        placeholder="Password"
                        value={creatorData.password}
                        onChangeText={(text) => handleCreatorChange('password', text)}
                        secureTextEntry
                        leftIcon={{ type: 'font-awesome', name: 'key', color: theme.colors.neutral }}

                    />
                    <Input
                        style={styles.inputWrapper}
                        placeholder="Bio"
                        value={creatorData.bio}
                        onChangeText={(text) => handleCreatorChange('bio', text)}
                        leftIcon={{ type: 'font-awesome', name: 'book', color: theme.colors.neutral }}

                    />
                    <Input
                        style={styles.inputWrapper}
                        placeholder="Profile Picture URL (optional)"
                        value={creatorData.profilePicture}
                        onChangeText={(text) => handleCreatorChange('profilePicture', text)}
                        leftIcon={{ type: 'font-awesome', name: 'image', color: theme.colors.neutral }}

                    />
                    <Input
                        style={styles.inputWrapper}
                        placeholder="Content Niche"
                        value={creatorData.contentNiche}
                        onChangeText={(text) => handleCreatorChange('contentNiche', text)}
                        leftIcon={{ type: 'font-awesome', name: '', color: theme.colors.neutral }}

                    />
                    <Input
                        style={styles.inputWrapper}
                        placeholder="Social Media Handles"
                        value={creatorData.socialMediaHandles}
                        onChangeText={(text) => handleCreatorChange('socialMediaHandles', text)}
                        leftIcon={{ type: 'font-awesome', name: '', color: theme.colors.neutral }}

                    />
                </View>
            ) : (
                <View>

                    <Input
                        style={styles.inputWrapper}
                        placeholder="Name"
                        value={consumerData.name}
                        onChangeText={(text) => handleConsumerChange('name', text)}
                        leftIcon={{ type: 'font-awesome', name: 'user', color: theme.colors.neutral }}
                        // rightIcon={{ type: 'font-awesome', name: 'check-circle', color: 'green' }} // Show validation icon
                        autoCapitalize="none"
                    />
                    <Input
                        style={styles.inputWrapper}
                        placeholder="User name"
                        value={consumerData.username}
                        onChangeText={(text) => handleConsumerChange('username', text)}
                        leftIcon={{ type: 'font-awesome', name: 'user', color: theme.colors.neutral }}
                        // rightIcon={{ type: 'font-awesome', name: 'check-circle', color: 'green' }} // Show validation icon
                        autoCapitalize="none"
                    />
                    <Input
                        style={styles.inputWrapper}
                        placeholder="Email"
                        value={consumerData.email}
                        onChangeText={(text) => handleConsumerChange('email', text)}
                        leftIcon={{ type: 'font-awesome', name: 'envelope', color: theme.colors.neutral }}

                    />
                    <Input
                        style={styles.inputWrapper}
                        placeholder="Password"
                        value={consumerData.password}
                        onChangeText={(text) => handleConsumerChange('password', text)}
                        secureTextEntry
                        leftIcon={{ type: 'font-awesome', name: 'key', color: theme.colors.neutral }}

                    />
                    <Input
                        style={styles.inputWrapper}
                        placeholder="User name"
                        value={consumerData.username}
                        onChangeText={(text) => handleConsumerChange('username', text)}
                        leftIcon={{ type: 'font-awesome', name: 'user', color: theme.colors.neutral }}
                        // rightIcon={{ type: 'font-awesome', name: 'check-circle', color: 'green' }} // Show validation icon
                        autoCapitalize="none"
                    />

                    <Input
                        style={styles.inputWrapper}
                        placeholder="Profile Picture URL (optional)"
                        value={consumerData.profilePicture}
                        onChangeText={(text) => handleConsumerChange('profilePicture', text)}
                        leftIcon={{ type: 'font-awesome', name: 'image', color: theme.colors.neutral }}

                    />
                    <TextInput
                        style={styles.inputWrapper}
                        placeholder="Interests or Preferred Content Categories (optional)"
                        value={consumerData.interests}
                        onChangeText={(text) => handleConsumerChange('interests', text)}
                    />

                </View>
            )}


            <View>
                {!isLoading ? (
                    <Loading />
                ) :
                    (
                        <Pressable style={[styles.button]} onPress={() => signUpWithEmail()} >
                            <Text style={styles.buttonText}>Sign up</Text>
                        </Pressable>
                    )}
            </View>
        </ScrollView >

    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: hp(40),
        backgroundColor: theme.colors.background,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        // marginBottom: 16,
        // textAlign: 'center',
        color: theme.colors.primary,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        // height: hp(0.5),
        borderWidth: 1,
        margin: hp(1),
        paddingHorizontal: 8,
        borderRadius: 4,
        backgroundColor: theme.colors.rose,
        color: theme.colors.text,
        // backgroundColor: 'transparent', // Transparent background
        borderColor: theme.colors.secondary, // Border color
        // color: theme.colors.secondary, // Change text color to match border

    },
    icon: {
        marginRight: 8,
    },

    button: {
        // backgroundColor: theme.colors.secondary,
        // marginBottom: hp(2),
        borderRadius: 10,
        padding: hp(0.7),
        shadowColor: theme.colors.neutral,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.55,
        shadowRadius: 3,
        elevation:
            5, // For Android shadow
        backgroundColor: 'transparent', // Transparent background
        borderWidth: 1, // Add a border
        borderColor: theme.colors.secondary, // Border color
        color: theme.colors.secondary, // Change text color to match border
    },
    buttonText: {
        textAlign: 'center',
        color: theme.colors.primary,
    },
    switchText: {
        color: theme.colors.roseLight
    },
});
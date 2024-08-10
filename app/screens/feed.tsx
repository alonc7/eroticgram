import React from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '@/constants/Colors';
import { hp } from '@/helpers/common';
import Post from '@/components/Post'; // Import the Post component

export default function Feed() {
    const navigation = useNavigation();

    // Sample data with enhanced structure for the Post component
    const feedItems = [
        {
            id: '1',
            user: {
                name: 'John Doe',
                username: 'johndoe',
                profilePicture: 'https://placeimg.com/64/64/people', // Replace with actual image URL
            },
            image: 'https://placeimg.com/640/480/animals', // Replace with actual image URL
            caption: 'This is the first post content.',
            likes: 123,
            comments: 45,
            date: '2024-08-10',
        },
        {
            id: '2',
            user: {
                name: 'Jane Smith',
                username: 'janesmith',
                profilePicture: 'https://placeimg.com/64/64/people', // Replace with actual image URL
            },
            image: 'https://placeimg.com/640/480/arch', // Replace with actual image URL
            caption: 'This is the second post content.',
            likes: 567,
            comments: 89,
            date: '2024-08-09',
        },
    ];

    const handleNavigateToPersonalPage = () => {
        navigation.navigate('SignUp'); // Update navigation logic as needed
    };

    const handleOpenDrawer = () => {
        navigation.openDrawer();
    };

    const renderItem = ({ item }) => (
        <Post key={item.id} {...item} /> // Pass post data as props to the Post component
    );

    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Pressable onPress={handleNavigateToPersonalPage} style={styles.iconButton}>
                    <Ionicons name="person" size={24} color={theme.colors.text} />
                </Pressable>
                <Text style={styles.title}>Feed</Text>
                <Pressable onPress={handleOpenDrawer} style={styles.iconButton}>
                    <Ionicons name="menu" size={24} color={theme.colors.text} />
                </Pressable>
            </View>
            <FlatList
                data={feedItems}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.flatListContent}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: hp(2),
        backgroundColor: theme.colors.primary,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.colors.text,
    },
    iconButton: {
        padding: hp(1),
    },
    flatListContent: {
        padding: hp(2),
    },
    feedItem: {
        marginBottom: hp(2),
        padding: hp(2),
        backgroundColor: theme.colors.secondary,
        borderRadius: 8,
    },
    feedItemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.colors.text,
    },
    feedItemContent: {
        fontSize: 16,
        color: theme.colors.text,
    },
});


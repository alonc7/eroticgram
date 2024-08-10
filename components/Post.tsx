import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '@/constants/Colors';
import { hp, wp } from '@/helpers/common';
import Button from './Button';
import Lock from '@/assets/icons/Lock';

const Post = ({ user, image, caption, likes, comments, date }) => {

    const [isLiked, setIsLiked] = useState<boolean>(false);

    const handleLikePress = () => {
        setIsLiked(!isLiked);
        // Update like count in your backend or local state
    };

    const handleCommentPress = () => {
        // Navigate to comment screen or display comment input
    };

    const handleSharePress = () => {
        // Implement share functionality
    };


    return (
        <View style={styles.postContainer}>
            {/* User profile section */}
            <View style={styles.userSection}>
                <Image source={{ uri: user.profilePicture }} style={styles.profilePicture} />
                <View>
                    <Text style={styles.userName}>{user.name}</Text>
                    <Text style={styles.userHandle}>@{user.username}</Text>

                </View>
            </View>

            {/* Image section */}
            {image ? (
                <Image source={{ uri: image }} style={styles.postImage} />
            ) : (
                <View style={styles.placeholderImage} />
            )}
            {/* Read a loud */}

            {/* Caption */}
            <Text style={styles.caption}>{caption}</Text>
            {/* Action icons */}

            {/* Likes, comments, and date */}
            <View style={styles.actionsSection}>
                <Button
                    onPress={handleLikePress}
                    leftIcon={<Ionicons name={isLiked ? 'heart' : 'heart-outline'} size={24} color={theme.colors.primary} />}
                />
                <Button
                    onPress={handleCommentPress}
                    leftIcon={<Ionicons name="chatbubble-outline" size={24} color={theme.colors.primary} />}
                />
                <Button
                    onPress={handleSharePress}
                    leftIcon={<Ionicons name="share-outline" size={24} color={theme.colors.primary} />}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    postContainer: {
        backgroundColor: theme.colors.neutral,
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
    },
    userSection: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginBottom: 12,
    },
    profilePicture: {
        width: wp(4),
        height: hp(4),
        borderRadius: 20,
        marginRight: 10,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
    userHandle: {
        fontSize: 14,
        color: theme.colors.secondary,
    },
    postImage: {
        borderRadius: 8,
        marginBottom: 12,
    },
    placeholderImage: {
        width: wp(14),
        height: hp(4),
        backgroundColor: theme.colors.accent2,
        borderRadius: 8,
        marginBottom: 12,
    },
    actionsSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        // marginBottom: 12,
    },
    likes: {
        fontSize: 214,
        color: theme.colors.accent1,
    },
    comments: {
        fontSize: 14,
        color: theme.colors.accent1,
    },
    date: {
        fontSize: 12,
        color: theme.colors.neutral,
    },
    caption: {
        display: 'flex',
        left: '10%',
        alignContent: 'center',
        fontSize: 14,
        color: theme.colors.background,
        fontWeight: 600,
    },
});

export default Post;

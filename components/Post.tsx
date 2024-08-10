import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '@/constants/Colors';

const Post = ({ user, image, caption, likes, comments, date }) => {
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
            <Text style={styles.caption}>{caption}</Text>

            {/* Image section */}
            {image ? (
                <Image source={{ uri: image }} style={styles.postImage} />
            ) : (
                <View style={styles.placeholderImage} />
            )}

            {/* Action icons */}
            <View style={styles.actionsSection}>
                <Ionicons name="heart-outline" size={24} color={theme.colors.primary} />
                <Ionicons name="chatbubble-outline" size={24} color={theme.colors.primary} />
                <Ionicons name="share-outline" size={24} color={theme.colors.primary} />
            </View>

            {/* Likes, comments, and date */}
            <View style={styles.metaSection}>
                <Text style={styles.likes}>{likes} Likes</Text>
                <Text style={styles.comments}>{comments} Comments</Text>
                <Text style={styles.date}>{date}</Text>
            </View>

            {/* Caption */}
        </View>
    );
};

const styles = StyleSheet.create({
    postContainer: {
        backgroundColor: theme.colors.border,
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
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.colors.text,
    },
    userHandle: {
        fontSize: 14,
        color: theme.colors.neutral,
    },
    postImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        // marginBottom: 12,
    },
    placeholderImage: {
        width: '100%',
        height: 200,
        backgroundColor: theme.colors.accent2,
        borderRadius: 8,
        // marginBottom: 12,
    },
    actionsSection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // marginBottom: 12,
    },
    metaSection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 8,
    },
    likes: {
        fontSize: 14,
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
        fontSize: 14,
        color: theme.colors.secondary,
    },
});

export default Post;

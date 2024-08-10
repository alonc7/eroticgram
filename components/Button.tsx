import { theme } from '@/constants/Colors';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
  isLoading?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  title?: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const Button = ({
  isLoading,
  leftIcon,
  rightIcon,
  title,
  onPress,
  buttonStyle,
  textStyle,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={onPress}
      disabled={isLoading}
    >
      {leftIcon && <View style={styles.iconContainer}>{leftIcon}</View>}
      {isLoading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      )}
      {rightIcon && <View style={styles.iconContainer}>{rightIcon}</View>}
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transpile',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconContainer: {
    marginHorizontal: 5,
  },
});
export default Button;

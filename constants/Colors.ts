const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export const theme = {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
  colors: {
    primary: '#FF2E63',  // Passionate Red
    secondary: '#800080',  // Deep Purple
    background: '#1A1A1D',  // Dark Charcoal
    accent1: '#FFD700',  // Sensual Gold
    accent2: '#FF6F61',  // Hot Coral
    neutral: '#E6E6E6',  // Light Gray
    text: '#FFFFFF',  // White
    border: '#333333',// Dark Gray
    rose: '#a93f4e',
    roseLight: '#f87171'
  },


  fonts: {
    medium: '500',
    semibold: '600',
    bold: '700',
    extraBold: "800",
  },
  radius: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
    xxl: 22,
  },
};

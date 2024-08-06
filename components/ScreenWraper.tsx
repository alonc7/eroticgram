import { View } from 'react-native'
import React, { ReactNode } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface ScreenWraperProps {
    children: ReactNode;
    bg: string;
};

const ScreenWraper: React.FC<ScreenWraperProps> = ({ children, bg }) => {

    const { top } = useSafeAreaInsets();
    const paddingTop = top > 0 ? top + 5 : 30;
    return (
        <View style={{ flex: 1, paddingTop, backgroundColor: bg }}>
            {children}
        </View>
    );
};

export default ScreenWraper;

import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import globalStyles from '../styles/styles';

export const HomeHeader = ({headerProps}) => {
    const onPress = () => {
        headerProps.navigation.openDrawer();
    };

    return (
        <View style={globalStyles.homeHeaderStyles}>
            <TouchableOpacity onPress={onPress}>
                <Text>Open Menu</Text>
            </TouchableOpacity>
        </View>
    );
};

export const ScreenHeader = ({headerProps, title}) => {
    const textStyles = {
        ...globalStyles.centeredHeader,
        ...globalStyles.screenHeaderTextStyles
    }
    return (
        <View style={globalStyles.screenHeaderStyles}>
            <Text style={textStyles}>{title}</Text>
        </View>
    );
}
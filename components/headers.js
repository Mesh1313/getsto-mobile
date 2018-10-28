import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import globalStyles from '../styles/styles';
import colors from '../styles/colors';

const MenuElem = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Text style={props.textStyles}>Menu</Text>
        </TouchableOpacity>
    )
}

export const HomeHeader = ({headerProps}) => {
    const onPress = () => {
        headerProps.navigation.openDrawer();
    };

    return (
        <View style={globalStyles.homeHeaderStyles}>
            <MenuElem onPress={onPress} />
        </View>
    );
};

export const ScreenHeader = ({headerProps, title, leftElem, rightElem}) => {
    const onPress = () => {
        headerProps.navigation.openDrawer();
    };
    const textStyles = {
        ...globalStyles.centeredHeader,
        ...globalStyles.screenHeaderTextStyles
    }

    leftElem = leftElem || <MenuElem onPress={onPress} textStyles={globalStyles.headerDefaultMenuText}/>
    rightElem = rightElem || <View></View>

    return (
        <View style={globalStyles.screenHeaderStyles}>
            <View style={styles.leftElem}>
                {leftElem}
            </View>
            <Text style={textStyles}>{title}</Text>
            <View style={styles.rightElem}>
                {rightElem}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    leftElem: {
        paddingTop: globalStyles.statusBarHeight,
        position: 'absolute',
        top: 0,
        left: 10,
        bottom: 0,
        justifyContent: 'center',
        zIndex: 2
    },
    rightElem: {
        paddingTop: globalStyles.statusBarHeight,
        position: 'absolute',
        top: 0,
        right: 10,
        bottom: 0,
        justifyContent: 'center',
        zIndex: 2
    }
});
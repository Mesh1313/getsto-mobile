import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import globalStyles from '../styles/styles';
import colors from '../styles/colors';

export const DefaultLabel = (props) => {
    return (
        <View style={styles.defaultLabelContainer}>
            <Text style={styles.defaultLabel}>
                {props.label}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    defaultLabelContainer: {
        flex: 1
    },
    defaultLabel: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        color: colors.lightGreen
    }
});
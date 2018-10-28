import React from 'react';
import {
    View,
    Text
} from 'react-native';

import globalStyles from '../styles/styles';
import colors from '../styles/colors';

export const DefaultLabel = (props) => {
    return (
        <View style={globalStyles.defaultLabelContainer}>
            <Text style={globalStyles.defaultLabel}>
                {props.label}
            </Text>
        </View>
    );
}
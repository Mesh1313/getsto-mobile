import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { Container, Form, Item, Input, Label, Button } from 'native-base';
import globalStyles from '../styles/styles';
import colors from '../styles/colors';

const GrayButton = ({text, onPress}) => {
    return (
        <Button block
                style={styles.grayButton}
                onPress={onPress}>
            <Text style={styles.grayButtonText}>{text}</Text>
        </Button>
    )
}

const TextInput = ({label, value, onChangeText, opts}) => {
    return (
        <Item stackedLabel style={styles.defaultInputHolder}>
            <Label style={styles.defaultLabel}>{label}</Label>
            <Input
                {...opts}
                style={styles.defaultInput}
                value={value}
                onChangeText={onChangeText}
            />
        </Item>
    )
}

export default {
    GrayButton,
    TextInput
}

const styles = StyleSheet.create({
    grayButton: {
        marginTop: 20,
        backgroundColor: colors.gray
    },
    grayButtonText: {
        color: colors.white
    },
    defaultInputHolder: {
        borderColor: colors.darkBrown,
        marginLeft: 0
    },
    defaultInput: {
        ...globalStyles.defaultFont
    },
    defaultLabel: {
        ...globalStyles.defaultFont
    }
});
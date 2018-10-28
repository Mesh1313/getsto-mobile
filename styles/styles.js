import { StatusBar } from 'react-native';
import colors from './colors';

const defaultContainerPadding = 15;
const defaultFont = {
    fontSize: 16,
    color: colors.darkBrown
};

export default styles = {
    statusBarHeight: StatusBar.currentHeight,

    //font styles
    defaultFont,

    defaultLabel: {
        ...defaultFont,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        color: colors.lightGreen
    },
    defaultLabelContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: defaultContainerPadding,
        paddingHorizontal: defaultContainerPadding
    },
    centeredHeader: {
        textAlign: 'center'
    },
    screenHeaderStyles: {
        paddingTop: (StatusBar.currentHeight + 15),
        paddingBottom: 15,
        paddingHorizontal: 10,
        backgroundColor: colors.darkGreen
    },
    screenHeaderTextStyles: {
        ...defaultFont,
        color: colors.lightGreen
    },
    homeHeaderStyles: {
        paddingTop: (StatusBar.currentHeight + 15),
        paddingBottom: 15,
        paddingHorizontal: 10
    },
    headerDefaultMenuText: {
        color: colors.gray
    }
}
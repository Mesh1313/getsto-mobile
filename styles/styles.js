import {StatusBar} from 'react-native';
import colors from './colors';

export default styles = {
    statusBarHeight: StatusBar.currentHeight,
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: 15
    },
    centeredHeader: {
        textAlign: 'center'
    },
    screenHeaderStyles: {
        paddingTop: (StatusBar.currentHeight + 15),
        paddingBottom: 15,
        paddingHorizontal: 10,
        backgroundColor: colors.darkBrown
    },
    screenHeaderTextStyles: {
        color: colors.lightGreen
    },
    homeHeaderStyles: {
        paddingTop: (StatusBar.currentHeight + 15),
        paddingBottom: 15,
        paddingHorizontal: 10
    }
}
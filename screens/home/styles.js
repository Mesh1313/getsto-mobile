import { StatusBar } from 'react-native';
import colors from '../../styles/colors';

export default styles = {
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: StatusBar.currentHeight
    }
}
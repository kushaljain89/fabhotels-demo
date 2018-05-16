import {Dimensions, StyleSheet} from "react-native";

export const window = Dimensions.get('window');

export const Colors = {
    green: '#00b96e',
    darkBlue: '#1e254a',
    yellow: '#fddc2c',
    lightBlue: 'rgb(55, 154, 255)',
    black: '#4d4b4e',
    white: '#ffffff',
    lightGrey: '#f0f3f7',
    paleYellow: 'rgb(255, 246, 200)'
};

export const Styles = StyleSheet.create({
    header: {
        height: window.height * 0.1,
        width: window.width,
        backgroundColor: Colors.darkBlue,
        flexDirection: 'row',
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2
    },
    backButton: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 5
    },
    icons: {
        color: '#ffffff',
        fontSize: 45
    },
    footer: {
        height: window.height * 0.15,
        width: window.width,
        flexDirection: 'row',
        paddingTop: window.height * 0.15 * 0.2,
        paddingBottom: window.height * 0.15 * 0.35,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2
    },
    footerTabs: {
        flex: 1
    },
    footerButton: {
        backgroundColor: Colors.yellow,
        alignItems: 'center',
        justifyContent: 'center',
        width: window.width * 0.47,
        height: window.height * 0.15 * 0.55 * 0.8,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1
    },
    contentWrapper: {
        width: window.width
    },
    roomsLeft: {
        height: 25,
        width: 80,
        backgroundColor: 'rgb(255, 0, 0)',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 15,
        right: 15,
        zIndex: 100
    },
    promoPopup: {
        flexDirection: 'row',
        height: 50,
        width: window.width,
        backgroundColor: Colors.paleYellow
    },
    mapViewWrapper: {
        height: 250,
        width: window.width,
        backgroundColor: Colors.lightGrey,
        marginTop: 10
    },
    triangleCorner: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 20,
        borderTopWidth: 20,
        borderRightColor: 'transparent',
        borderTopColor: Colors.white
    }
});
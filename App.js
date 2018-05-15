import React from 'react';
import {StatusBar, StyleSheet, View, SafeAreaView} from 'react-native';
import {UIManager} from 'react-native';
import AppRoot from './app/index.js';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        UIManager.setLayoutAnimationEnabledExperimental
        && UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor="blue"
                           barStyle="light-content"
                />
                <View style={{height: StatusBar.currentHeight}}/>
                <AppRoot/>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});

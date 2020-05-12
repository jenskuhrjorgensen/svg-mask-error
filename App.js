/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';

import {Colors,} from 'react-native/Libraries/NewAppScreen';
import SvgWithMask from "./SvgWithMask.svg"
import SvgWithoutMask from "./SvgWithoutMask.svg"

const App: () => React$Node = () => {
    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <SvgWithMask width={100} height={100}/>
                    <SvgWithoutMask width={100} height={100}/>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
});

export default App;

import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { Actions } from 'react-native-router-flux';

const Mexico = () => {
    const gotToMap = () => {
        Actions.map()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Mexico </Text>
            <Text> 61463 Cases confirmed</Text>
            <Text> 324006 Total Deaths</Text>
            <Text> 5731000 Total Cases</Text>
            {/* <Text> {canadaData[5].Deaths} </Text>
            <Text> {canadaData[5].Confirmed} </Text> */}
            <Button
                onPress={gotToMap}
                title="Return to Map"
            />
        </View>
    )
}
export default Mexico

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        paddingBottom: 100,
    }
});
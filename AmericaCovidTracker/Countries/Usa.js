import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button, Image } from 'react-native'
import { Actions } from 'react-native-router-flux';

const Usa = () => {
    const gotToMap = () => {
        Actions.map()
    }

    return (
        <View style={styles.container}>
            <Image source={require('../images/flags/usa.png')} />
            <Text style={styles.title}> USA </Text>
            <Text> 482057 Cases confirmed</Text>
            <Text> 987017 Total Deaths</Text>
            <Text> 80510662 Total Cases</Text>
            <Button
                onPress={gotToMap}
                title="Return to Map"
            />
        </View>
    )
}
export default Usa

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
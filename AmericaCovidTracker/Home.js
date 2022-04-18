import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet, Button } from 'react-native'
import { Actions } from 'react-native-router-flux';

const Home = () => {
    const gotToMap = () => {
        Actions.map()
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Welcome to the America Covid Tracker</Text>
            <Button
                onPress={gotToMap}
                title="Got to Map"
            />
        </View>
    )
}
export default Home

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
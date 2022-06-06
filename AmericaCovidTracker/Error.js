import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet, Button, Image } from 'react-native'
import { Actions } from 'react-native-router-flux';

const apiError = () => {
    const goToHome = () => {
        Actions.home()
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goToHome}>
                <Text> Return home </Text>
            </TouchableOpacity>
            <Text style={styles.title}> Cannot connect to the API :(</Text>
        </View>
    )
}
export default apiError

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

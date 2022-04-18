import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { Actions } from 'react-native-router-flux';

const Canada = () => {
    const gotToMap = () => {
        Actions.map()
    }
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDate();
    let sevenDays = new Date(year, month, day - 7);
    // Date type 2022-02-12T20:21:00.889Z to just a string 2022-02-12
    today = today.toISOString().split('T')[0];
    sevenDays = sevenDays.toISOString().split('T')[0];

    const [canadaData, setCanadaData] = useState([]);
    const [canadaCases, setCanadaCases] = useState();
    const [canadaDeaths, setCanadaDeaths] = useState();
    const [canadaTotal, setCanadaTotal] = useState();
    const getCanada = async () => {
        try {
            const response = await fetch('https://api.covid19api.com/country/canada?from=' + sevenDays + '&to=' + today);
            const json = await response.json();
            setCanadaData(json);
        } catch (error) {
            console.error(error);
        }
    }
    const getCanadaData = async () => {
        try {
            setCanadaCases(canadaData[canadaData.length - 1].Confirmed - canadaData[0].Confirmed);
            setCanadaDeaths(canadaData[canadaData.length - 1].Deaths);
            setCanadaTotal(canadaData[canadaData.length - 1].Confirmed);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getCanada();
    }, []);
    useEffect(() => {
        getCanadaData();
    }, [canadaData]);
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Canada</Text>
            <Text> {canadaCases} Cases confirmed</Text>
            <Text> {canadaDeaths} Total Deaths</Text>
            <Text> {canadaTotal} Total Cases</Text>
            {/* <Text> {canadaData[5].Deaths} </Text>
            <Text> {canadaData[5].Confirmed} </Text> */}
            <Button
                onPress={gotToMap}
                title="Return to Map"
            />
        </View>
    )
}
export default Canada

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
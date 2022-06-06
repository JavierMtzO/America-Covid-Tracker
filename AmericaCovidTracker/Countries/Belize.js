import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button, Image } from 'react-native'
import { Actions } from 'react-native-router-flux';

const Belize = () => {
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

    const [data, setData] = useState([]);
    const [cases, setCases] = useState();
    const [deaths, setDeaths] = useState();
    const [total, setTotal] = useState();
    const getCountry = async () => {
        try {
            const response = await fetch('https://api.covid19api.com/country/belize?from=' + sevenDays + '&to=' + today);
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        }
    }
    const getData = async () => {
        try {
            setCases(data[data.length - 1].Confirmed - data[0].Confirmed);
            setDeaths(data[data.length - 1].Deaths);
            setTotal(data[data.length - 1].Confirmed);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getCountry();
    }, []);
    useEffect(() => {
        getData();
    }, [data]);
    return (
        <View style={styles.container}>
            <Image source={require('../images/flags/belize.png')} />
            <Text style={styles.title}> Belize</Text>
            <Text> {cases} Cases confirmed</Text>
            <Text> {deaths} Total Deaths</Text>
            <Text> {total} Total Cases</Text>
            <Button
                onPress={gotToMap}
                title="Return to Map"
            />
        </View>
    )
}
export default Belize

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
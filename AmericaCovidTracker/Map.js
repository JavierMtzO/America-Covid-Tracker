import React, { useState, useEffect } from 'react'
import { ActivityIndicator, TouchableOpacity, Image, View, StyleSheet, Text, FlatList } from 'react-native'
import { Actions } from 'react-native-router-flux'

const About = () => {
    const goToHome = () => {
        Actions.home()
    }
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDate();
    let sevenDays = new Date(year, month, day - 7);
    // Date type 2022-02-12T20:21:00.889Z to just a string 2022-02-12
    today = today.toISOString().split('T')[0];
    sevenDays = sevenDays.toISOString().split('T')[0];

    //Canada
    const CanadaTracker = () => {
        Actions.canada()
    }
    const [isLoading, setLoading] = useState(true);
    const [canadaData, setCanadaData] = useState([]);
    const [canadaCases, setCanadaCases] = useState();
    const getCanada = async () => {
        try {
            const response = await fetch('https://api.covid19api.com/country/canada?from=' + sevenDays + '&to=' + today);
            const json = await response.json();
            setCanadaData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    const getCanadaData = async () => {
        try {
            setCanadaCases(canadaData[canadaData.length - 1].Confirmed - canadaData[0].Confirmed);
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
    //Usa
    const UsaTracker = () => {
        Actions.usa()
    }
    //Mexico
    const MexicoTracker = () => {
        Actions.mexico()
    }


    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator /> : (
                <View>
                    <TouchableOpacity onPress={CanadaTracker}>
                        {canadaCases > 100000 ?
                            <Image source={require('./images/red/Canada.png')} style={styles.canada} /> : null
                        }
                        {canadaCases < 100000 && canadaCases > 25000 ?
                            <Image source={require('./images/yellow/Canada.png')} style={styles.canada} /> : null
                        }
                        {canadaCases < 25000 ?
                            <Image source={require('./images/green/Canada.png')} style={styles.canada} /> : null
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={UsaTracker}>
                        <Image source={require('./images/red/Alaska.png')} style={styles.alaska} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={UsaTracker}>
                        <Image source={require('./images/red/Usa.png')} style={styles.usa} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={MexicoTracker}>
                        <Image source={require('./images/yellow/Mexico.png')} style={styles.mexico} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={goToHome}>
                        <Text> Return home </Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}
export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    canada: {
        position: 'absolute',
        width: 150,
        height: 176,
        top: 0,
        right: 100
    },
    alaska: {
        position: 'absolute',
        width: 70,
        height: 55,
        top: 98,
        right: 219
    },
    usa: {
        position: 'absolute',
        width: 130,
        height: 88,
        top: 145,
        right: 117
    },
    mexico: {
        position: 'absolute',
        width: 90,
        height: 60,
        top: 200,
        right: 150,
    }
});
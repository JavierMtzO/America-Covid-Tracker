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
    //Usa
    const UsaTracker = () => {
        Actions.usa()
    }
    //Mexico
    const MexicoTracker = () => {
        Actions.mexico()
    }
    //Belize
    const BelizeTracker = () => {
        Actions.belize()
    }
    //Guatemala
    const GuatemalaTracker = () => {
        Actions.guatemala()
    }
    //El Salvador 
    const SalvadorTracker = () => {
        Actions.salvador()
    }
    //Honduras
    const HondurasTracker = () => {
        Actions.honduras()
    }
    //Nicaragua
    const NicaraguaTracker = () => {
        Actions.nicaragua()
    }
    //Panamá
    const PanamaTracker = () => {
        Actions.panama()
    }
    //Costa Rica
    const CostaricaTracker = () => {
        Actions.costarica()
    }
    //Cuba
    const CubaTracker = () => {
        Actions.cuba()
    }
    //Haiti
    const HaitiTracker = () => {
        Actions.haiti()
    }
    //Republica Dominicana
    const DominicanaTracker = () => {
        Actions.dominicana()
    }
    //Colombia
    const ColombiaTracker = () => {
        Actions.colombia()
    }
    //Venezuela
    const VenezuelaTracker = () => {
        Actions.venezuela()
    }
    //Ecuador
    const EcuadorTracker = () => {
        Actions.ecuador()
    }
    //Peru
    const PeruTracker = () => {
        Actions.peru()
    }
    //Brazil
    const BrazilTracker = () => {
        Actions.brazil()
    }
    //Bolivia
    const BoliviaTracker = () => {
        Actions.bolivia()
    }
    //Chile
    const ChileTracker = () => {
        Actions.chile()
    }
    //Paraguay
    const ParaguayTracker = () => {
        Actions.paraguay()
    }
    //Uruguay
    const UruguayTracker = () => {
        Actions.uruguay()
    }
    //Argentina
    const ArgentinaTracker = () => {
        Actions.argentina()
    }


    return (
        <View style={styles.container}>
            <View>
                {/* Canada */}
                <TouchableOpacity onPress={CanadaTracker}>
                    <Image source={require('./images/yellow/Canada.png')} style={styles.canada} />
                </TouchableOpacity>
                {/* USA */}
                <TouchableOpacity onPress={UsaTracker}>
                    <Image source={require('./images/red/Alaska.png')} style={styles.alaska} />
                </TouchableOpacity>
                <TouchableOpacity onPress={UsaTracker}>
                    <Image source={require('./images/red/Usa.png')} style={styles.usa} />
                </TouchableOpacity>
                {/* Mexico */}
                <TouchableOpacity onPress={MexicoTracker}>
                    <Image source={require('./images/yellow/Mexico.png')} style={styles.mexico} />
                </TouchableOpacity>
                {/* Belize */}
                <TouchableOpacity onPress={BelizeTracker}>
                    <Image source={require('./images/green/belize.png')} style={styles.belize} />
                </TouchableOpacity>
                {/* Guatemala */}
                <TouchableOpacity onPress={GuatemalaTracker}>
                    <Image source={require('./images/green/guatemala.png')} style={styles.guatemala} />
                </TouchableOpacity>
                {/* El Salvador  */}
                <TouchableOpacity onPress={SalvadorTracker}>
                    <Image source={require('./images/green/salvador.png')} style={styles.salvador} />
                </TouchableOpacity>
                {/* Honduras */}
                <TouchableOpacity onPress={HondurasTracker}>
                    <Image source={require('./images/green/honduras.png')} style={styles.honduras} />
                </TouchableOpacity>
                {/* Nicaragua */}
                <TouchableOpacity onPress={NicaraguaTracker}>
                    <Image source={require('./images/green/nicaragua.png')} style={styles.nicaragua} />
                </TouchableOpacity>
                {/* Costa Rica */}
                <TouchableOpacity onPress={CostaricaTracker}>
                    <Image source={require('./images/green/costarica.png')} style={styles.costarica} />
                </TouchableOpacity>
                {/* Panamá */}
                <TouchableOpacity onPress={PanamaTracker}>
                    <Image source={require('./images/green/panama.png')} style={styles.panama} />
                </TouchableOpacity>
                {/* Colombia */}
                <TouchableOpacity onPress={ColombiaTracker}>
                    <Image source={require('./images/green/colombia.png')} style={styles.colombia} />
                </TouchableOpacity>
                {/* Venezuela */}
                <TouchableOpacity onPress={VenezuelaTracker}>
                    <Image source={require('./images/green/venezuela.png')} style={styles.venezuela} />
                </TouchableOpacity>
                {/* Ecuador */}
                <TouchableOpacity onPress={EcuadorTracker}>
                    <Image source={require('./images/green/ecuador.png')} style={styles.ecuador} />
                </TouchableOpacity>
                {/* Peru */}
                <TouchableOpacity onPress={PeruTracker}>
                    <Image source={require('./images/green/peru.png')} style={styles.peru} />
                </TouchableOpacity>
                {/* Brazil */}
                <TouchableOpacity onPress={BrazilTracker}>
                    <Image source={require('./images/red/brazil.png')} style={styles.brazil} />
                </TouchableOpacity>
                {/* Bolivia */}
                <TouchableOpacity onPress={BoliviaTracker}>
                    <Image source={require('./images/green/bolivia.png')} style={styles.bolivia} />
                </TouchableOpacity>
                {/* Chile */}
                <TouchableOpacity onPress={ChileTracker}>
                    <Image source={require('./images/yellow/chile.png')} style={styles.chile} />
                </TouchableOpacity>
                {/* Paraguay */}
                <TouchableOpacity onPress={ParaguayTracker}>
                    <Image source={require('./images/green/paraguay.png')} style={styles.paraguay} />
                </TouchableOpacity>
                {/* Uruguay */}
                <TouchableOpacity onPress={UruguayTracker}>
                    <Image source={require('./images/green/uruguay.png')} style={styles.uruguay} />
                </TouchableOpacity>
                {/* Argentina */}
                <TouchableOpacity onPress={ArgentinaTracker}>
                    <Image source={require('./images/yellow/argentina.png')} style={styles.argentina} />
                </TouchableOpacity>
                {/* Home */}
                <Image source={require('./images/Statistics.png')} style={styles.statistics} />
                <TouchableOpacity onPress={goToHome}>
                    <Text> Return home </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#99C9FE',
    },
    canada: {
        position: 'absolute',
        width: 150,
        height: 176,
        top: 0,
        right: 160
    },
    alaska: {
        position: 'absolute',
        width: 70,
        height: 55,
        top: 98,
        right: 279
    },
    usa: {
        position: 'absolute',
        width: 130,
        height: 88,
        top: 145,
        right: 177
    },
    mexico: {
        position: 'absolute',
        width: 90,
        height: 60,
        top: 200,
        right: 210,
    },
    belize: {
        position: 'absolute',
        width: 10,
        height: 15,
        top: 241,
        right: 205,
    },
    guatemala: {
        position: 'absolute',
        width: 16,
        height: 13,
        top: 249,
        right: 211,
    },
    salvador: {
        position: 'absolute',
        width: 12,
        height: 11,
        top: 254,
        right: 202,
    },
    honduras: {
        position: 'absolute',
        width: 20,
        height: 17,
        top: 243,
        right: 190,
    },
    nicaragua: {
        position: 'absolute',
        width: 23,
        height: 20,
        top: 250,
        right: 183,
    },
    costarica: {
        position: 'absolute',
        width: 16,
        height: 13,
        top: 268,
        right: 180,
    },
    panama: {
        position: 'absolute',
        width: 16,
        height: 13,
        top: 265,
        right: 170,
    },
    colombia: {
        position: 'absolute',
        width: 70,
        height: 50,
        top: 265,
        right: 122,
    },
    venezuela: {
        position: 'absolute',
        width: 50,
        height: 60,
        top: 249,
        right: 112,
    },
    ecuador: {
        position: 'absolute',
        width: 45,
        height: 30,
        top: 300,
        right: 160,
    },
    peru: {
        position: 'absolute',
        width: 40,
        height: 75,
        top: 305,
        right: 140,
    },
    brazil: {
        position: 'absolute',
        width: 160,
        height: 170,
        top: 280,
        right: 4,
    },
    bolivia: {
        position: 'absolute',
        width: 35,
        height: 50,
        top: 343,
        right: 105,
    },
    chile: {
        position: 'absolute',
        width: 50,
        height: 200,
        top: 368,
        right: 125,
    },
    paraguay: {
        position: 'absolute',
        width: 25,
        height: 30,
        top: 380,
        right: 90,
    },
    uruguay: {
        position: 'absolute',
        width: 20,
        height: 23,
        top: 428,
        right: 80,
    },
    argentina: {
        position: 'absolute',
        width: 60,
        height: 180,
        top: 381,
        right: 90,
    },
    statistics: {
        position: 'absolute',
        width: 400,
        height: 180,
        top: 570,
        right: 0,
    }
});
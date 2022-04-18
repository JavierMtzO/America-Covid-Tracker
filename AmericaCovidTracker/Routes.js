import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import Map from './Map.js'
import Canada from './Countries/Canada'
import Usa from './Countries/Usa'
import Mexico from './Countries/Mexico'

const Routes = () => (
    <Router>
        <Scene key="root">
            <Scene key="home" component={Home} title="America Covid Tracker" initial={true} />
            <Scene key="map" component={Map} title="Map" />
            <Scene key="canada" component={Canada} title="Canada" />
            <Scene key="usa" component={Usa} title="usa" />
            <Scene key="mexico" component={Mexico} title="mexico" />
        </Scene>
    </Router>
)
export default Routes
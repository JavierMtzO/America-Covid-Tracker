import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import Map from './Map.js'
import apiError from './Error'
import Canada from './Countries/Canada'
import Usa from './Countries/Usa'
import Mexico from './Countries/Mexico'
import Belize from './Countries/Belize'
import Guatemala from './Countries/Guatemala'
import Salvador from './Countries/Salvador'
import Honduras from './Countries/Honduras'
import Nicaragua from './Countries/Nicaragua'
import Panama from './Countries/Panama'
import CostaRica from './Countries/CostaRica'
import Cuba from './Countries/Cuba'
import Haiti from './Countries/Haiti'
import Dominicana from './Countries/Dominicana'
import Colombia from './Countries/Colombia'
import Venezuela from './Countries/Venezuela'
import Ecuador from './Countries/Ecuador'
import Peru from './Countries/Peru'
import Brazil from './Countries/Brazil'
import Bolivia from './Countries/Bolivia'
import Chile from './Countries/Chile'
import Paraguay from './Countries/Paraguay'
import Uruguay from './Countries/Uruguay'
import Argentina from './Countries/Argentina'

const Routes = () => (
    <Router>
        <Scene key="root">
            <Scene key="home" component={Home} title="America Covid Tracker" initial={true} />
            <Scene key="map" component={Map} title="Map" />
            <Scene key="apierror" component={apiError} title="Cannot connect to the API" />
            <Scene key="canada" component={Canada} title="Canada" />
            <Scene key="usa" component={Usa} title="usa" />
            <Scene key="mexico" component={Mexico} title="mexico" />
            <Scene key="belize" component={Belize} title="belize" />
            <Scene key="guatemala" component={Guatemala} title="guatemala" />
            <Scene key="salvador" component={Salvador} title="salvador" />
            <Scene key="honduras" component={Honduras} title="honduras" />
            <Scene key="nicaragua" component={Nicaragua} title="nicaragua" />
            <Scene key="panama" component={Panama} title="panama" />
            <Scene key="costarica" component={CostaRica} title="costarica" />
            <Scene key="cuba" component={Cuba} title="cuba" />
            <Scene key="haiti" component={Haiti} title="haiti" />
            <Scene key="dominicana" component={Dominicana} title="dominicana" />
            <Scene key="colombia" component={Colombia} title="colombia" />
            <Scene key="venezuela" component={Venezuela} title="venezuela" />
            <Scene key="ecuador" component={Ecuador} title="ecuador" />
            <Scene key="peru" component={Peru} title="peru" />
            <Scene key="brazil" component={Brazil} title="brazil" />
            <Scene key="bolivia" component={Bolivia} title="bolivia" />
            <Scene key="chile" component={Chile} title="chile" />
            <Scene key="paraguay" component={Paraguay} title="paraguay" />
            <Scene key="uruguay" component={Uruguay} title="uruguay" />
            <Scene key="argentina" component={Argentina} title="argentina" />

        </Scene>
    </Router>
)
export default Routes
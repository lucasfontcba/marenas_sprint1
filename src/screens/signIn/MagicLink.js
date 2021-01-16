import React from 'react'
import { View, Text, StyleSheet, StatusBar } from "react-native"
import cs from "../../theme/CommonStyles"

import SvgMail from "../../../assets/svg/signin_mail"

const MagicLink = (props) => {

    React.useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('MagicLinkMail')
        }, 2000)
    }, [])


    return (
        <View style={cs.viewWhite}>
            <StatusBar translucent={true} barStyle="light-content" />
            <SvgMail />
            <Text style={[cs.titleBack, { marginBottom: 20 }]} >Revisa tu mail</Text>
            <Text style={cs.textBack} >Te enviamos un mail a </Text>
            <Text style={cs.textBack} > apellido.nombre@mimail.com </Text>
            <Text style={cs.textBack} > para que puedas acceder desde</Text>
            <Text style={cs.textBack} > un link mágico</Text>
            <Text style={[cs.textBackBold, { marginTop: 20 }]} > Revisá tu casilla o correo no deseado.</Text>
        </View >

    )
}

export default MagicLink


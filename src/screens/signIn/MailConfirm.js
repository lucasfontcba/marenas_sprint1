import React from 'react'
import { View, Text, StatusBar } from "react-native"

import cs from "../../theme/CommonStyles"
import Svg from "../../../assets/svg/signin_mail"

const MailCOnfirm = (props) => {

    return (
        <View style={cs.viewWhite}>
            <StatusBar translucent={true} barStyle="light-content" />
            <Svg />
            <Text style={[cs.titleBack, { marginBottom: 20 }]} >Revisa tu mail</Text>
            <Text style={cs.textBack} >Te enviamos un mail a </Text>
            <Text style={cs.textBack} > apellido.nombre@mimail.com</Text>
            <Text style={cs.textBack} > para que puedas crear una nueva</Text>
            <Text style={cs.textBack} > contraseña.</Text>
            <Text style={[cs.textBackBold, { marginTop: 40 }]} > Revisa tu casilla o correo no deseado.</Text>
            <Text style={[cs.textBackBold, { marginTop: 20 }]} > ¿No lo recibiste?</Text>
            <Text style={cs.linkHero} onPress={() => { props.navigation.navigate("NewPassword") }} >Reenviar</Text>


        </View >

    )
}

export default MailCOnfirm


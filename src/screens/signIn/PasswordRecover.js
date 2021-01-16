import React from 'react'
import { View, Text, StyleSheet, StatusBar } from "react-native"

import BttnBack from "../../theme/components/BttnBack"
import BttnSolid from "../../theme/components/BttnSolid"
import TextInputIcon from "../../theme/components/TextInputIcon"

import GlobalStyles from '../../theme/GlobalStyles'
import cs from "../../theme/CommonStyles"

const PasswordRecover = (props) => {

    const [emailValue, setEmailValue] = React.useState("")
    const [alertEmail, setAlertEmail] = React.useState("")

    function validate() {
        const emailVal = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        !emailVal.test(emailValue) ? setAlertEmail("Mail incorrecto") : props.navigation.navigate('MailConfirm')
    }

    return (
        <View style={cs.viewWhite}>

            <StatusBar barStyle="dark-content" translucent={true} backgroundColor="transparent" />
            <BttnBack onPress={() => props.navigation.navigate('SignInMail')} fill="black" />

            <Text style={cs.titleBack} >Recuperar</Text>
            <Text style={cs.titleBack} >Contraseña</Text>
            <Text style={cs.textBack} >Ingresa tu mail y te enviaremos</Text>
            <Text style={cs.textBack} >un correo para crear una nueva</Text>
            <TextInputIcon placeholder={"Correo electrónico"} onFocus={() => setAlertEmail("")} alert={alertEmail !== ""} onChangeText={e => setEmailValue(e)} icon="mail" />
            {alertEmail !== "" && <Text style={[cs.textBack, { color: GlobalStyles.colorSet.hero }]} >{alertEmail}</Text>}
            <BttnSolid title="Enviar" onPress={() => validate()} />

        </View >

    )

}

export default PasswordRecover


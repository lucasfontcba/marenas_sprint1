import React from 'react'
import { View, Text, StyleSheet, StatusBar } from "react-native"

import BttnBack from "../../theme/components/BttnBack"
import SvgMailSended from "../../../assets/svg/signin_mail.svg"

import cs from "../../theme/CommonStyles"


const MailConfirmMissing = (props) => {

    return (
        <View style={[cs.viewHero]}>
            <StatusBar translucent={true} barStyle="light-content" />
            <BttnBack onPress={() => props.navigation.navigate('SignInMail')} fill="white" />
            <View style={[cs.viewCard]}>
                <SvgMailSended style={styles.svg} />
                <Text style={[cs.titleBack]} >Falta que confirmes</Text>
                <Text style={[cs.titleBack]} >tu cuenta</Text>
                <Text style={[cs.textBack]} >Todavía no confirmaste tu cuenta.</Text>
                <Text style={[cs.textBack]} >Revisá la bandeja de entrada</Text>
                <Text style={[cs.textBack]} >y correo no deseado.</Text>
                <Text style={[cs.textBack, styles.link]} >Reenviar correo</Text>
            </View>
        </View >

    )

}

export default MailConfirmMissing

const styles = StyleSheet.create({

    text: {
        bottom: 50,
    },
    link: {
        position: "absolute",
        bottom: 20
    },
    svg: {
        bottom: 70
    }

})

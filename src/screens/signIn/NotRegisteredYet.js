import React from 'react'
import { View, Text, StyleSheet, StatusBar } from "react-native"
import BttnBack from "../../theme/components/BttnBack"

import Svg from "../../../assets/svg/signin_disconnect.svg"

import cs from "../../theme/CommonStyles"

const NotRegisteredYet = (props) => {

    return (
        <View style={cs.viewHero}>
            <StatusBar translucent={true} barStyle="light-content" />
            <BttnBack onPress={() => props.navigation.navigate('SignInMail')} fill="white" />
            <View style={cs.viewCard}>

                <Svg style={styles.svg} />
                <Text style={cs.titleBack} >Aún no estas</Text>
                <Text style={cs.titleBack} >registrado</Text>
                <Text style={cs.textBack} >Crea tu cuenta en marenas</Text>
                <Text style={cs.textBack} >para disfrutar de la experiencia.</Text>
                <Text style={[cs.linkHero, link]} >Crear cuenta</Text>

            </View>
        </View >

    )

}

export default NotRegisteredYet

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
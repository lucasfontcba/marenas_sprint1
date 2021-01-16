import React from 'react'
import { View, Text, StyleSheet, StatusBar } from "react-native"

import BttnBack from "../../theme/components/BttnBack"
import GlobalStyles from "../../theme/GlobalStyles"



const AccountConfirm = (props) => {


    const styles = StyleSheet.create({

        view: {
            backgroundColor: GlobalStyles.colorSet.hero,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        },
        viewCard: {
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            height: "70%",
            width: "80%",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",

        },
        text: {
            fontFamily: GlobalStyles.fontSet.Bold,
            fontSize: 25,
            bottom: 50,
            color: "#909090",
            textAlign: "center"
        },

    })

    return (
        <View style={styles.view}>
            <StatusBar translucent={true} barStyle="light-content" />
            <BttnBack onPress={() => props.navigation.navigate('SignInMail')} fill="white" />
            <View style={styles.viewCard}>

                <Text style={styles.text} >Falta que confirmes tu cuenta</Text>
            </View>
        </View >

    )

}

export default AccountConfirm


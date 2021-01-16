
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import GlobalStyles from '../GlobalStyles';

export default function BttnSolid({ title, onPress, style = {} }) {

    const LocalStyles = StyleSheet.create({

        bttn: {
            backgroundColor: GlobalStyles.colorSet.hero,
            width: 224,
            height: 48,
            borderRadius: 20,
            marginTop: 10,
            alignItems: 'center',
            justifyContent: "center"
        },
        text: {
            fontFamily: GlobalStyles.fontSet.Regular,
            color: "white",
            fontSize: 16,
            textAlign: "center",
            textAlignVertical: "center"
        }

    })

    return (
        <TouchableOpacity onPress={onPress} style={[LocalStyles.bttn, style]}>

            <Text style={LocalStyles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import GlobalStyles from '../GlobalStyles';

export default function BttnSolid({ text, style = {} }) {

    const LocalStyles = StyleSheet.create({

        text: {
            fontFamily: GlobalStyles.fontSet.Bold,
            color: "white",
            fontSize: 22,
            padding: 24,
            lineHeight: 25
        }

    })

    return (
        <View style={[LocalStyles.view, style]}>
            <Text style={LocalStyles.text}>{text}</Text>
        </View>
    )
}
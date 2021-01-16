
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import IconBack from "../../../assets/Icons/angle-left-solid.svg"

export default function BttnBorder({ onPress, fill = "white" }) {

    const LocalStyles = StyleSheet.create({

        bttn: {
            position: "absolute",
            top: 55,
            left: 20,
            backgroundColor: "transparent",
            width: 24,
            height: 24,
            alignItems: 'center',
            justifyContent: "center"
        },
    })

    return (
        <TouchableOpacity onPress={onPress} style={[LocalStyles.bttn]}>
            <IconBack fill={fill} />
        </TouchableOpacity>
    )
}
import React from 'react'
import { View, Text, StyleSheet } from "react-native"

const Copyright = () => {
    return (
        <View style={navStyle.copyright}>
            <Text style={navStyle.textCopyright}>Copyright M. Aldi Gunawan-119140125</Text>
        </View>
    )
}

const navStyle = StyleSheet.create({
    copyright:{
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        left: '10%',
        right: '10%',
        marginHorizontal: 0,
        marginVertical: 'auto',
    },
    textCopyright:{
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'gray'
    },
})

export default Copyright
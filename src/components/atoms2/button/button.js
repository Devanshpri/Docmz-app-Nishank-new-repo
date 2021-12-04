import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

export default function Button(props) {

    const { title, pressHandler, style, isLoading } = props



    return (
        <TouchableOpacity onPress={isLoading ? null : pressHandler} style={{
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 15,
        }}><LinearGradient
            // start={{ x: 0, y: 0 }}
            // end={{ x: 1, y: 1 }}
            colors={[isLoading ? "#088cff72" : '#088DFF', isLoading ? "#088cff72" : "#066AC3"]}
            style={{
                borderRadius: 50,
                elevation: 3
            }}
        >
                <Text style={{
                    textAlign: 'center', fontSize: 22, fontFamily: 'Montserrat-Regular', color: "#fff", paddingVertical: 14
                }}>{title}</Text>

            </LinearGradient>
        </TouchableOpacity >
    )
}


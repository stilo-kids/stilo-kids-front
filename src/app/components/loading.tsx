import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { TextRegular } from "./text";
import { colors } from "../../theme/colors";

export default function Loading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={colors.AZUL}/>
            <TextRegular>Carregando...</TextRegular>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
})
import tw from 'twrnc';
import React from "react";
import { Text, View, ActivityIndicator, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

export default function Loading() {
    return (
        <View style={tw`flex-1 justify-center gap-10 items-center`}>
            <ActivityIndicator size="large" color={colors.blue}/>
            <Text style={tw`text-sm`}>Carregando...</Text>
        </View>
    )
}
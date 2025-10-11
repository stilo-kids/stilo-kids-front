import React from "react";
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { colors } from "../../theme/colors";

type Props = TouchableOpacityProps & {
    children: React.ReactNode;
};

export const SimpleButton = ({ children, style, onPress, ...rest}: Props) => {
    return (
        <TouchableOpacity style={styles.simpleButton} onPress={onPress} {...rest}>
            {children}
        </TouchableOpacity>
    )
}

export const IconButton = ({ children, style, onPress, ...rest}: Props) => {
    return (
        <TouchableOpacity style={styles.iconButton} onPress={onPress} {...rest}>
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    simpleButton: {
        backgroundColor: colors.AZUL,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignSelf: "flex-start",
    },
    iconButton: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 3,
        paddingHorizontal: 3,
        borderRadius: 10,
        alignSelf: "flex-start",
    }
})
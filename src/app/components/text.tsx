import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

type Props = TextProps & {
    children: React.ReactNode;
};

export const TextRegular = ({ children, style, ...rest}: Props) => {
    return (
        <Text style={[styles.regular, style]} {...rest}>{children}</Text>
    )
}

export const TextSemiBold = ({ children, style, ...rest}: Props) => {
    return (
        <Text style={[styles.semibold, style]} {...rest}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    regular: {
        fontFamily: 'Poppins_400Regular',
        color: colors.PRETO,
        fontSize: 16,
    },
    semibold: {
        fontFamily: 'Poppins_600SemiBold',
        color: colors.PRETO,
        fontSize: 16,
    }
})
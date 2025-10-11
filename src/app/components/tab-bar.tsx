import React from "react";
import { StyleSheet, View } from "react-native";
import { IconButton } from "./button";
import { colors } from "../../theme/colors";
import { ChartIcon, HomeIcon, MoneyIcon, PackageIcon, ShirtIcon, TruckIcon } from "./icon";

export const TabBar = () => {
    return (
        <View style={styles.tabBar}>
            <IconButton>
                <TruckIcon/>
            </IconButton>
            <IconButton>
                <ShirtIcon/>
            </IconButton>
            <IconButton>
                <HomeIcon/>
            </IconButton>
            <IconButton>
                <ChartIcon/>
            </IconButton>
            <IconButton>
                <PackageIcon/>
            </IconButton>
            <IconButton>
                <MoneyIcon/>
            </IconButton>
        </View>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: "85%",
        backgroundColor: colors.AZUL,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
});
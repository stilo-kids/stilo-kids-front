import { Stack } from "expo-router";
import '../../global.css';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { useEffect } from "react";
import { Text } from "react-native";
import Loading from "./components/loading";

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold
    });

    useEffect(() => {
        if (fontsLoaded) {
            <Text>Error: Fonte não carregada</Text>
        }
    }, [fontsLoaded])

    if (!fontsLoaded) {
        return (
            <Loading/>
        )
    }
    return <Stack screenOptions={{headerShown: false}}/>;
}
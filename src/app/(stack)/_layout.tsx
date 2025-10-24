import { Stack } from "expo-router";

export default function StackLayout() {
    return(
        <Stack screenOptions={{ headerShown: false}}>
            <Stack.Screen name="(suppliers)"/>
            <Stack.Screen name="(products)"/>
        </Stack>
    );
}
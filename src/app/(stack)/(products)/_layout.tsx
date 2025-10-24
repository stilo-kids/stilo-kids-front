import { Stack } from "expo-router";

export default function SupplierLayout() {
    return(
        <Stack>
            <Stack.Screen name="products"/>
        </Stack>
    );
}
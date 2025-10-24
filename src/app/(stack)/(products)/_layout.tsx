import { Stack } from "expo-router";
import CustomStackHeader from "../../../components/CustomStackHeader";
import { View } from "react-native";

export default function ProductLayout() {
    return (
        <Stack>
            <Stack.Screen
                options={{
                    header: () => <CustomStackHeader title="Produtos" onHelpPress={() => ''} bgColor="orange" />,
                }}
                name="index"
            />
            <Stack.Screen
                options={{
                    header: () => <CustomStackHeader title="Produto" onHelpPress={() => ''} bgColor="orange" />,
                }}
                name="[id]"
            />
            <Stack.Screen
                options={{
                    header: () => <CustomStackHeader title="Editar Produto" onHelpPress={() => ''} bgColor="orange" />,
                }}
                name="edit/[id]"
            />

        </Stack>
    );
}
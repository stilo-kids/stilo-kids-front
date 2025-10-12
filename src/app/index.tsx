import { View, Text } from "react-native";
import '../../global.css';
import { Button, buttonTextVariants } from "./components/Button";

export default function Index() {
    return (
        <View>
            <Text>Stilo Kids!</Text>
            <Button label="Botão"/>
        </View>
    );
}
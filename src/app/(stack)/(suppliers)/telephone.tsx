import { View, Text } from "react-native";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";

export default function Telephone() {

    return (
        <View className="flex-1 justify-center items-center">
            <Input label="Contato"/>
            <Button label="Adicionar"/>
        </View>
    );
}
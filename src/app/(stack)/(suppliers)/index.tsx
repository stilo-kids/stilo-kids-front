import { View, Text } from "react-native";
import { Input } from "../../../components/Input";
import { Select } from "../../../components/Select";
import { Button } from "../../../components/Button";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Supplier() {

    const router = useRouter();

    const [selectedContact, setSelectedContact] = useState<string | number>();

    return (
        <View className="flex-1 justify-center items-center">
            <Input label="Nome"/>
            <Select label="Contato" labelKey="Contato" valueKey="Contato"/>
            <Select label="Endereço" labelKey="Contato" valueKey="Contato"/>
            <Text>Supplier Index</Text>
            <Button label="Adicionar"/>
        </View>
    );
}
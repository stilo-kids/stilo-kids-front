import tw from 'twrnc';
import { View, Text } from "react-native";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";

export default function Adress() {

    return (
        <View style={tw`flex-1 justify-center items-center`}>
            <Input label="Cidade"/>
            <Input label="Bairro"/>
            <Input label="Logradouro"/>
            <Input label="Número"/>
            <Button label="Adicionar"/>
        </View>
    );
}
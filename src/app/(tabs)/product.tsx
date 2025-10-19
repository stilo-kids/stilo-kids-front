import { View, Text } from "react-native";
import '../../../global.css';
import { useRouter } from "expo-router";
import tw from "../../../tw";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { ArrowRightIcon } from "../../components/icon";

/**
 * Aqui não usa style com tw pois o Card é um componente customizado que
 * aceita className como prop. Ou seja: na definição do Card, já existe um atributo style aplicado.
 * Por isso, para manter a consistência, usa-se className aqui também (pois ele concatena o style padrão do card e o do className).
 */
export default function Index() {

    const router = useRouter();

    return (
        <View style={tw`flex-1 gap-5 flex-col items-center mt-8`}>
            <View>
                <Button variant="cardButton" style={tw`self-start h-auto`}>
                    <Card style={tw`flex-row justify-between items-center py-5 border-blue`}>
                        <Text style={tw`font-semibold`}>Relatórios</Text>
                        <ArrowRightIcon color="black"/>
                    </Card>
                </Button> 
            </View>
            <Button onPress={() => router.push("/(stack)/(products)")} style={tw`px-10`} label="Adicionar novo"/>
        </View>
    );
}
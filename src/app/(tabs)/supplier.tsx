import { View, Text } from "react-native";
import '../../../global.css';
import { useRouter } from "expo-router";
import { Card } from "../../components/Card";
import { ArrowRightIcon } from "../../components/icon";
import { Button } from "../../components/Button";

/**
 * Aqui não usa style com tw pois o Card é um componente customizado que
 * aceita className como prop. Ou seja: na definição do Card, já existe um atributo style aplicado.
 * Por isso, para manter a consistência, usa-se className aqui também (pois ele concatena o style padrão do card e o do className).
 */
export default function Index() {

    const router = useRouter();

    return (
        <View className="flex-1 gap-5 flex-col items-center mt-8 ">
            <View>
                <Button variant="cardButton" className="self-start h-auto">
                    <Card className="flex-row justify-between items-center py-5 border-blue">
                        <Text className="font-semibold">Relatórios</Text>
                        <ArrowRightIcon color="black"/>
                    </Card>
                </Button> 
            </View>
            <Button onPress={() => router.push("/(stack)/(suppliers)")} className="px-10" label="Adicionar novo"/>
        </View>
    );
}
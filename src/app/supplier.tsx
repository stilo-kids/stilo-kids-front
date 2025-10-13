import { View, Text } from "react-native";
import '../../global.css';
import { useRouter } from "expo-router";
import { Card } from "../components/Card";
import { ArrowRightIcon } from "../components/icon";
import { Button } from "../components/Button";

export default function Index() {

    const router = useRouter();

    return (
        <View className="flex-1 gap-5 flex-col items-center mt-8 bg-orange ">
            <View>
                <Button variant="cardButton" className="bg-red self-start h-auto">
                    <Card className="flex-row justify-between items-center py-5 border-blue">
                        <Text className="font-semibold">Relatórios</Text>
                        <ArrowRightIcon color="black"/>
                    </Card>
                </Button> 
            </View>
            <Button className="px-10" label="Adicionar novo"/>
        </View>
    );
}
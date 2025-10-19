import tw from 'twrnc';
import { View, Text } from "react-native";
import '../../../global.css';
import { useRouter } from "expo-router";
import { Card } from "../../components/Card";
import { ArrowRightIcon } from "../../components/icon";
import { Button } from "../../components/Button";

export default function Index() {

    const router = useRouter();

    return (
        <View style={tw`flex-1 gap-5 flex-col items-center mt-8`}>
            <View>
                <Button variant="cardButton" className="self-start h-auto">
                    <Card className="flex-row justify-between items-center py-5 border-blue">
                        <Text style={tw`font-semibold`}>Relatórios</Text>
                        <ArrowRightIcon color="black"/>
                    </Card>
                </Button> 
            </View>
            <Button onPress={() => router.push("/(stack)/(suppliers)")} className="px-10" label="Adicionar novo"/>
        </View>
    );
}
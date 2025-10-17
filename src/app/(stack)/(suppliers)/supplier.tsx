import { View, Text } from "react-native";
import { Button } from "../../../components/Button";
import { Card } from "../../../components/Card";
import { EditIcon, TrashIcon } from "../../../components/icon";

export default function DetailSupplier() {

    return (
        <View className="flex-1 justify-center items-center">
            <Card className="flex-row justify-between">
                <View className="flex-col">
                    <Text># Nome</Text>
                    <Text>Info 1</Text>
                    <Text>Info 2</Text>
                    <Text>Info 3</Text>
                </View>
                <View>
                    <Button variant="iconbutton">
                        <EditIcon/>
                    </Button>
                    <Button variant="iconbutton">
                        <TrashIcon/>
                    </Button>
                </View>
            </Card>
        </View>
    );
}
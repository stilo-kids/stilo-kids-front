import { View, Text } from "react-native";
import '../../global.css';
import { useRouter } from "expo-router";

export default function Index() {

    const router = useRouter();

    return (
        <View>
            <Text>Product</Text>
        </View>
    );
}
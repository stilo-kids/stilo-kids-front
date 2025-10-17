import { Tabs } from "expo-router";
import '../../../global.css';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Loading from "../../components/Loading";
import { cn } from "../lib/utils";
import { HelpIcon, SettingsIcon, TruckIcon, ShirtIcon, HomeIcon, ChartIcon, PackageIcon, MoneyIcon } from "../../components/icon";
import { colors } from "../../theme/colors";

export default function TabsLayout() {
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold
    });

    useEffect(() => {
        if (fontsLoaded) {
            <Text>Error: Fonte não carregada</Text>
        }
    }, [fontsLoaded])

    if (!fontsLoaded) {
        return (
            <Loading/>
        )
    }
    return(
        <Tabs 
            screenOptions={{ 
                headerStyle: { backgroundColor: colors.white },
                headerTitleAlign: 'left',
                headerTitleStyle: {
                    fontFamily: 'Poppins_600SemiBold',
                    fontSize: 18,
                    color: colors.black
                },
                headerRight: () => (
                    <View className="flex-row gap-1 mr-10">
                        <TouchableOpacity>
                            <HelpIcon color="black"/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <SettingsIcon color="black"/>
                        </TouchableOpacity>
                    </View>
                ),
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "transparent",
                    position: "absolute",
                    height: 80,
                    elevation: 0,
                    borderTopWidth: 0,
                },
            }}
            tabBar={({ state, descriptors, navigation }) => (
                <View className={cn(
                    "bg-blue rounded-xl py-[6] px-[12] w-96 flex-row justify-between mx-2",
                    "absolute bottom-5 left-1/2 -translate-x-1/2 shadow-md",
                )}
                style={{ minWidth: 320 }}>
                    {state.routes.map((route, index) => {
                        const isFocused = state.index === index;
                        
                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });
                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name);
                            }
                        };

                        const icons: Record<string, React.ReactNode> = {
                            index: <HomeIcon/>,
                            product: <ShirtIcon/>,
                            supplier: <TruckIcon/>,
                            sale: <ChartIcon/>,
                            stock: <PackageIcon/>,
                            financial: <MoneyIcon/>
                        };

                        return (
                            <TouchableOpacity
                                key={route.key}
                                onPress={onPress}
                                className={cn(
                                    "items-center justify-center mx-1",
                                    "rounded-xl aspect-square transition-all duration-300",
                                    isFocused ? "bg-orange" : "bg-transparent",
                                )}
                                style={{
                                    width: 40, height: 40
                                }}>

                                {icons[route.name]}
                            </TouchableOpacity>
                        );
                    })}
                </View>
            )}>
                <Tabs.Screen name="supplier" options={{title: "Fornecedores", }}/>
                <Tabs.Screen name="product" options={{title: "Produtos", }}/>
                <Tabs.Screen name="index" options={{title: "Início", }} />
                <Tabs.Screen name="sale" options={{title: "Vendas", }} />
                <Tabs.Screen name="stock" options={{title: "Estoque", }}/>
                <Tabs.Screen name="financial" options={{title: "Finanças", }}/>
            </Tabs>
    )
}
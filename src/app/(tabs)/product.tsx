import { View, Text } from "react-native";
import '../../../global.css';
import { useRouter } from "expo-router";
import tw from "../../../tw";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { ArrowRightIcon, EyeIcon } from "../../components/icon";
import { Table } from "../../components/Table";
import { useEffect, useState } from "react";
import { Product, tableHeaders } from "../(stack)/(products)/types";
import { getProducts } from "../(stack)/(products)/product-api";

export default function Index() {

    const router = useRouter();

    const [products, setProducts] = useState<Array<Product>>([]);

    const transformProductsForTable = (products: Product[]) => {
        const rows = products.map(product => ({
            id: product.id,
            name: product.name,
            suppliers: product.suppliers.map(s => s.name).join(', '),
            brand: product.brand.name,
            clothing_type: product.clothing_type.type,
            actions: (
                <Button icon={() => <EyeIcon color="black"/>} onPress={() => {
                    router.push(`/(stack)/(products)/${product.id}`);
                }}></Button>
            )
        }));


        return rows;
    };

    const tableData = transformProductsForTable(products);

    useEffect(() => {
        getProducts().then((data) => {
            console.log(data)
            setProducts(data);
        }).catch((error) => {
            console.error("Erro ao buscar produtos:", error);
        });
    }, []);

    return (
        <View style={tw`flex flex-col gap-y-10 mt-10 items-center `}>
            <View>
                <Button variant="cardButton" style={tw`self-start h-auto`}>
                    <Card style={tw`flex-row justify-between items-center py-5 border-[#FBA53E]`}>
                        <Text style={tw`font-semibold text-black text-xl`}>Relatórios</Text>
                        <ArrowRightIcon color="black"/>
                    </Card>
                </Button> 
            </View>
            <Table headers={tableHeaders} data={tableData} />
            <Button onPress={() => router.push("/(stack)/(products)")} style={tw`px-10 bg-orange`} label="Adicionar novo" variant='orange'/>
        </View>
    );
}
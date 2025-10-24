import { View, Text, ScrollView } from "react-native"
import tw from "../../../../tw"
import { EditIcon, TrashIcon } from "../../../components/icon"
import { useEffect, useState } from "react";
import { Product } from "./types";
import { deleteProduct, getProductById } from "./product-api";
import { Button } from "../../../components/Button";
import { useLocalSearchParams, useRouter } from "expo-router";

function formatDateToDDMMYYYY(isoDate: string | null | undefined | Date) {
    if (!isoDate) return ""
    const date = new Date(isoDate)
    const day = String(date.getDate()).padStart(2, "0")
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
}


export default function Detail() {
    const [product, setProduct] = useState<Product | null>(null)
    const { id } = useLocalSearchParams<{ id: string }>();
    const router = useRouter();

    useEffect(() => {
        const fetchProduct = async () => {
            getProductById(Number(id)).then((data) => {
                setProduct(data)
            })
        }

        fetchProduct();
    }, []);

    return (
        <ScrollView style={tw`flex-1`} contentContainerStyle={tw`pb-10`}>
            <View style={tw`mx-auto w-11/12 mt-8 border border-y bg-[#fff] shadow-lg`}>
                <View style={tw`mx-10 flex flex-col gap-y-6 my-4`}>
                    <View style={tw`flex flex-row justify-between items-center`}>
                        <View>
                            <Text style={tw`text-2xl font-semibold`}>#{product?.id} {product?.name}</Text>
                        </View>
                        <View>
                            <Button onPress={() => {
                                router.push(`/(stack)/(products)/edit/${id}`)
                            }}>
                                <EditIcon />
                            </Button>
                        </View>
                    </View>
                    <View>
                        <Text style={tw`text-2xl font-semibold`}>Fornecedores</Text>
                    </View>
                    <View>
                        <Text style={tw`text-xl`}>{product?.suppliers.map((supplier) => supplier.name).join(", ")}</Text>
                    </View>
                    <View>
                        <Text style={tw`text-2xl font-semibold`}>Marca</Text>
                    </View>
                    <View>
                        <Text style={tw`text-xl`}>{product?.brand.name}</Text>
                    </View>
                    <View>
                        <Text style={tw`text-2xl font-semibold`}>Tipo de roupa</Text>
                    </View>
                    <View>
                        <Text style={tw`text-xl`}>{product?.clothing_type.type}</Text>
                    </View>
                    <View>
                        <Text style={tw`text-2xl font-semibold`}>Tamanhos da Roupa</Text>
                    </View>
                    <View>
                        <Text style={tw`text-xl`}>{product?.clothing_size.size}</Text>
                    </View>
                    {/* <View>
                        <Text style={tw`text-2xl font-semibold`}>Data de aquisição</Text>
                    </View>
                    <View>
                        <Text style={tw`text-xl`}>{formatDateToDDMMYYYY(product?.acquisition_date)}</Text>
                    </View> */}
                    <View>
                        <Text style={tw`text-2xl font-semibold`}>Preço</Text>
                    </View>
                    <View>
                        <Text style={tw`text-xl`}>R$ {product?.sale_price}</Text>
                    </View>
                    <View>
                        <Text style={tw`text-2xl font-semibold`}>Valor de Custo</Text>
                    </View>
                    <View>
                        <Text style={tw`text-xl`}>R$ {product?.cost_price}</Text>
                    </View>
                    <View style={tw`flex flex-row justify-between items-center`}>
                        <View style={tw`flex flex-col gap-y-4`}>
                            <View>
                                <Text style={tw`text-2xl font-semibold`}>Descrição</Text>
                            </View>
                            <Text style={tw`text-2xl font-semibold`}>#{product?.id} {product?.name}</Text>
                        </View>
                        <View>
                            <Button onPress={() => {
                                deleteProduct(Number(id)).then(() => {
                                    router.push('/(tabs)/product')
                                });
                            }}>
                                <TrashIcon />
                            </Button>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

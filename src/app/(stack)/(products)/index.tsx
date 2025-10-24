import { Alert, Text, View } from "react-native"
import tw from "../../../../tw"
import { useEffect, useState } from "react"
import Input from "../../../components/form/Input"
import Select, { IOptions } from "../../../components/form/Select"
import { createProduct, getBrands, getClothingSizes, getClothingTypes, getSuppliers } from "./product-api"
import Loading from "../../../components/Loading"
import { Button } from "../../../components/Button"
import InputDate from "../../../components/form/InputDate"
import TextArea from "../../../components/form/TextArea"
import { Product, ProductCreateDTO } from "./types"
import { router } from 'expo-router';


export default function Form() {
    const [formPage, setFormPage] = useState(0)
    const [clothingSizes, setClothingSizes] = useState<Array<IOptions>>([])
    const [brands, setBrands] = useState<Array<IOptions>>([])
    const [clothingTypes, setClothingTypes] = useState<Array<IOptions>>([])
    const [suppliers, setSuppliers] = useState<Array<IOptions>>([])
    const [isLoading, setIsLoading] = useState(true)

    const [selectedBrand, setSelectedBrand] = useState<string>('')
    const [selectedClothingSize, setSelectedClothingSize] = useState<string >('')
    const [selectedClothingType, setSelectedClothingType] = useState<string >('')
    const [selectedSupplier, setSelectedSupplier] = useState<string>('')

    const [description, setDescription] = useState<string>("")
    const [acquisitionDate, setAcquisitionDate] = useState<Date | null>(null)
    const [price, setPrice] = useState<string>("")
    const [costValue, setCostValue] = useState<string>("")
    const [name, setName] = useState<string>("")

    const handleSave = async () => {

        console.log(price, costValue, selectedBrand, selectedClothingSize, selectedClothingType, selectedSupplier, description, acquisitionDate, name)
        const product: ProductCreateDTO = {
            name: name,
            clothing_size_id: Number(selectedClothingSize),
            clothing_type_id: Number(selectedClothingType),
            brand_id: Number(selectedBrand),
            supplier_id: Number(selectedSupplier),
            description: description,
            acquisition_date: acquisitionDate ? acquisitionDate.toISOString() : '',
            sale_price: Number(price.replace(',', '.')),
            cost_price: Number(costValue.replace(',', '.')),
        }

        const result = await createProduct(product);

        if (result.success) {
            Alert.alert('Sucesso', 'Produto criado com sucesso!');
            router.push('/(tabs)/product');
        } else {
            console.error(result.error);
            Alert.alert('Erro', 'Não foi possível criar o produto. Por favor, verifique se os campos estão válidos.')
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [sizes, brands, types, supplierResolve] = await Promise.all([
                    getClothingSizes(),
                    getBrands(),
                    getClothingTypes(),
                    getSuppliers(),
                ])

                setClothingSizes(
                    sizes.map(size => {
                        return { label: size.size, value: size.id.toString() }
                    })
                )

                setBrands(
                    brands.map(brand => ({ label: brand.name, value: brand.id.toString() }))
                )

                setClothingTypes(
                    types.map(type => ({ label: type.type, value: type.id.toString() }))
                )

                setSuppliers(
                    supplierResolve.map(supplier => ({
                        label: supplier.name,
                        value: supplier.id.toString(),
                    }))
                )
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) return <Loading />;

    return (
        <View>
            <View style={tw`mx-auto w-8/12 mt-8`}>
                {
                    formPage === 0 ? (
                        <View style={tw`flex flex-col gap-y-4`}>
                            <View style={tw`flex flex-col gap-y-2`}>
                                <Text style={tw`text-xl`}>Nome</Text>
                                <Input onChange={setName} value={name} placeholder="Nome" secureTextEntry={false} />
                            </View>
                            <View style={tw`flex flex-col gap-y-2`}>
                                <Text style={tw`text-xl`}>Tamanho</Text>
                                <Select onValueChange={setSelectedClothingSize} options={clothingSizes} selectedValue={selectedClothingSize} placeholder="Escolha um tamanho de roupa" />
                            </View>
                            <View style={tw`flex flex-col gap-y-2 w-full`}>
                                <Text style={tw`text-xl`}>Preço</Text>
                                <Input onChange={setPrice} value={price} placeholder="R$ XX,XX" secureTextEntry={false} />
                            </View>
                            <View style={tw`flex flex-col gap-y-2 w-full`}>
                                <Text style={tw`text-xl`}>Valor de Custo</Text>
                                <Input onChange={setCostValue} value={costValue} placeholder="R$ XX,XX" secureTextEntry={false} />
                            </View>
                            <View style={tw`flex flex-col gap-y-2`}>
                                <Text style={tw`text-xl`}>Tipo</Text>
                                <Select onValueChange={setSelectedClothingType} options={clothingTypes} selectedValue={selectedClothingType} placeholder="Escolha um tipo de roupa" />
                            </View>
                            <View style={tw`flex flex-col gap-y-2`}>
                                <Text style={tw`text-xl`}>Marca</Text>
                                <Select onValueChange={setSelectedBrand} options={brands} selectedValue={selectedBrand} placeholder="Escolha uma marca" />
                            </View>
                            <View style={tw`w-6/12 mx-auto`}>
                                <Button style={tw`px-10 bg-orange`} size='lg' label="Avançar" labelClasses="font-semibold text-white" onPress={() => setFormPage(1)} />
                            </View>
                        </View>
                    ) : (
                        <View style={tw`flex flex-col gap-y-4`}>
                            <View style={tw`flex flex-col gap-y-2`}>
                                <Text style={tw`text-xl`}>Fornecedores</Text>
                                <Select onValueChange={setSelectedSupplier} options={suppliers} selectedValue={selectedSupplier} placeholder="Escolha um fornecedor" />
                            </View>
                            <View style={tw`flex flex-col gap-y-2`}>
                                <Text style={tw`text-xl`}>Data de aquisição</Text>
                                <InputDate onChange={setAcquisitionDate} value={acquisitionDate} placeholder="Data de aquisição" />
                            </View>
                            <View style={tw`flex flex-col gap-y-2`}>
                                <Text style={tw`text-xl`}>Descrição</Text>
                                <TextArea onChange={setDescription} value={description} placeholder="Descrição" />
                            </View>
                            <View style={tw`w-10/12 mx-auto`}>
                                <Button style={tw`px-10 bg-orange`} size='lg' label="Adicionar" labelClasses="font-semibold text-white" onPress={() => handleSave()} />
                            </View>
                        </View>
                    )
                }
            </View>
        </View>
    )
}
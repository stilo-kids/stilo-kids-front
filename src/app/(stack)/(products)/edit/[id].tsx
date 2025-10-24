import { Alert, Text, View } from "react-native"
import tw from "../../../../../tw"
import { useEffect, useState } from "react"
import Input from "../../../../components/form/Input"
import Select, { IOptions } from "../../../../components/form/Select"
import { getBrands, getClothingSizes, getClothingTypes, getSuppliers, getProductById, updateProduct } from "../product-api"
import Loading from "../../../../components/Loading"
import { Button } from "../../../../components/Button"
import InputDate from "../../../../components/form/InputDate"
import TextArea from "../../../../components/form/TextArea"
import { Product, ProductCreateDTO } from "../types"
import { useLocalSearchParams, router } from 'expo-router';

export default function EditProduct() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const [isLoading, setIsLoading] = useState(true)

    const [clothingSizes, setClothingSizes] = useState<Array<IOptions>>([])
    const [brands, setBrands] = useState<Array<IOptions>>([])
    const [clothingTypes, setClothingTypes] = useState<Array<IOptions>>([])
    const [suppliers, setSuppliers] = useState<Array<IOptions>>([])

    const [selectedBrand, setSelectedBrand] = useState<string>('')
    const [selectedClothingSize, setSelectedClothingSize] = useState<string>('')
    const [selectedClothingType, setSelectedClothingType] = useState<string>('')
    const [selectedSupplier, setSelectedSupplier] = useState<string>('')

    const [description, setDescription] = useState<string>("")
    const [acquisitionDate, setAcquisitionDate] = useState<Date | null>(null)
    const [price, setPrice] = useState<string>("")
    const [costValue, setCostValue] = useState<string>("")
    const [name, setName] = useState<string>("")

    const [formPage, setFormPage] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            if (!id) return
            setIsLoading(true)
            try {
                const [sizes, brandsRes, types, supplierResolve, product] = await Promise.all([
                    getClothingSizes(),
                    getBrands(),
                    getClothingTypes(),
                    getSuppliers(),
                    getProductById(Number(id))
                ])

                setClothingSizes(sizes.map(size => ({ label: size.size, value: size.id.toString() })))
                setBrands(brandsRes.map(brand => ({ label: brand.name, value: brand.id.toString() })))
                setClothingTypes(types.map(type => ({ label: type.type, value: type.id.toString() })))
                setSuppliers(supplierResolve.map(supplier => ({ label: supplier.name, value: supplier.id.toString() })))

                if (product) {
                    setName(product.name)
                    setSelectedBrand(product.brand.id.toString())
                    setSelectedClothingSize(product.clothing_size.id.toString())
                    setSelectedClothingType(product.clothing_type.id.toString())
                    setSelectedSupplier(product.suppliers[0]?.id.toString() || '')
                    setDescription(product.description)
                    setAcquisitionDate(product.acquisition_date ? new Date(product.acquisition_date) : null)
                    setPrice(product.sale_price.toString())
                    setCostValue(product.cost_price.toString())
                }

            } catch (error) {
                console.error(error)
                Alert.alert("Erro", "Não foi possível carregar os dados do produto.")
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [id])

    const handleSave = async () => {
        if (!id) return
        const productDTO: ProductCreateDTO = {
            name,
            clothing_size_id: Number(selectedClothingSize),
            clothing_type_id: Number(selectedClothingType),
            brand_id: Number(selectedBrand),
            supplier_id: Number(selectedSupplier),
            description,
            acquisition_date: acquisitionDate ? acquisitionDate.toISOString() : '',
            sale_price: Number(price.replace(',', '.')),
            cost_price: Number(costValue.replace(',', '.')),
        }

        const result = await updateProduct(Number(id), productDTO)
        if (result.success) {
            Alert.alert("Sucesso", "Produto atualizado com sucesso!")
            router.push('/(tabs)/product')
        } else {
            console.error(result.error)
            Alert.alert("Erro", "Não foi possível atualizar o produto.")
        }
    }

    if (isLoading) return <Loading />

    return (
        <View>
            <View style={tw`mx-auto w-8/12 mt-8`}>
                {
                    formPage === 0 ? (
                        <View style={tw`flex flex-col gap-y-4`}>
                            <View style={tw`flex flex-col gap-y-2`}>
                                <Text style={tw`text-xl`}>Nome</Text>
                                <Input value={name} onChange={setName} placeholder="Nome" secureTextEntry={false} />
                            </View>
                            <View style={tw`flex flex-col gap-y-2`}>
                                <Text style={tw`text-xl`}>Tamanho</Text>
                                <Select selectedValue={selectedClothingSize} onValueChange={setSelectedClothingSize} options={clothingSizes} placeholder="Escolha um tamanho de roupa" />
                            </View>
                            <View style={tw`flex flex-col gap-y-2`}>
                                <Text style={tw`text-xl`}>Preço</Text>
                                <Input value={price} onChange={setPrice} placeholder="R$ XX,XX" secureTextEntry={false} />
                            </View>
                            <View style={tw`flex flex-col gap-y-2`}>
                                <Text style={tw`text-xl`}>Valor de Custo</Text>
                                <Input value={costValue} onChange={setCostValue} placeholder="R$ XX,XX" secureTextEntry={false} />
                            </View>
                            <View style={tw`flex flex-col gap-y-2`}>
                                <Text style={tw`text-xl`}>Tipo</Text>
                                <Select selectedValue={selectedClothingType} onValueChange={setSelectedClothingType} options={clothingTypes} placeholder="Escolha um tipo de roupa" />
                            </View>
                            <View style={tw`flex flex-col gap-y-2`}>
                                <Text style={tw`text-xl`}>Marca</Text>
                                <Select selectedValue={selectedBrand} onValueChange={setSelectedBrand} options={brands} placeholder="Escolha uma marca" />
                            </View>
                            <View style={tw`w-6/12 mx-auto`}>
                                <Button style={tw`px-10 bg-orange`} label="Avançar" size='lg' labelClasses="font-semibold text-white" onPress={() => setFormPage(1)} />
                            </View>
                        </View>
                    ) : (
                        <View style={tw`flex flex-col gap-y-4`}>

                            <View style={tw`flex flex-col gap-y-2`}>
                                <Text style={tw`text-xl`}>Fornecedores</Text>
                                <Select selectedValue={selectedSupplier} onValueChange={setSelectedSupplier} options={suppliers} placeholder="Escolha um fornecedor" />
                            </View>
                            <View style={tw`flex flex-col gap-y-2`}>
                                <Text style={tw`text-xl`}>Data de aquisição</Text>
                                <InputDate value={acquisitionDate} onChange={setAcquisitionDate} placeholder="Data de aquisição" />
                            </View>
                            <View style={tw`flex flex-col gap-y-2`}>
                                <Text style={tw`text-xl`}>Descrição</Text>
                                <TextArea value={description} onChange={setDescription} placeholder="Descrição" />
                            </View>
                            <View style={tw`w-6/12 mx-auto`}>
                                <Button style={tw`px-10 bg-orange`} label="Salvar" size='lg' labelClasses="font-semibold text-white" onPress={handleSave} />
                            </View>
                        </View>
                    )
                }
            </View>
        </View>
    )
}

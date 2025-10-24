import { Text, View, ScrollView } from "react-native";
import tw from "../../tw";

interface TableProps {
    headers: string[];
    data: any[];
    minColumnWidth?: number;
    style?: object;
}

function TableHeader({ headers, minColumnWidth = 120 }: { headers: string[], minColumnWidth?: number }) {
    return (
        <View style={tw`flex-row bg-orange py-3`}>
            {headers.map((header, index) => (
                <View
                    key={index}
                    style={[
                        tw`px-4 justify-center`,
                        { 
                            width: minColumnWidth,
                            minWidth: minColumnWidth 
                        }
                    ]}
                >
                    <Text
                        style={tw`font-bold text-white text-center`}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {header}
                    </Text>
                </View>
            ))}
        </View>
    )
}

function TableBody({ data, minColumnWidth = 120 }: { data: Array<Object>, minColumnWidth?: number }) {
    return (
        <View>
            {data.map((row, i) => (
                <View
                    key={i}
                    style={[
                        tw`flex-row py-2 ${i === data.length - 1 ? '' : 'border-b border-gray-200'}`,
                        i % 2 === 0 ? tw`bg-white` : tw`bg-gray-50`
                    ]}
                >
                    {Object.values(row).map((item, j) => {
                        
                        return (
                            <View
                                key={j}
                                style={[
                                    tw`px-4 justify-center`,
                                    { width: minColumnWidth, minWidth: minColumnWidth }
                                ]}
                            >
                                <Text
                                    style={tw`text-gray-700 text-center text-sm`}
                                >
                                    {item}
                                </Text>
                            </View>
                        )
                    })}
                </View>
            ))}
        </View>
    )
}

export function Table({ headers, data, style, minColumnWidth = 120 }: TableProps) {
    const totalMinWidth = headers.length * minColumnWidth;
    console.log("Table data:", data, ' headers:', headers);

    return (
        <View style={[tw`w-80 shadow-lg  rounded-lg overflow-hidden bg-white `, style]}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={true}
                style={tw`w-full`}
                contentContainerStyle={{ minWidth: totalMinWidth }}
                bounces={false}
            >
                <View style={{ minWidth: totalMinWidth }}>
                    <TableHeader headers={headers} minColumnWidth={minColumnWidth} />
                    <TableBody data={data} minColumnWidth={minColumnWidth} />
                </View>
            </ScrollView>
        </View>
    )
}
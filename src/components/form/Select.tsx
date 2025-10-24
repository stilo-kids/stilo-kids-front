import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import tw from "../../../tw";

export interface IOptions {
  label: string;
  value: string;
}

interface GenericSelectProps {
  options: Array<IOptions>;
  selectedValue: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
}

export default function Select({
  options,
  selectedValue,
  onValueChange,
  placeholder = "Selecione uma opção",
}: GenericSelectProps) {
  return (
    <View style={tw`border border-gray-300 rounded-md`}>
      <Picker
        selectedValue={selectedValue || ""}
        onValueChange={(value) => {
          if (value !== "") {
            onValueChange(value);
          }
        }}
      >
        <Picker.Item
          label={placeholder}
          value=""
          color="#999"
        />

        {options.map((option) => (
          <Picker.Item
            key={option.value}
            label={option.label}
            value={option.value}
          />
        ))}
      </Picker>
    </View>
  );
}

import { TextInput } from "react-native";
import tw from "../../../tw";

interface GenericInputProps {
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
}

export default function Input({ value, onChange, placeholder, secureTextEntry }: GenericInputProps) {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={tw`border border-gray-300 rounded-md p-2`}
    />
  );
}

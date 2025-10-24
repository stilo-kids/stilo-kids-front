import React from "react";
import { TextInput } from "react-native";
import tw from "../../../tw";

interface TextAreaProps {
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
  numberOfLines?: number;
}

export default function TextArea({
  value,
  onChange,
  placeholder,
  numberOfLines = 4,
}: TextAreaProps) {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      multiline
      numberOfLines={numberOfLines}
      textAlignVertical="top"
      style={tw`border border-gray-300 rounded-md p-2 min-h-[100px] text-gray-700`}
    />
  );
}

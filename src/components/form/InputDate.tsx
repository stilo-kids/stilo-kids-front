import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Platform } from "react-native";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import tw from "../../../tw";

interface InputDateProps {
  value: Date | null;
  onChange: (date: Date) => void;
  placeholder?: string;
}

export default function InputDate({ value, onChange, placeholder }: InputDateProps) {
  const [showPicker, setShowPicker] = useState(false);

  const handleChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowPicker(false);
    if (selectedDate) {
      onChange(selectedDate);
    }
  };

  const formatted = value
    ? value.toLocaleDateString("pt-BR")
    : "";

  return (
    <View>
      <TouchableOpacity onPress={() => setShowPicker(true)}>
        <TextInput
          value={formatted}
          placeholder={placeholder || "Selecione uma data"}
          style={tw`border border-gray-300 rounded-md p-2 text-gray-700`}
          editable={false}
          pointerEvents="none"
        />
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={value || new Date()}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={handleChange}
        />
      )}
    </View>
  );
}

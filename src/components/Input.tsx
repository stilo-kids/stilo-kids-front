import tw from 'twrnc';
import { forwardRef } from 'react';
import { Text, TextInput, View } from 'react-native';

import { cn } from '../app/lib/utils';

export interface InputProps
  extends React.ComponentPropsWithoutRef<typeof TextInput> {
  label?: string;
  labelClasses?: string;
  inputClasses?: string;
}
const Input = forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  ({ className, label, labelClasses, inputClasses, ...props }, ref) => (
    <View style={tw`flex flex-col gap-1.5 ${className || ''}`}>
      {label && <Text style={tw`text-base ${labelClasses || ''}`}>{label}</Text>}
      <TextInput
        style={tw`border-input rounded-[10] px-3 py-3 border border-black w-96 ${inputClasses || ''}`}
        {...props}
      />
    </View>
  )
);

export { Input };

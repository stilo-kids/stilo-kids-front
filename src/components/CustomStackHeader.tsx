import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import tw from '../../tw';
import { ArrowLeftIcon, HelpIcon } from './icon';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
  title: string;
  bgColor: string;
  onHelpPress?: () => void;
};

export default function CustomStackHeader({ title, onHelpPress, bgColor }: Props) {
  const router = useRouter();

  return (
    <SafeAreaView style={tw`flex-row items-center justify-between px-4 bg-${bgColor} border-b border-gray`}>
      <TouchableOpacity onPress={() => router.back()} style={tw`p-2`}>
        <ArrowLeftIcon />
      </TouchableOpacity>

      <Text style={tw`text-lg font-semibold text-white`}>{title}</Text>

      <TouchableOpacity onPress={onHelpPress} style={tw`p-2`}>
        <HelpIcon color='white' />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

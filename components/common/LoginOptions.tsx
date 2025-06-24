import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import icons from '@/constants/icons';

const LoginOptions = () => {
  return (
    <View className="mt-8 flex flex-col gap-5">
      <TouchableOpacity
        activeOpacity={0.9}
        className="flex flex-row items-center justify-between gap-2 rounded-[8px] border border-[#F3F2F2] bg-[#395998] px-6 py-4"
        onPress={() => {}}>
        <Image source={icons.facebook} style={{ width: 28, height: 28 }} />
        <Text className="font-sf-medium text-[15px] uppercase text-white">
          Connect with Facebook
        </Text>
        <View></View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        className="flex flex-row items-center justify-between gap-2 rounded-[8px] border border-[#F3F2F2] bg-[#4285F4] px-6 py-4"
        onPress={() => {}}>
        <Image source={icons.google} style={{ width: 28, height: 28 }} />
        <Text className="font-sf-medium text-[15px] uppercase text-white">Connect with Google</Text>
        <View></View>
      </TouchableOpacity>
    </View>
  );
};

export default LoginOptions;

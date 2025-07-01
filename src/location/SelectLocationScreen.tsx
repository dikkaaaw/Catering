import { useState } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NavigationProp } from '@react-navigation/native';

import Header from '@/components/common/Header';
import icons from '@/constants/icons';

type RootStackParamList = {
  Tabs: undefined;
};

const SelectLocationScreen = () => {
  const navigate = useNavigation<NavigationProp<RootStackParamList>>();
  const [isPressed, setIsPressed] = useState(false);

  const handleClose = () => {
    navigate.navigate('Tabs');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView className="flex-1 bg-white">
        <Header closeIcon={true} onBackPress={handleClose} />

        {/* Main Content */}
        <View className="px-6 pt-10">
          <View className="flex flex-col gap-2">
            <Text className="text-center text-headline">Find restaurants near you </Text>
            <Text className="text-center text-body">
              Please enter your location or allow access to your location to find restaurants near
              you.
            </Text>

            {/* Search Input */}
            <View className="mt-6 flex flex-col gap-6">
              <TouchableOpacity
                activeOpacity={0.8}
                className={`rounded-[8px] border-[1px] border-primary p-4`}
                onPressIn={() => setIsPressed(true)}
                onPressOut={() => setIsPressed(false)}
                style={{
                  backgroundColor: isPressed ? '#22A45D' : 'transparent',
                }}>
                <View className="flex flex-row items-center justify-center gap-4">
                  <Image
                    source={icons.location}
                    style={{
                      width: 24,
                      height: 24,
                      tintColor: isPressed ? '#FFF' : '#22A45D',
                    }}
                  />
                  <Text className="text-body" style={{ color: isPressed ? '#FFF' : '#22A45D' }}>
                    Use current location
                  </Text>
                </View>
              </TouchableOpacity>
              <View className="flex flex-row items-center gap-4 rounded-[8px] border-[1px] border-[#868686]/10 bg-[#FBFBFB] p-4">
                <Image
                  source={icons.locationPoint}
                  style={{
                    width: 26,
                    height: 26,
                  }}
                />
                <TextInput
                  className="flex-1 tracking-wider text-body"
                  placeholder="Enter a new address"
                  placeholderTextColor="#868686"
                />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SelectLocationScreen;

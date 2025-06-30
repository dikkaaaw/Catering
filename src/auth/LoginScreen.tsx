import { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import icons from '@/constants/icons';
import Button from '@/components/common/Button';
import LoginOptions from '@/components/common/LoginOptions';

type RootStackParamList = {
  Login: undefined;
  Tabs: undefined;
  Register: undefined;
  EnterEmail: undefined;
};

const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const checkEmailValidity = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    navigation.navigate('Tabs');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const handleForgotPassword = () => {
    navigation.navigate('EnterEmail');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Main Content */}
      <View className="px-6 pt-10">
        <View className="flex flex-col items-center gap-8">
          <View className="flex-row items-center justify-center gap-3">
            <Image
              source={icons.icon}
              style={{ width: 38, height: 38, marginBottom: 8 }}
              resizeMode="contain"
            />
            <Text className="mb-2 text-center font-sf-bold text-[36px] tracking-wide text-primary">
              Foodly
            </Text>
          </View>

          <Text className="max-w-80 text-center text-body">
            Enter your Phone number or Email for sign in, Or{' '}
            <Text onPress={handleRegister} className="text-primary underline">
              Create new account.
            </Text>
          </Text>
        </View>

        {/* Login Form */}
        <View className="mt-10 flex flex-col gap-6">
          <View className="relative">
            <TextInput
              className="rounded-md border border-[#F3F2F2] bg-[#FBFBFB] px-6 pr-12 text-body"
              style={{ height: 56 }}
              placeholder="example@gmail.com"
              inputMode="email"
              keyboardType="email-address"
              returnKeyType="next"
              autoCapitalize="none"
              autoComplete="email"
              onChangeText={checkEmailValidity}
            />
            <View
              style={{
                position: 'absolute',
                right: 16,
                top: '50%',
                transform: [{ translateY: -12 }],
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={isEmailValid ? icons.check : icons.phone}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            </View>
          </View>
          <View className="relative">
            <TextInput
              className="rounded-md border border-[#F3F2F2] bg-[#FBFBFB] px-6 pr-12 text-body"
              style={{ height: 56 }}
              placeholder="password"
              returnKeyType="done"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={togglePasswordVisibility}
              style={{
                position: 'absolute',
                right: 16,
                top: '50%',
                transform: [{ translateY: -12 }],
              }}>
              <Image
                source={icons.eye}
                style={{
                  width: 28,
                  height: 28,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Button */}
        <View className="mt-10 flex flex-col gap-8">
          <TouchableOpacity activeOpacity={0.9} onPress={handleForgotPassword}>
            <Text className="text-center font-sf-medium text-[16px] text-black">
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <Button title="Sign In" onPress={handleLogin} />

          <TouchableOpacity activeOpacity={0.9} onPress={() => {}}>
            <Text className="text-center font-sf-medium text-[16px] text-black">Or</Text>
          </TouchableOpacity>
        </View>

        {/* Login Options */}
        <LoginOptions />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

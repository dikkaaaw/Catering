import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import icons from '@/constants/icons';
import Button from '@/components/common/Button';
import LoginOptions from '@/components/common/LoginOptions';
import { useEmailValidation, usePasswordValidation } from '@/hooks/useValidation';

type RootStackParamList = {
  Login: undefined;
  Tabs: undefined;
  Register: undefined;
  EnterEmail: undefined;
};

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Custom hook for validation
  const email = useEmailValidation();
  const password = usePasswordValidation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    const isEmailValid = email.validate();
    const isPasswordValid = password.validate();

    if (isEmailValid && isPasswordValid) {
      navigate.navigate('Tabs');
    }
  };

  const handleRegister = () => {
    navigate.navigate('Register');
  };

  const handleForgotPassword = () => {
    navigate.navigate('EnterEmail');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              Enter your Phone number or Email address for sign in. Enjoy your food :)
            </Text>
          </View>

          {/* Login Form */}
          <View className="mt-10 flex flex-col gap-4">
            <View className="mb-2">
              <View className="relative">
                <TextInput
                  className={`rounded-lg border ${email.error ? 'border-red-400' : 'border-[#F3F2F2]'} bg-[#FBFBFB] px-5 pr-12 text-body`}
                  style={{ height: 52 }}
                  placeholder="example@gmail.com"
                  inputMode="email"
                  keyboardType="email-address"
                  returnKeyType="next"
                  autoCapitalize="none"
                  autoComplete="email"
                  value={email.value}
                  onChangeText={email.setValue}
                />
                {email && (
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
                      source={!email.error ? icons.check : icons.phone}
                      style={{
                        width: 22,
                        height: 22,
                        tintColor: '#A3A3A3',
                      }}
                    />
                  </View>
                )}
              </View>
              {email.error && <Text className="ml-1 mt-1 text-sm text-red-400">{email.error}</Text>}
            </View>
            <View className="mb-2">
              <View className="relative">
                <TextInput
                  className={`rounded-lg border ${password.error ? 'border-red-400' : 'border-[#F3F2F2]'} bg-[#FBFBFB] px-5 pr-12 text-body`}
                  style={{ height: 52 }}
                  placeholder="password"
                  returnKeyType="done"
                  secureTextEntry={!showPassword}
                  value={password.value}
                  onChangeText={password.setValue}
                />
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={togglePasswordVisibility}
                  style={{
                    position: 'absolute',
                    right: 16,
                    top: '50%',
                    transform: [{ translateY: -14 }],
                  }}>
                  <Image
                    source={icons.eye}
                    style={{
                      width: 24,
                      height: 24,
                      tintColor: '#A3A3A3',
                    }}
                  />
                </TouchableOpacity>
              </View>
              {password.error && (
                <Text className="ml-1 mt-1 text-sm text-red-400">{password.error}</Text>
              )}
            </View>
          </View>
          <TouchableOpacity
            className="mt-2 flex items-end"
            activeOpacity={0.9}
            onPress={handleForgotPassword}>
            <Text className="!text-[16px] !text-primary underline text-body">Forgot Password?</Text>
          </TouchableOpacity>

          {/* Button */}
          <View className="mt-10 flex flex-col gap-6">
            <Button title="Sign In" onPress={handleLogin} />

            <TouchableOpacity activeOpacity={0.9} onPress={handleRegister}>
              <Text className="text-center !text-[16px] text-body">
                Don{'\u2019'}t have account?{' '}
                <Text className="text-primary underline">Create new account.</Text>
              </Text>
            </TouchableOpacity>

            <Text className="text-center font-sf-medium text-[18px] text-black">Or</Text>
          </View>

          {/* Login Options */}
          <LoginOptions />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

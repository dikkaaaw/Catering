import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProp } from '@react-navigation/native';

import icons from '@/constants/icons';
import Header from '@/components/common/Header';
import Button from '@/components/common/Button';
import LoginOptions from '@/components/common/LoginOptions';
import {
  useEmailValidation,
  useFullNameValidation,
  usePasswordValidation,
} from '@/hooks/useValidation';

type RootStackParamList = {
  Login: undefined;
  SelectLocation: undefined;
  // Tabs: undefined;
};

const RegisterScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigation<NavigationProp<RootStackParamList>>();

  // Custom hook for validation
  const email = useEmailValidation();
  const fullName = useFullNameValidation();
  const password = usePasswordValidation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleBackPress = () => {
    navigate.goBack();
  };

  const handleLogin = () => {
    navigate.navigate('Login');
  };

  const handleRegister = () => {
    const isEmailValid = email.validate();
    const isFullNameValid = fullName.validate();
    const isPasswordValid = password.validate();

    if (isEmailValid && isFullNameValid && isPasswordValid) {
      navigate.navigate('SelectLocation');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView className="flex-1 bg-white">
        <Header title="Create Account" arrowIcon={true} onBackPress={handleBackPress} />

        {/* Main Content */}
        <View className="px-6 pt-10">
          <Text className="mb-2 text-h1">Create Account</Text>
          <View className="mb-8 max-w-80">
            <Text className="text-body">
              Enter your Name, Email and Password for sign up.{' '}
              <Text className="text-primary" onPress={handleLogin}>
                Already have account?
              </Text>
            </Text>
          </View>

          {/* Register Form */}
          <View className="mb-10 mt-2 flex flex-col gap-4">
            <View className="mb-1">
              <TextInput
                className={`rounded-lg border ${fullName.error ? 'border-red-400' : 'border-[#F3F2F2]'} bg-[#FBFBFB] px-5 pr-12 text-body`}
                style={{ height: 52 }}
                placeholder="Full Name"
                returnKeyType="next"
                autoCapitalize="words"
                value={fullName.value}
                onChangeText={fullName.setValue}
              />
              {fullName.error && (
                <Text className="ml-1 mt-1 text-sm text-red-400">{fullName.error}</Text>
              )}
            </View>
            <View className="mb-1">
              <TextInput
                className={`rounded-lg border ${email.error ? 'border-red-400' : 'border-[#F3F2F2]'} bg-[#FBFBFB] px-5 pr-12 text-body`}
                style={{ height: 52 }}
                placeholder="Email Address"
                inputMode="email"
                keyboardType="email-address"
                returnKeyType="next"
                autoCapitalize="none"
                autoComplete="email"
                value={email.value}
                onChangeText={email.setValue}
              />
              {email.error && <Text className="ml-1 mt-1 text-sm text-red-400">{email.error}</Text>}
            </View>
            <View className="mb-1">
              <View className="relative">
                <TextInput
                  className={`rounded-lg border ${password.error ? 'border-red-400' : 'border-[#F3F2F2]'} bg-[#FBFBFB] px-5 pr-12 text-body`}
                  style={{ height: 52 }}
                  placeholder="Password"
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

          <Button title="Sign Up" onPress={handleRegister} />

          <Text className="mt-8 max-w-72 self-center text-center text-body">
            By Signing up you agree to our Terms Conditions & Privacy Policy.
          </Text>
          <Text className="mt-6 text-center font-sf-regular text-[18px] text-black">Or</Text>

          <LoginOptions />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;

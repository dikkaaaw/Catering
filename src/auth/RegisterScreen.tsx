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

type RootStackParamList = {
  Login: undefined;
  Tabs: undefined;
};

const RegisterScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigation<NavigationProp<RootStackParamList>>();

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
    let hasError = false;

    setFullNameError('');
    setEmailError('');
    setPasswordError('');

    // Validate Full Name
    if (!fullName.trim()) {
      setFullNameError('Full name is required');
      hasError = true;
    } else if (fullName.trim().length < 2) {
      setFullNameError('Full name must be at least 2 characters');
      hasError = true;
    }

    // Validate Email
    if (!email.trim()) {
      setEmailError('Email is required');
      hasError = true;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError('Please enter a valid email address');
        hasError = true;
      }
    }

    // Validate Password
    if (!password.trim()) {
      setPasswordError('Password is required');
      hasError = true;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      hasError = true;
    }

    if (!hasError) {
      navigate.navigate('Tabs');
    }
  };

  const handleFullNameChange = (text: string) => {
    setFullName(text);
    if (fullNameError) {
      setFullNameError('');
    }
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    if (emailError) {
      setEmailError('');
    }
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    if (passwordError) {
      setPasswordError('');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView className="flex-1 bg-white">
        <Header title="Create Account" arrowIcon={true} onBackPress={handleBackPress} />

        {/* Main Content */}
        <View className="px-6 pt-10">
          <Text className="mb-2 text-h1">Create Account</Text>
          <TouchableOpacity activeOpacity={0.8} onPress={handleLogin}>
            <Text className="mb-8 max-w-80 text-body">
              Enter your Name, Email and Password for sign up.
              <Text className="text-primary"> Already have account?</Text>
            </Text>
          </TouchableOpacity>

          {/* Register Form */}
          <View className="mb-10 mt-2 flex flex-col gap-4">
            <View className="mb-1">
              <TextInput
                className={`rounded-lg border ${fullNameError ? 'border-red-400' : 'border-[#F3F2F2]'} bg-[#FBFBFB] px-5 pr-12 text-body`}
                style={{ height: 52 }}
                placeholder="Full Name"
                returnKeyType="next"
                autoCapitalize="words"
                value={fullName}
                onChangeText={handleFullNameChange}
              />
              {fullNameError && (
                <Text className="ml-1 mt-1 text-sm text-red-400">{fullNameError}</Text>
              )}
            </View>
            <View className="mb-1">
              <View className="relative">
                <TextInput
                  className={`rounded-lg border ${emailError ? 'border-red-400' : 'border-[#F3F2F2]'} bg-[#FBFBFB] px-5 pr-12 text-body`}
                  style={{ height: 52 }}
                  placeholder="Email Address"
                  inputMode="email"
                  keyboardType="email-address"
                  returnKeyType="next"
                  autoCapitalize="none"
                  autoComplete="email"
                  value={email}
                  onChangeText={handleEmailChange}
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
                      source={!emailError ? icons.check : icons.phone}
                      style={{
                        width: 22,
                        height: 22,
                        tintColor: !emailError ? '#22C55E' : '#F87171',
                      }}
                    />
                  </View>
                )}
              </View>
              {emailError && <Text className="ml-1 mt-1 text-sm text-red-400">{emailError}</Text>}
            </View>
            <View className="mb-1">
              <View className="relative">
                <TextInput
                  className={`rounded-lg border ${passwordError ? 'border-red-400' : 'border-[#F3F2F2]'} bg-[#FBFBFB] px-5 pr-12 text-body`}
                  style={{ height: 52 }}
                  placeholder="Password"
                  returnKeyType="done"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={handlePasswordChange}
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
              {passwordError && (
                <Text className="ml-1 mt-1 text-sm text-red-400">{passwordError}</Text>
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

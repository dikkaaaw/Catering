import { useState } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Header from '@/components/common/Header';
import Button from '@/components/common/Button';

type RootStackParamList = {
  ResetPassword: { email: string };
};

const EnterEmailScreen = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handlePress = () => {
    if (!email.trim()) {
      setEmailError('Email cannot be empty');
      return;
    }

    // Validasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setEmailError('');
    navigation.navigate('ResetPassword', { email: email });
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    if (emailError) {
      setEmailError('');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView className="flex-1 bg-white">
        <Header title="Forgot Password" arrowIcon={true} onBackPress={handleBackPress} />

        {/* Main Content */}
        <View className="px-6 pt-10">
          <Text className="mb-2 text-h1">Forgot password</Text>
          <Text className="mb-8 max-w-72 text-body">
            Enter your email address and we will send you a reset instructions.
          </Text>

          {/* Input Section */}
          <View className="mb-10 flex flex-col">
            <Text className="font-sf-medium text-[14px] uppercase tracking-widest text-secondary">
              Email Address
            </Text>
            <TextInput
              placeholder="example@gmail.com"
              returnKeyType="next"
              autoCapitalize="none"
              inputMode="email"
              keyboardType="email-address"
              value={email}
              onChangeText={handleEmailChange}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: emailError ? '#FF0000' : '#979797',
                paddingVertical: 14,
                fontSize: 16,
              }}
            />
            {emailError && <Text className="mt-2 text-sm text-red-500">{emailError}</Text>}
          </View>

          <Button title="Reset Password" onPress={handlePress} />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default EnterEmailScreen;

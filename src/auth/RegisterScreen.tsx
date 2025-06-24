import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '@/components/common/Header';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const navigate = useNavigation();

  const handleBack = () => {
    navigate.goBack();
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header title="Create Account" arrowIcon={true} onBackPress={handleBack} />

      {/* Main Content */}
    </SafeAreaView>
  );
};

export default RegisterScreen;

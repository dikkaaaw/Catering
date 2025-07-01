import { View, Text, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NavigationProp, RouteProp } from '@react-navigation/native';

import Header from '@/components/common/Header';
import Button from '@/components/common/Button';

type RootStackParamList = {
  ResetPassword: { email: string };
  Login: undefined;
};

type ResetPasswordRouteProp = RouteProp<RootStackParamList, 'ResetPassword'>;

const ResetPasswordScreen = () => {
  const route = useRoute<ResetPasswordRouteProp>();
  const navigate = useNavigation<NavigationProp<RootStackParamList>>();
  const { email } = route.params;

  const handleBackPress = () => {
    navigate.goBack();
  };

  const handlePress = () => {
    Alert.alert('Email Sent', `A reset password email has been sent to ${email}.`, [
      {
        text: 'OK',
        onPress: () => navigate.navigate('Login'),
      },
    ]);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header title="Forgot Password" arrowIcon={true} onBackPress={handleBackPress} />

      {/* Main Content */}
      <View className="px-6 pt-10">
        <Text className="mb-2 text-h1">Reset email sent</Text>
        <Text className="mb-8 max-w-80 text-body">
          We have sent a instructions email to {email}.{' '}
          <Text className="text-primary">Having Problem?</Text>
        </Text>

        <Button title="Send Again" onPress={handlePress} />
      </View>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;

import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';

import Header from '@/components/common/Header';
import Button from '@/components/common/Button';

type RootStackParamList = {
  ResetPassword: { email: string };
};

type ResetPasswordRouteProp = RouteProp<RootStackParamList, 'ResetPassword'>;

const ResetPasswordScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<ResetPasswordRouteProp>();
  const { email } = route.params;

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handlePress = () => {
    // Logika untuk mengirim ulang email reset
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

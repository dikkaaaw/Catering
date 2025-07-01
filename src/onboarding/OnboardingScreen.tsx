import { useEffect, useState, useRef } from 'react';
import { Image, Text, View, FlatList, Dimensions, ViewToken } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import onboardingData from './onboardingData';
import Button from '@/components/common/Button';

const { width } = Dimensions.get('window');

type RootStackParamList = {
  Login: undefined;
};

type ViewableItemsChanged = {
  viewableItems: ViewToken[];
  changed: ViewToken[];
};

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);
  const flatListRef = useRef<FlatList>(null);
  const navigate = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    AsyncStorage.getItem('hasSeenOnboarding').then((value) => {
      if (value === 'true') {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  const handleViewableItemsChanged = ({ viewableItems }: ViewableItemsChanged) => {
    if (viewableItems[0]) {
      setCurrentIndex(viewableItems[0].index ?? 0);
    }
  };

  const handleNext = async () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      await AsyncStorage.setItem('hasSeenOnboarding', 'true');
      navigate.navigate('Login');
    }
  };

  const renderItem = ({ item }: { item: (typeof onboardingData)[0] }) => (
    <View style={{ width }} className="items-center px-8">
      <Image
        source={item.image}
        style={{ width: 299, height: 299 }}
        className="mb-10"
        resizeMode="contain"
      />

      <View className="flex flex-col gap-4">
        <Text className="text-center text-headline">{item.title}</Text>
        <Text className="max-w-80 text-center text-body">{item.description}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-between py-36">
        <View className="flex-1">
          <FlatList
            horizontal
            pagingEnabled
            ref={flatListRef}
            data={onboardingData}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            onViewableItemsChanged={handleViewableItemsChanged}
            viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
          />
        </View>

        <View className="gap-12 px-10">
          <View className="flex-row justify-center gap-2">
            {onboardingData.map((_, index) => (
              <View
                key={index}
                className={`h-1 w-2 rounded-md ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-200'
                }`}
              />
            ))}
          </View>

          <Button title="Get Started" onPress={handleNext} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

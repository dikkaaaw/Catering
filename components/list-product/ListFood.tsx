import React from 'react';
import { View, ScrollView } from 'react-native';

import SectionHeader from '@/components/common/SectionHeader';
import FoodCard from './FoodCard';

interface FoodItem {
  id: string;
  image: any;
  title: string;
  location: string;
  rating: number;
  deliveryTime: string;
  deliveryInfo: string;
}

interface ListFoodProps {
  title: string;
  foodItems: FoodItem[];
  onPressAll?: () => void;
  onPressFoodCard?: (item: FoodItem) => void;
  showSeeAll?: boolean;
  containerStyle?: string;
}

const ListFood: React.FC<ListFoodProps> = ({
  title,
  foodItems,
  onPressAll,
  onPressFoodCard,
  showSeeAll = true,
  containerStyle = 'mt-4 px-2',
}) => {
  const handleFoodCardPress = (item: FoodItem) => {
    onPressFoodCard?.(item);
  };

  return (
    <View className={`flex flex-col gap-2 ${containerStyle}`}>
      {/* Section Header */}
      <SectionHeader title={title} showSeeAll={showSeeAll} onPressSeeAll={onPressAll} />

      {/* Horizontal Food List */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 16 }}>
        {foodItems.map((item) => (
          <FoodCard
            key={item.id}
            image={item.image}
            title={item.title}
            location={item.location}
            rating={item.rating}
            deliveryTime={item.deliveryTime}
            deliveryInfo={item.deliveryInfo}
            onPress={() => handleFoodCardPress(item)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ListFood;

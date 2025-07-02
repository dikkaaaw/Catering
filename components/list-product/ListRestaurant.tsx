import React from 'react';
import { View } from 'react-native';

import SectionHeader from '@/components/common/SectionHeader';
import RestaurantCard from './RestaurantCard';

interface RestaurantItem {
  id: string;
  image: any;
  title: string;
  description: string;
  rating: number;
  deliveryTime: string;
  deliveryInfo: string;
}

interface ListRestaurantProps {
  title: string;
  restaurantItems: RestaurantItem[];
  onPressAll?: () => void;
  onPressRestaurantCard?: (item: RestaurantItem) => void;
  showSeeAll?: boolean;
  containerStyle?: string;
}

const ListRestaurant: React.FC<ListRestaurantProps> = ({
  title,
  restaurantItems,
  onPressAll,
  onPressRestaurantCard,
  showSeeAll = true,
  containerStyle = 'mt-4',
}) => {
  const handleRestaurantCardPress = (item: RestaurantItem) => {
    onPressRestaurantCard?.(item);
  };

  return (
    <View className={`flex flex-col gap-8 ${containerStyle}`}>
      {/* Section Header */}
      <SectionHeader title={title} showSeeAll={showSeeAll} onPressSeeAll={onPressAll} />

      {/* Vertical Food List */}
      {restaurantItems.map((item) => (
        <RestaurantCard
          key={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
          rating={item.rating}
          deliveryTime={item.deliveryTime}
          deliveryInfo={item.deliveryInfo}
          onPress={() => handleRestaurantCardPress(item)}
        />
      ))}
    </View>
  );
};

export default ListRestaurant;

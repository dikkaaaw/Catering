import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import icons from '@/constants/icons';

interface FoodCardProps {
  image: any;
  title: string;
  location: string;
  rating: number;
  deliveryTime: string;
  deliveryInfo: string;
  onPress?: () => void;
  width?: number;
  height?: number;
}

const FoodCard: React.FC<FoodCardProps> = ({
  image,
  title,
  location,
  rating,
  deliveryTime,
  deliveryInfo,
  onPress,
  width = 200,
  height = 160,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={{ width }} className="mr-4">
      {/* Food Image */}
      <Image
        source={image}
        style={{
          width,
          height,
        }}
        className="rounded-xl"
        resizeMode="cover"
      />

      {/* Food Info */}
      <View className="flex flex-col px-2 py-2">
        <Text className="font-sf-medium !text-black text-body" numberOfLines={1}>
          {title}
        </Text>
        <Text className="!text-[14px] text-secondary text-body" numberOfLines={1}>
          {location}
        </Text>
      </View>

      {/* Rating and Delivery Info */}
      <View className="flex w-full flex-row items-center justify-between px-2">
        <View className="flex flex-row items-center gap-1 rounded-md bg-primary px-2 py-0.5">
          <Image
            source={icons.star}
            style={{
              width: 16,
              height: 16,
              tintColor: '#ffffff',
            }}
          />
          <Text className="font-sf-medium !text-[12px] !text-white">{rating.toFixed(1)}</Text>
        </View>
        <Text className="!text-[14px] !text-black text-body" numberOfLines={1}>
          {deliveryTime} - {deliveryInfo}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;

import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

import icons from '@/constants/icons';
import images from '@/constants/images';
import ImageCarousel from '../ImageCarousel';

interface FoodCardProps {
  image: any;
  title: string;
  description: string;
  rating: number;
  deliveryTime: string;
  deliveryInfo: string;
  onPress?: () => void;
  width?: number;
  height?: number;
}

const { width: screenWidth } = Dimensions.get('window');

const RestaurantCard: React.FC<FoodCardProps> = ({
  title,
  description,
  rating,
  deliveryTime,
  deliveryInfo,
  onPress,
}) => {
  const carouselImages = [images.food1, images.food2, images.food3];
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      {/* Food Image */}
      <ImageCarousel
        gap={20}
        height={256}
        showDots={true}
        autoPlay={true}
        autoPlayInterval={2000}
        images={carouselImages}
        width={screenWidth - 48}
      />

      {/* Food Info */}
      <View className="flex flex-col px-2 py-2">
        <Text className="!text-[20px] !text-black text-headline" numberOfLines={1}>
          {title}
        </Text>
        <Text className="!text-[16px] text-secondary text-body" numberOfLines={1}>
          {description}
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
        <Text className="!text-[14px] !text-black text-body">200+ Ratings</Text>
        <View className="flex flex-row items-center gap-1">
          <Image
            source={icons.clock}
            style={{
              width: 16,
              height: 16,
              tintColor: '#D8D8D8',
            }}
          />
          <Text className="!text-[14px] !text-black text-body" numberOfLines={1}>
            {deliveryTime}
          </Text>
        </View>
        <View className="flex flex-row items-center gap-1">
          <Image
            source={icons.delivery}
            style={{
              width: 16,
              height: 16,
              tintColor: '#D8D8D8',
            }}
          />
          <Text className="!text-[14px] !text-black text-body" numberOfLines={1}>
            {deliveryInfo}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

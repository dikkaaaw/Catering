import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface SectionHeaderProps {
  title: string;
  showSeeAll?: boolean;
  onPressSeeAll?: () => void;
  seeAllText?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  showSeeAll = true,
  onPressSeeAll,
  seeAllText = 'See All',
}) => {
  return (
    <View className="mb-3 flex flex-row items-center justify-between">
      <Text className="font-sf-bold !text-[24px] text-headline">{title}</Text>
      {showSeeAll && (
        <TouchableOpacity activeOpacity={0.8} onPress={onPressSeeAll}>
          <Text className="font-sf-medium !text-primary text-body">{seeAllText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SectionHeader;

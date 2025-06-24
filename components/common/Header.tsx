import icons from '@/constants/icons';
import { View, Text, TouchableOpacity, Image } from 'react-native';

interface HeaderProps {
  title?: string;
  arrowIcon?: boolean;
  onBackPress?: () => void;
}

const Header = ({ title, arrowIcon, onBackPress }: HeaderProps) => {
  return (
    <View className="mt-2 flex flex-row items-center justify-between px-6">
      {arrowIcon ? (
        <TouchableOpacity onPress={onBackPress}>
          <Image
            style={{
              width: 24,
              height: 24,
            }}
            source={icons.back}
          />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 24 }} />
      )}
      <View className="flex-1 items-center">
        <Text className="font-sf-bold text-center text-[18px] tracking-wider text-black">
          {title}
        </Text>
      </View>
      <View style={{ width: 24 }} />
    </View>
  );
};

export default Header;

import icons from '@/constants/icons';
import { View, Text, TouchableOpacity, Image } from 'react-native';

interface HeaderProps {
  title?: string;
  arrowIcon?: boolean;
  closeIcon?: boolean;
  onBackPress?: () => void;
}

const Header = ({ title, arrowIcon, closeIcon, onBackPress }: HeaderProps) => {
  const renderLeftIcon = () => {
    if (arrowIcon) {
      return (
        <TouchableOpacity onPress={onBackPress}>
          <Image style={{ width: 24, height: 24 }} source={icons.back} />
        </TouchableOpacity>
      );
    }
    if (closeIcon) {
      return (
        <TouchableOpacity onPress={onBackPress}>
          <Image style={{ width: 16, height: 16 }} source={icons.close} />
        </TouchableOpacity>
      );
    }
    return <View style={{ width: 24 }} />;
  };

  return (
    <View className="mt-2 flex flex-row items-center justify-between px-6">
      {renderLeftIcon()}
      <View className="flex-1 items-center">
        <Text className="text-center font-sf-bold text-[18px] tracking-wider text-black">
          {title}
        </Text>
      </View>
      <View style={{ width: 24 }} />
    </View>
  );
};

export default Header;

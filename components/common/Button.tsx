import { Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
  title?: string;
  onPress?: () => void;
}

const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      className="w-full rounded-[8px] bg-primary py-5"
      onPress={onPress}>
      <Text className="font-sf text-center text-[14px] font-semibold uppercase text-white">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

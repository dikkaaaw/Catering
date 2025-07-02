import React, { useState, useRef } from 'react';
import { View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

interface ImageCarouselProps {
  images: any[];
  height?: number;
  width?: number;
  gap?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  borderRadius?: number;
  containerStyle?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  height = 256,
  width = screenWidth - 48,
  gap = 16,
  autoPlay = false,
  autoPlayInterval = 3000,
  showDots = true,
  borderRadius = 16,
  containerStyle = '',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const itemWidth = width + gap;

  React.useEffect(() => {
    if (autoPlay && images.length > 1) {
      const interval = setInterval(() => {
        const nextIndex = (activeIndex + 1) % images.length;
        scrollViewRef.current?.scrollTo({
          x: nextIndex * itemWidth,
          animated: true,
        });
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }
  }, [activeIndex, autoPlay, autoPlayInterval, images.length, itemWidth]);

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / itemWidth);
    setActiveIndex(index);
  };

  const goToSlide = (index: number) => {
    scrollViewRef.current?.scrollTo({
      x: index * itemWidth,
      animated: true,
    });
    setActiveIndex(index);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <View className={`relative ${containerStyle}`}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        scrollEventThrottle={16}
        className="rounded-2xl"
        style={{ borderRadius }}
        snapToInterval={itemWidth}
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: gap / 2 }}>
        {images.map((image, index) => (
          <View
            key={index}
            style={{
              width,
              marginRight: index === images.length - 1 ? 0 : gap,
            }}>
            <Image
              source={image}
              style={{
                width,
                height: height,
                borderRadius,
              }}
              resizeMode="cover"
            />
          </View>
        ))}
      </ScrollView>

      {showDots && images.length > 1 && (
        <View className="absolute bottom-6 right-10 flex-row justify-center gap-2">
          {images.map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => goToSlide(index)}
              className={`h-1.5 w-2.5 rounded-full ${
                index === activeIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default ImageCarousel;

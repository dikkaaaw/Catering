import { Dimensions, Image, ScrollView, View } from 'react-native';

import images from '@/constants/images';
import ImageCarousel from '@/components/ImageCarousel';
import ListFood from '@/components/list-product/ListFood';
import ListRestaurant from '@/components/list-product/ListRestaurant';

import { featuredPartners, bestDeals, FoodItem } from '@/data/foodData';
import { allRestaurants, RestaurantItem } from '@/data/restaurantData';

const { width: screenWidth } = Dimensions.get('window');

const HomeScreen = () => {
  const carouselImages = [images.food1, images.food2, images.food3];

  const handleSeeAllFeatured = () => {
    console.log('See all featured partners');
  };

  const handleSeAllBestDeals = () => {
    console.log('See all best deals');
  };

  const handleFoodCardPress = (item: FoodItem) => {
    console.log('Food card pressed:', item.title);
  };

  const handleRestaurantCardPress = (item: RestaurantItem) => {
    console.log('Restaurant card pressed:', item.title);
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} className="-mt-6 px-4 pt-12">
        {/* Hero Carousel */}
        <ImageCarousel
          images={carouselImages}
          height={256}
          width={screenWidth - 48}
          gap={20}
          autoPlay={true}
          autoPlayInterval={4000}
          showDots={true}
        />

        {/* Featured Partners */}
        <ListFood
          title="Featured Partners"
          foodItems={featuredPartners}
          onPressAll={handleSeeAllFeatured}
          onPressFoodCard={handleFoodCardPress}
        />

        {/* Promo */}
        <View className="my-10">
          <Image className="h-[170] w-full rounded-xl" source={images.promo} />
        </View>

        {/* Best Deals */}
        <ListFood
          title="Best Picks Restaurants"
          foodItems={bestDeals}
          onPressAll={handleSeAllBestDeals}
          onPressFoodCard={handleFoodCardPress}
          containerStyle="-mt-4"
        />

        <ListRestaurant
          title="All Restaurants"
          restaurantItems={allRestaurants}
          onPressAll={handleSeeAllFeatured}
          onPressRestaurantCard={handleRestaurantCardPress}
          containerStyle="pb-4 mt-4"
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

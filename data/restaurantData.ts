import images from '@/constants/images';

export interface RestaurantItem {
  id: string;
  image: any;
  title: string;
  description: string;
  rating: number;
  deliveryTime: string;
  deliveryInfo: string;
}

export const allRestaurants: RestaurantItem[] = [
  {
    id: '7',
    image: images.food1,
    title: 'Taco Bell',
    description: 'Mexican - Fast Food - Spicy Delights',
    rating: 4.1,
    deliveryTime: '12 Min',
    deliveryInfo: 'Free Delivery',
  },
  {
    id: '8',
    image: images.food2,
    title: 'KFC',
    description: 'Fried Chicken - American - Comfort Food',
    rating: 4.4,
    deliveryTime: '15 Min',
    deliveryInfo: 'Free Delivery',
  },
  {
    id: '9',
    image: images.food3,
    title: 'Subway',
    description: 'Sandwiches - Fresh Ingredients - Healthy Options',
    rating: 4.0,
    deliveryTime: '10 Min',
    deliveryInfo: '$1.50 Delivery',
  },
];

import images from '@/constants/images';

export interface FoodItem {
  id: string;
  image: any;
  title: string;
  location: string;
  rating: number;
  deliveryTime: string;
  deliveryInfo: string;
}

export const featuredPartners: FoodItem[] = [
  {
    id: '1',
    image: images.food1,
    title: 'Daylight Coffee',
    location: 'Colorado, San Francisco',
    rating: 4.5,
    deliveryTime: '25 Min',
    deliveryInfo: 'Free Delivery',
  },
  {
    id: '2',
    image: images.food2,
    title: 'Mario Italiano',
    location: 'Colorado, San Francisco',
    rating: 4.8,
    deliveryTime: '30 Min',
    deliveryInfo: 'Free Delivery',
  },
  {
    id: '3',
    image: images.food3,
    title: "McDonald's",
    location: 'Colorado, San Francisco',
    rating: 4.2,
    deliveryTime: '15 Min',
    deliveryInfo: '$2.99 Delivery',
  },
];

export const bestDeals: FoodItem[] = [
  {
    id: '4',
    image: images.food1,
    title: 'Pizza Palace',
    location: 'Downtown, San Francisco',
    rating: 4.6,
    deliveryTime: '20 Min',
    deliveryInfo: 'Free Delivery',
  },
  {
    id: '5',
    image: images.food2,
    title: 'Burger King',
    location: 'Mission Bay, San Francisco',
    rating: 4.3,
    deliveryTime: '18 Min',
    deliveryInfo: 'Free Delivery',
  },
  {
    id: '6',
    image: images.food3,
    title: 'Sushi Express',
    location: 'Chinatown, San Francisco',
    rating: 4.7,
    deliveryTime: '35 Min',
    deliveryInfo: '$1.99 Delivery',
  },
];

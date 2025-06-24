import { scale as s, verticalScale as vS, moderateScale as mS } from 'react-native-size-matters';

export const scale = (size: number): number => {
  return s(size);
};

export const verticalScale = (size: number): number => {
  return vS(size);
};

export const moderateScale = (size: number, factor = 0.5): number => {
  return mS(size, factor);
};
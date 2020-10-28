import * as React from 'react';
import { TouchableOpacity } from 'react-native';

export const Touchable: React.FC<React.ComponentProps<
  typeof TouchableOpacity
>> = (props: React.ComponentProps<typeof TouchableOpacity>) => {
  return <TouchableOpacity {...props} />;
};

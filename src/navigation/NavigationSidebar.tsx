import React from 'react';
import {
  DrawerItemList,
} from '@react-navigation/drawer';
import { useWindowDimensions, View } from 'react-native';

function NavigationSidebar(props: any) {
  const dimensions = useWindowDimensions();
  return (
    <View
      style={{ flex: 1, height: '100%' }}
    >
      <View style={{ flex: 1, height: '100%', justifyContent: 'space-between' }}>
        <View style={dimensions.width >= 768 && { flexDirection: 'column', justifyContent: 'flex-start' }}>
          <DrawerItemList {...props} />
        </View>
      </View>
    </View>
  );
}

export default NavigationSidebar;

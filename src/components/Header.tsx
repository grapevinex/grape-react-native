import React, { FC } from 'react';
import {
  Platform,
  useWindowDimensions,
  View,
} from 'react-native';
import { MainHeaderStyles } from '../styles/AppStyles';
import { Text } from './Themed'
import Fonts from '../constants/Fonts';
import RedDot from './icons/RedDot';

type MainHeaderProps = {
  screenTitle: string;
  backButton?: boolean;
};

const MainHeader: FC<MainHeaderProps> = (props: MainHeaderProps) => {
  const dimensions = useWindowDimensions();

  const viewStyle = [
    MainHeaderStyles.headerContainer,
    dimensions.width > 768 && MainHeaderStyles.headerContainerDesktop,
    Platform.OS === 'android' && { paddingTop: 52, width: '100%' },
  ];

  const textStyle = [
    dimensions.width > 768 ? Fonts.h1 : Fonts.mobile.h1,

  ]

  return (
    <View style={viewStyle}>
      <View style={{justifyContent: 'flex-start', flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <RedDot width={12} height={12} color={undefined} />
        <Text
          style={[textStyle, {paddingTop: 8, paddingLeft: 8}]}
        >
          {props.screenTitle}
        </Text>
      </View>
    </View>
  );
};

MainHeader.defaultProps = {
  backButton: false,
};

export default MainHeader;

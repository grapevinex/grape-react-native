/* eslint-disable max-len */
import Svg, { Path } from 'react-native-svg';
import React from 'react';
import type { IIconProps } from '../../types/Components/Icons';

const RedDot: React.FC<IIconProps> = ({ width, height, color }) => (
  <Svg
    width={width}
    height={height}
    id="Group_2"
    data-name="Group 2"
    viewBox="0 0 100 100"
  >
  <Path id="Path_1" data-name="Path 1" d="M100,50A50,50,0,1,1,50,0a50,50,0,0,1,50,50" fill="#e4002e"/>
</Svg>

);
export default RedDot;

import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CheckBoxIcon = () => {
  return (
    <Svg width={'100%'} height={'100%'} viewBox="0 0 19 19" fill="none">
      <Path
        d="M.572 4.334a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4h-10a4 4 0 01-4-4v-10z"
        fill="#6C63FF"
      />
      <Path
        d="M5.572 9.164l2.83 2.83 5.67-5.66"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CheckBoxIcon;

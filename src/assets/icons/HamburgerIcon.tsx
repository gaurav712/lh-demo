import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const HamburgerIcon = () => {
  return (
    <Svg width={'100%'} height={'100%'} viewBox="0 0 21 21" fill="none">
      <Path
        d="M7 5.25h11.375M7 10.5h11.375M7 15.75h11.375M2.625 5.25h.008M2.625 10.5h.008M2.625 15.75h.008"
        stroke="#fff"
        strokeOpacity={0.5}
        strokeWidth={1.3125}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default HamburgerIcon;

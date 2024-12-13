import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const FilterIcon = () => {
  return (
    <Svg width={'100%'} height={'100%'} viewBox="0 0 16 17" fill="none">
      <Path
        d="M14.67 4.833h-4M3.998 4.833H1.332M6.666 7.164a2.333 2.333 0 100-4.667 2.333 2.333 0 000 4.667zM14.669 12.167h-2.667M5.332 12.167h-4M9.337 14.502a2.333 2.333 0 100-4.667 2.333 2.333 0 000 4.667z"
        stroke="#fff"
        strokeOpacity={0.5}
        strokeWidth={1.3}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default FilterIcon;

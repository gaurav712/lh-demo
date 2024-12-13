import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CheckBoxIconUnchecked = () => {
  return (
    <Svg width={'100%'} height={'100%'} viewBox="0 0 19 19" fill="none">
      <Path
        d="M1.322 4.111a3.25 3.25 0 013.25-3.25h10a3.25 3.25 0 013.25 3.25v10a3.25 3.25 0 01-3.25 3.25h-10a3.25 3.25 0 01-3.25-3.25v-10z"
        stroke="#fff"
        strokeOpacity={0.2}
        strokeWidth={1.5}
      />
    </Svg>
  );
};

export default CheckBoxIconUnchecked;

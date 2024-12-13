import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const ExploreIcon = ({tint}: {tint: string}) => {
  return (
    <Svg width={'100%'} height={'100%'} viewBox="0 0 21 20" fill="none">
      <Path
        d="M9.4 17a8 8 0 100-16 8 8 0 000 16zM19.4 19l-4.3-4.3"
        stroke={tint}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ExploreIcon;

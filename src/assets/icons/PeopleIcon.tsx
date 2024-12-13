import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const PeopleIcon = ({tint}: {tint: string}) => {
  return (
    <Svg width={'100%'} height={'100%'} viewBox="0 0 22 20" fill="none">
      <Path
        d="M16.8 19a8 8 0 00-16 0"
        stroke={tint}
        strokeOpacity={0.4}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.8 19a8 8 0 00-16 0"
        stroke={tint}
        strokeOpacity={0.5}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.8 11a5 5 0 100-10 5 5 0 000 10z"
        stroke={tint}
        strokeOpacity={0.4}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.8 11a5 5 0 100-10 5 5 0 000 10z"
        stroke={tint}
        strokeOpacity={0.5}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.8 18c0-3.37-2-6.5-4-8a5 5 0 00-.45-8.3"
        stroke={tint}
        strokeOpacity={0.4}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.8 18c0-3.37-2-6.5-4-8a5 5 0 00-.45-8.3"
        stroke={tint}
        strokeOpacity={0.5}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default PeopleIcon;

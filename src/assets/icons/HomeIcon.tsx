import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const HomeIcon = ({tint}: {tint: string}) => {
  return (
    <Svg width={'100%'} height={'100%'} viewBox="0 0 21 21" fill="none">
      <Path
        d="M1.786 8.158A2 2 0 001.6 9v9a2 2 0 002 2h4v-8.5h6V20h4a2 2 0 002-2V9a1.999 1.999 0 00-.709-1.528l-7-5.999a2 2 0 00-2.582 0l-7 5.999a2 2 0 00-.523.686z"
        stroke={tint}
        strokeOpacity={0.4}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.786 8.158A2 2 0 001.6 9v9a2 2 0 002 2h4v-8.5h6V20h4a2 2 0 002-2V9a1.999 1.999 0 00-.709-1.528l-7-5.999a2 2 0 00-2.582 0l-7 5.999a2 2 0 00-.523.686z"
        stroke={tint}
        strokeOpacity={0.5}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default HomeIcon;

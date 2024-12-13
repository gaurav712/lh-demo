import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const PlansIcon = ({tint}: {tint: string}) => {
  return (
    <Svg width={'100%'} height={'100%'} viewBox="0 0 20 20" fill="none">
      <Path
        d="M1.2 5.4V1.6a.6.6 0 01.6-.6h5.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6H1.8a.6.6 0 01-.6-.6z"
        stroke={tint}
        strokeOpacity={0.4}
        strokeWidth={1.5}
      />
      <Path
        d="M1.2 5.4V1.6a.6.6 0 01.6-.6h5.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6H1.8a.6.6 0 01-.6-.6z"
        stroke={tint}
        strokeOpacity={0.5}
        strokeWidth={1.5}
      />
      <Path
        d="M12.2 18.4v-3.8a.6.6 0 01.6-.6h5.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-5.8a.6.6 0 01-.6-.6z"
        stroke={tint}
        strokeOpacity={0.4}
        strokeWidth={1.5}
      />
      <Path
        d="M12.2 18.4v-3.8a.6.6 0 01.6-.6h5.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-5.8a.6.6 0 01-.6-.6z"
        stroke={tint}
        strokeOpacity={0.5}
        strokeWidth={1.5}
      />
      <Path
        d="M12.2 10.4V1.6a.6.6 0 01.6-.6h5.8a.6.6 0 01.6.6v8.8a.6.6 0 01-.6.6h-5.8a.6.6 0 01-.6-.6z"
        stroke={tint}
        strokeOpacity={0.4}
        strokeWidth={1.5}
      />
      <Path
        d="M12.2 10.4V1.6a.6.6 0 01.6-.6h5.8a.6.6 0 01.6.6v8.8a.6.6 0 01-.6.6h-5.8a.6.6 0 01-.6-.6z"
        stroke={tint}
        strokeOpacity={0.5}
        strokeWidth={1.5}
      />
      <Path
        d="M1.2 18.4V9.6a.6.6 0 01.6-.6h5.8a.6.6 0 01.6.6v8.8a.6.6 0 01-.6.6H1.8a.6.6 0 01-.6-.6z"
        stroke={tint}
        strokeOpacity={0.4}
        strokeWidth={1.5}
      />
      <Path
        d="M1.2 18.4V9.6a.6.6 0 01.6-.6h5.8a.6.6 0 01.6.6v8.8a.6.6 0 01-.6.6H1.8a.6.6 0 01-.6-.6z"
        stroke={tint}
        strokeOpacity={0.5}
        strokeWidth={1.5}
      />
    </Svg>
  );
};

export default PlansIcon;

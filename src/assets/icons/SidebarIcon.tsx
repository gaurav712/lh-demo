import * as React from 'react';
import Svg, {
  G,
  Path,
  Circle,
  Defs,
  RadialGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';

const SidebarIcon = () => {
  return (
    <Svg width={'100%'} height={'100%'} viewBox="0 0 38 38" fill="none">
      <G clipPath="url(#clip0_1_1993)">
        <Path
          d="M0 10C0 4.477 4.477 0 10 0h18c5.523 0 10 4.477 10 10v18c0 5.523-4.477 10-10 10H10C4.477 38 0 33.523 0 28V10z"
          fill="#7F7F7F"
          fillOpacity={0.2}
        />
        <Path
          d="M0 10C0 4.477 4.477 0 10 0h18c5.523 0 10 4.477 10 10v18c0 5.523-4.477 10-10 10H10C4.477 38 0 33.523 0 28V10z"
          fill="#C2C2C2"
          fillOpacity={0.5}
        />
        <Circle cx={38} cy={38} r={38} fill="url(#paint0_radial_1_1993)" />
        <Circle cx={38} cy={38} r={38} fill="url(#paint1_radial_1_1993)" />
        <Path
          d="M24.629 13.125h-10.78c-.85 0-1.54.634-1.54 1.417v9.917c0 .782.69 1.416 1.54 1.416h10.78c.85 0 1.54-.634 1.54-1.416v-9.917c0-.783-.69-1.417-1.54-1.417zM19.24 13.125v12.75M16.652 20.191h-1.478M16.652 16.174h-1.478M16.652 18.183h-1.478"
          stroke="#fff"
          strokeWidth={1.1087}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <RadialGradient
          id="paint0_radial_1_1993"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 38 -38 0 38 38)">
          <Stop stopColor="#fff" stopOpacity={0.07} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint1_radial_1_1993"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 38 -38 0 38 38)">
          <Stop stopColor="#5E5E5E" stopOpacity={0.16} />
          <Stop offset={1} stopColor="#5E5E5E" stopOpacity={0} />
        </RadialGradient>
        <ClipPath id="clip0_1_1993">
          <Path
            d="M0 10C0 4.477 4.477 0 10 0h18c5.523 0 10 4.477 10 10v18c0 5.523-4.477 10-10 10H10C4.477 38 0 33.523 0 28V10z"
            fill="#fff"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default SidebarIcon;

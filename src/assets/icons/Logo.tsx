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

const Logo = () => {
  return (
    <Svg width={'100%'} height={'100%'} viewBox="0 0 38 38" fill="none">
      <G clipPath="url(#clip0_1_1986)">
        <Path
          d="M0 10.857C0 4.861 4.86 0 10.857 0h16.286C33.139 0 38 4.86 38 10.857v16.286C38 33.139 33.14 38 27.143 38H10.857C4.861 38 0 33.14 0 27.143V10.857z"
          fill="#7F7F7F"
          fillOpacity={0.2}
        />
        <Path
          d="M0 10.857C0 4.861 4.86 0 10.857 0h16.286C33.139 0 38 4.86 38 10.857v16.286C38 33.139 33.14 38 27.143 38H10.857C4.861 38 0 33.14 0 27.143V10.857z"
          fill="#C2C2C2"
          fillOpacity={0.5}
        />
        <Circle cx={38} cy={38} r={38} fill="url(#paint0_radial_1_1986)" />
        <Circle cx={38} cy={38} r={38} fill="url(#paint1_radial_1_1986)" />
        <Path
          d="M20.635 10.789c-.078-.47-.39-1.089-1.325-1.01-.935.077-1.09.696-1.168 1.165-.078.47.507 5.808.311 5.845-.195.036-.779-3.972-.857-4.364-.078-.392-.545-1.636-1.48-1.48-.935.155-.935.932-.935 1.48 0 .548.155 2.961.311 4.364.156 1.402.634 4.515 1.403 7.324.742 2.711 4.286 14.982 4.286 14.982l8.133-.813S24.811 27.022 25 24.815c.2-2.35 2.26-5.143 2.415-5.533.156-.39.233-1.247-.545-1.634-.779-.387-1.403.154-1.559.468-.155.313-.7 1.553-1.013 1.556-.311.002-.311-1.48-.311-2.182 0-.701 0-4.91-.156-5.455-.156-.545-.312-1.246-1.247-1.246s-1.402.857-1.402 1.246c0 .39.234 4.424 0 4.442-.235.017-.468-5.219-.546-5.688z"
          fill="#C2C2C2"
        />
        <Path
          d="M16.743 12.772c.081-.49.406-1.136 1.382-1.054.975.08 1.137.726 1.219 1.216.081.49-.65 6.035-.325 6.096.325.06.812-4.143.894-4.552.08-.408.569-1.706 1.544-1.544.975.163.975.973.975 1.544 0 .572-.162 3.089-.325 4.552-.163 1.463-.661 4.71-1.463 7.64-.774 2.827-4.47 12.425-4.47 12.425H7.6s4.787-9.392 4.592-11.694c-.209-2.45-2.357-5.364-2.52-5.77-.162-.407-.243-1.301.57-1.705.811-.404 1.385.218 1.625.488.239.27.731 1.62 1.056 1.623.325.002.325-1.544.325-2.276 0-.731 0-5.12.163-5.689.162-.569.325-1.3 1.3-1.3.975 0 1.463.697 1.463 1.3 0 .603-.392 4.633 0 4.633s.488-5.443.569-5.933z"
          fill="#fff"
        />
      </G>
      <Defs>
        <RadialGradient
          id="paint0_radial_1_1986"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 38 -38 0 38 38)">
          <Stop stopColor="#fff" stopOpacity={0.07} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint1_radial_1_1986"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 38 -38 0 38 38)">
          <Stop stopColor="#5E5E5E" stopOpacity={0.16} />
          <Stop offset={1} stopColor="#5E5E5E" stopOpacity={0} />
        </RadialGradient>
        <ClipPath id="clip0_1_1986">
          <Path
            d="M0 10.857C0 4.861 4.86 0 10.857 0h16.286C33.139 0 38 4.86 38 10.857v16.286C38 33.139 33.14 38 27.143 38H10.857C4.861 38 0 33.14 0 27.143V10.857z"
            fill="#fff"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Logo;

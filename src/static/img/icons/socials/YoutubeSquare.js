import * as React from "react";

const SvgYoutubeSquare = (props) => (
  <svg
    width={53}
    height={52}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      width={52.619}
      height={51.959}
      rx={16}
      fill="#20083B"
      fillOpacity={0.75}
    />
    <rect
      x={0.5}
      y={0.5}
      width={51.619}
      height={50.959}
      rx={15.5}
      stroke="#FFFCFC"
      strokeOpacity={0.5}
    />
    <g clipPath="url(#youtube-square_svg__a)">
      <path
        d="M33.642 21.872a2.14 2.14 0 0 0-1.505-1.514C30.81 20 25.495 20 25.495 20s-5.315 0-6.641.358a2.14 2.14 0 0 0-1.505 1.514c-.354 1.334-.354 4.12-.354 4.12s0 2.786.354 4.12a2.14 2.14 0 0 0 1.505 1.514c1.326.358 6.642.358 6.642.358s5.315 0 6.64-.358a2.14 2.14 0 0 0 1.506-1.514c.353-1.334.353-4.12.353-4.12s0-2.786-.353-4.12Z"
        fill="#FFFDFD"
      />
      <path d="M23.762 28.513v-5.051l4.443 2.526-4.443 2.525Z" fill="#372649" />
    </g>
    <defs>
      <clipPath id="youtube-square_svg__a">
        <path fill="#fff" transform="translate(17 20)" d="M0 0h17v11.975H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgYoutubeSquare;

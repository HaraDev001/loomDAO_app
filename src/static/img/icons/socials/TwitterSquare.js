import * as React from "react";

const TwitterSquare = (props) => (
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
    <g clipPath="url(#twitter-square_svg__a)">
      <path
        d="M18 31.53a9.292 9.292 0 0 0 5.034 1.475c6.097 0 9.535-5.148 9.332-9.763a6.74 6.74 0 0 0 1.64-1.697 6.715 6.715 0 0 1-1.886.52 3.302 3.302 0 0 0 1.443-1.818 6.586 6.586 0 0 1-2.083.798 3.284 3.284 0 0 0-5.59 2.995 9.36 9.36 0 0 1-6.776-3.438 3.288 3.288 0 0 0 1.013 4.381 3.287 3.287 0 0 1-1.487-.412c-.038 1.52 1.057 2.945 2.633 3.261a3.32 3.32 0 0 1-1.481.057 3.28 3.28 0 0 0 3.064 2.28 6.609 6.609 0 0 1-4.862 1.36H18Z"
        fill="#FFFDFD"
      />
    </g>
    <defs>
      <clipPath id="twitter-square_svg__a">
        <path fill="#fff" transform="translate(18 20)" d="M0 0h16v13.005H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default TwitterSquare;

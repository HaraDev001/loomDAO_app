import * as React from "react";

const SvgHlSwiperButtonPrev = (props) => (
  <svg
    width={46}
    height={46}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx={23}
      cy={23}
      r={22.5}
      transform="rotate(180 23 23)"
      stroke="#FFFCFC"
      strokeOpacity={0.5}
    />
    <path
      d="m23 31 1.455-1.455-5.506-5.506H31v-2.078H18.948l5.507-5.506L23 15l-8 8 8 8Z"
      fill="#FFFCFC"
      fillOpacity={0.5}
    />
  </svg>
);

export default SvgHlSwiperButtonPrev;

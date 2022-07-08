import * as React from "react";

const SvgLinkedinCircle = (props) => (
  <svg
    width={19}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={9.5} cy={9.5} r={9.5} fill="#372649" />
    <path
      d="M7.038 7.999H5.179v5.996h1.859V8ZM6.1 7.216c.608 0 1.098-.495 1.098-1.108C7.198 5.495 6.708 5 6.1 5 5.491 5 5 5.495 5 6.108c0 .613.49 1.108 1.1 1.108ZM10.005 10.85c0-.843.386-1.343 1.132-1.343.684 0 1.01.48 1.01 1.344V14h1.848v-3.8c0-1.608-.91-2.386-2.184-2.386-1.273 0-1.806.99-1.806.99v-.806H8.222v5.997h1.783v-3.15.006Z"
      fill="#FFFDFD"
    />
  </svg>
);

export default SvgLinkedinCircle;

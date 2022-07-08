import * as React from "react";

const SvgHlCheck = (props) => (
  <svg
    width={17}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={8.5} cy={8.5} r={8.5} fill="#BC1064" />
    <circle cx={8.5} cy={8.5} r={8} stroke="#FFFCFC" strokeOpacity={0.5} />
    <path
      d="M7.688 12.125 4 8.437l.875-.874 2.813 2.75L12.75 5.25l.875.875-5.938 6Z"
      fill="#FFFDFD"
    />
  </svg>
);

export default SvgHlCheck;

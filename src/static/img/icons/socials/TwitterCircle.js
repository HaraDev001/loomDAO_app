import * as React from "react";

const TwitterCircle = (props) => (
  <svg
    width={18}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <ellipse cx={9} cy={9.5} rx={9} ry={9.5} fill="#372649" />
    <g clipPath="url(#twitter-circle_svg__a)">
      <path
        d="M4 13.092A5.878 5.878 0 0 0 7.146 14c3.807 0 5.962-3.165 5.833-6.01.4-.286.75-.64 1.026-1.043a4.18 4.18 0 0 1-1.179.315c.425-.247.75-.645.903-1.116a4.116 4.116 0 0 1-1.302.49A2.061 2.061 0 0 0 10.928 6C9.602 6 8.63 7.218 8.931 8.48A5.848 5.848 0 0 1 4.695 6.37a2.008 2.008 0 0 0 .636 2.699 2.099 2.099 0 0 1-.932-.252c-.02.936.661 1.81 1.647 2.004-.29.078-.606.098-.927.034.262.801 1.021 1.389 1.918 1.403A4.173 4.173 0 0 1 4 13.092Z"
        fill="#FFFDFD"
      />
    </g>
    <defs>
      <clipPath id="twitter-circle_svg__a">
        <path fill="#fff" transform="translate(4 6)" d="M0 0h10v8H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default TwitterCircle;

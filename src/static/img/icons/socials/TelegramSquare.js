import * as React from "react";

const SvgTelegramSquare = (props) => (
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
    <path
      d="m32.99 22.178-2.121 10.01c-.16.706-.578.88-1.172.55l-3.235-2.382-1.559 1.5c-.172.172-.316.316-.65.316l.231-3.294 5.994-5.416c.26-.23-.056-.362-.406-.128l-7.406 4.663L19.478 27c-.694-.216-.706-.694.144-1.025l12.475-4.81c.578-.215 1.081.129.894 1.013Z"
      fill="#FFFDFD"
    />
  </svg>
);

export default SvgTelegramSquare;

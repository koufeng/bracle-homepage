import { SvgIcon } from "@mui/material";
import { IconProps } from "../type";

const Right: React.FC<IconProps> = () => {
  return (
    <SvgIcon style={{ visibility: "visible" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="8"
        viewBox="0 0 17 8"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.6464 7.07107L12.3535 7.77818L16.2426 3.88909L12.3535 0L11.6464 0.707108L14.3639 3.42463H0V4.42463H14.2928L11.6464 7.07107Z"
          fill="url(#paint0_linear_428_126)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_428_126"
            x1="0"
            y1="3.88909"
            x2="16.2426"
            y2="3.88909"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF6D00" stop-opacity="0.37" />
            <stop offset="1" stop-color="#FF6D00" />
          </linearGradient>
        </defs>
      </svg>
    </SvgIcon>
  );
};

export default Right;

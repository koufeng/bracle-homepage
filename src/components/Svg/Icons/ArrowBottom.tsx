import { SvgIcon } from "@mui/material";
import { IconProps } from "../type";

const ArrowBottom: React.FC<IconProps> = () => {
  return (
    <SvgIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="9"
        viewBox="0 0 17 9"
        fill="none"
      >
        <path
          d="M1 1L8.5 8L16 1"
          stroke="#272727"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

export default ArrowBottom;

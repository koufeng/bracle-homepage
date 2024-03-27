import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
import BannerBg from "assets/images/banner.png";

const BanBox = styled(Stack)`
  width: 100%;
  height: 100vh;
  background: url(${BannerBg}) center no-repeat;
  background-size: cover;
`;

const Banner = () => {
  return (
    <BanBox>
      
    </BanBox>
  );
};

export default Banner;

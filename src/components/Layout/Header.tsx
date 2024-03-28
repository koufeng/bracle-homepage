import { Box, Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import Nav from "./Nav";
import LogoBox from "./Logo";

const Wrapper = styled("div")`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 60px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(20px);
  z-index: 99;
  box-sizing: border-box;
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      top: 0,
      padding: "0px 25px",
    },
  })};
`;
const Flex = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  const theme = useTheme();
  const upToLg = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Wrapper>
      <Flex>
        <LogoBox />
        <Nav />
      </Flex>
    </Wrapper>
  );
};

export default Header;

// import styled from "@emotion/styled";
import { Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Logo } from "components/Svg";

const LogoBox = () => {
  // const theme = useTheme();
  // const downToMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Stack justifyContent="center" alignItems="center" direction="row">
      <Logo />
    </Stack>
  );
};

export default LogoBox;

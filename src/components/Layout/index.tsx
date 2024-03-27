import { styled } from "@mui/material/styles";
import { useMediaQuery, useTheme } from "@mui/material";
import Header from "./Header";
// import Footer from "./Footer";
// import MobileHeadData from "./MobileHeadData";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
`;
const Context = styled("div")`
  min-height: calc(100vh - 182px);
`;

interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }): JSX.Element => {
  const theme = useTheme();
  const downToSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container>
      <Header />
      <Context>
        {/* {downToSm && <MobileHeadData></MobileHeadData>} */}
        {children}
      </Context>
      {/* <Footer /> */}
    </Container>
  );
};

export default Layout;

import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
import Banner from "./components/Banner";

const Containter = styled(Stack)`
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
    },
  })};
`;

const Home = () => {
  return (
    <Containter>
      <Banner></Banner>
    </Containter>
  );
};

export default Home;

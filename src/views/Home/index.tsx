import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
import Banner from "./components/Banner";
import Partners from "./components/Partners";
import Services from "./components/Services";
import Staking from "./components/Staking";
import Airdrop from "./components/Airdrop";
import RoadMap from "./components/RoadMap";

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
      <Partners></Partners>
      <Services></Services>
      <Staking></Staking>
      <Airdrop></Airdrop>
      <RoadMap></RoadMap>
    </Containter>
  );
};

export default Home;

import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
import BannerTem from "components/Banner";

const Containter = styled(Stack)`
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
    },
  })};
`;

const Staking = () => {
  return (
    <Containter>
      <BannerTem
        icon="staking"
        title="Earn rewards for helping secure the Bracle Network"
        titleMaxWidth={817}
        desc="Bracle Staking signifies a new era of cryptoeconomic security for the industry-standard oracle network." />
    </Containter>
  );
};

export default Staking;

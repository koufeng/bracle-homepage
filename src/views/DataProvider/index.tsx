import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
import BannerTem from "components/Banner";

const Containter = styled(Stack)`
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
    },
  })};
`;

const DataProvider = () => {
  return (
    <Containter>
      <BannerTem
        icon="data"
        title="Profit from your data with Bracle"
        desc="Bracle is one of the top oracle solution for data providers to sell their data and APIs to smart contracts on any blockchain." />
    </Containter>
  );
};

export default DataProvider;

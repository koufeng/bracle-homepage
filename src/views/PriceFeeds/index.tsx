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
        icon="price"
        title="Securely connected for rapid response"
        desc="We provide authenticated data sourced directly from primary sources with sub-second latency." />
    </Containter>
  );
};

export default DataProvider;

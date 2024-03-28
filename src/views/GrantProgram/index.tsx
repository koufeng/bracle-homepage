import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
import BannerTem from "components/Banner";

const Containter = styled(Stack)`
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
    },
  })};
`;

const GrantProgram = () => {
  return (
    <Containter>
      <BannerTem
        icon="grant"
        title="Backing the community development of Bracle"
        titleMaxWidth={681}
        desc="The Bracle Grant Program provides funding to individuals and teams who are working on creating a smarter, more accessible, and impactful economy through smart contracts." />
    </Containter>
  );
};

export default GrantProgram;

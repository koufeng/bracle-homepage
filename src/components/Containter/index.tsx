import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
import { ReactNode } from "react";


const ContainterCon = styled(Stack)`
  width: 1200px;
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      width: '100%'
    },
  })};
`;

const Containter = ({ children }: { children: ReactNode }) => {
  // const theme = useTheme();
  // const downToMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Stack px={20} justifyContent="center" alignItems="flex-start" direction="row">
      <ContainterCon>{children}</ContainterCon>
    </Stack>
  );
};

export default Containter;

import { styled } from "@mui/material/styles";
import { Stack, Typography, Box } from "@mui/material";
import BannerTem from "components/Banner";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { ArrowBottom } from "components/Svg";
import LightTable from "components/Table";
import { rate } from "utils/format";
import { LineChart, Line, ResponsiveContainer } from "recharts";
const Containter = styled(Stack)`
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {},
  })};
`;

const PriceCon = styled(Stack)`
  height: 100%;
  width: 1200px;
  padding: 80px 0 160px 0;
  overflow-x: scroll;
  ${({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "40px 20px 50px 20px",
    },
  })};
`;

const Title = styled(Typography)`
  color: var(--black, #272727);
  font-family: Arboria-Medium;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SelectBox = styled(Stack)`
  .MuiInputBase-root {
    color: #272727;
    font-family: Arboria-Medium;
    font-size: "14px";
    border-radius: 4px !important;
    background: none;
    width: 270px;
    &.Mui-focused {
      .MuiOutlinedInput-notchedOutline {
        border-width: 1px;
      }
    }
    .MuiOutlinedInput-notchedOutline {
      border-color: #999;
    }
    .MuiSvgIcon-root {
      position: absolute;
      right: 25px;
      cursor: pointer;
      z-index: 1;
      font-size: 20px !important;
    }
  }
`;

const NumBox = styled(Stack)`
  color: #272727;
  font-family: Arboria-Medium;
  font-size: "14px";
  border-radius: 4px;
  padding: 16.5px 50px 16.5px 14px;
  margin-left: 20px;
  border: 1px solid #999;
  min-width: 180px;
`;

const PageBtn = styled(Box)<{ isDis: boolean }>`
  color: ${({ isDis }) => (isDis ? "#BCBAB9" : "#272727")};
  font-family: Arboria-Medium;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 4px;
  border: ${({ isDis }) => (isDis ? "1px solid #BCBAB9" : "1px solid #999")};
  padding: 14px 20px;
  min-width: 80px;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: ${({ isDis }) => (isDis ? "#BCBAB9" : "#FF6D00")};
  }
`;

const PageText = styled(Typography)`
  color: var(--black, #272727);
  text-align: right;
  font-family: Arboria-Medium;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const PairBox = styled(Box)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #d9d9d9;
`;
const PairTitle = styled(Typography)`
  color: #272727;
  font-family: Arboria-Book;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const PairDesc = styled(Typography)`
  color: #999;
  font-family: Arboria-Book;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TreDir = styled(Box)<{ isDir: boolean }>`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: ${({ isDir }) =>
    isDir ? "0 6.5px 10px 6.5px" : "10px 6.5px 0 6.5px"};
  border-color: ${({ isDir }) =>
    isDir
      ? "transparent transparent #0B9B45 transparent"
      : "#cd4a12 transparent transparent transparent"};
`;

const TreText = styled(Typography)<{ isDir: boolean }>`
  color: ${({ isDir }) => (isDir ? "#0B9B45" : "#cd4a12")};
  text-align: right;
  font-family: Arboria-Book;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

interface OptionsProps {
  label: string;
  value: string | number;
}

const Trend = ({ num, dir }: { num: string | number; dir: boolean }) => {
  return (
    <>
      <Stack justifyContent="start" alignItems="center" direction="row">
        <TreDir isDir={dir}></TreDir>
        <TreText ml={7} isDir={dir}>
          {rate(num)}
        </TreText>
      </Stack>
    </>
  );
};

const DataProvider = () => {
  const [curNet, setCurNet] = useState("1");
  const chartData = [
    { amount: "1" },
    { amount: "11" },
    { amount: "4" },
    { amount: "45" },
  ];
  const onChange = (value: string) => {
    setCurNet(value);
  };
  const optionsList = [
    {
      label: "Bracle net",
      value: "1",
    },
    {
      label: "Pyth Net",
      value: "2",
    },
  ];
  const columns = [
    {
      title: "Price Feed",
      dataIndex: "PriceFeed",
      key: "PriceFeed",
      render: (text: string) => {
        return (
          <>
            <Stack justifyContent="start" alignItems="center" direction="row">
              <PairBox></PairBox>
              <Box ml={20}>
                <Box>
                  <PairTitle>1INCH/USD</PairTitle>
                </Box>
                <Box>
                  <PairDesc>Crypto</PairDesc>
                </Box>
              </Box>
            </Stack>
          </>
        );
      },
    },
    {
      title: "Last Updated",
      dataIndex: "Last Updated",
      key: "Last Updated",
      render: (text: string) => {
        return (
          <>
            <PairDesc>{"<2s ago"}</PairDesc>
          </>
        );
      },
    },
    {
      title: "Price",
      dataIndex: "Price",
      key: "Price",
      render: (text: string) => {
        return (
          <>
            <PairTitle>1INCH/USD</PairTitle>
          </>
        );
      },
    },
    {
      title: "Confidence",
      dataIndex: "Confidence",
      key: "Confidence",
      render: (text: string) => {
        return (
          <>
            <PairTitle>±$0.00063</PairTitle>
          </>
        );
      },
    },
    {
      title: "1H",
      dataIndex: "1H",
      key: "1H",
      render: (text: string) => {
        return (
          <>
            <Stack justifyContent="start" alignItems="center" direction="row">
              <Trend num={"0.12"} dir={true}></Trend>
            </Stack>
          </>
        );
      },
    },
    {
      title: "24H",
      dataIndex: "24H",
      key: "24H",
      render: (text: string) => {
        return (
          <>
            <Trend num={"0.12"} dir={true}></Trend>
          </>
        );
      },
    },
    {
      title: "7D",
      dataIndex: "7D",
      key: "7D",
      render: (text: string) => {
        return (
          <>
            <Trend num={"0.12"} dir={true}></Trend>
          </>
        );
      },
    },
    {
      title: "Last 7Days",
      dataIndex: "Last 7Days",
      key: "Last 7Days",
      render: (text: string) => {
        return (
          <>
            <Box width={160} height={70}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart width={160} height={70} data={chartData}>
                  <Line
                    type="monotone"
                    stroke="#0B9B45"
                    strokeWidth={2}
                    dataKey="amount"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </>
        );
      },
    },
  ];

  const tableData = [
    {
      PriceFeed: "12312",
    },
    {
      PriceFeed: "12312",
    },
    {
      PriceFeed: "12312",
    },
    {
      PriceFeed: "12312",
    },
  ];

  return (
    <Containter>
      <BannerTem
        icon="price"
        title="Securely connected for rapid response"
        desc="We provide authenticated data sourced directly from primary sources with sub-second latency."
      />
      <Stack justifyContent="center" alignItems="center" direction="row">
        <PriceCon>
          <Title>Price Feeds</Title>
          <Stack
            mt={60}
            justifyContent="start"
            alignItems="center"
            direction="row"
          >
            <SelectBox>
              <Select
                value={curNet}
                onChange={(event: SelectChangeEvent) =>
                  onChange(event.target.value)
                }
                displayEmpty
                IconComponent={() => <ArrowBottom />}
              >
                {optionsList.map((item: OptionsProps, index) => {
                  return (
                    <MenuItem
                      style={{ color: "#272727" }}
                      key={index}
                      value={item.value}
                    >
                      {item.label}
                    </MenuItem>
                  );
                })}
              </Select>
            </SelectBox>
            <NumBox>Price Feeds: 470</NumBox>
          </Stack>
          <Box mt={20}>
            <LightTable
              isSmall
              columns={columns}
              dataSource={tableData}
              nobg
            ></LightTable>
          </Box>
          <Stack
            mt={30}
            justifyContent="flex-end"
            alignItems={"center"}
            direction={"row"}
          >
            <Stack
              justifyContent="start"
              alignItems={"center"}
              direction={"row"}
            >
              <PageBtn isDis={true}>Previous</PageBtn>
              <PageBtn isDis={false} ml={20}>
                Next
              </PageBtn>
              <PageText ml={20}>Page 1 of 109</PageText>
            </Stack>
          </Stack>
        </PriceCon>
      </Stack>
    </Containter>
  );
};

export default DataProvider;

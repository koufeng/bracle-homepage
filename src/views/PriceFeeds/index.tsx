import { styled } from "@mui/material/styles";
import { Stack, Typography, Box, Avatar } from "@mui/material";
import BannerTem from "components/Banner";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState, useEffect, useCallback } from "react";
import { ArrowBottom } from "components/Svg";
import LightTable from "components/Table";
import { rate, formatDate } from "utils/format";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { getPriceList } from "utils/api";
import { PriceRequest, Origin } from "modal/types";

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

const TokenIcon: React.FC<{
  symbol: string;
}> = ({ symbol }) => {
  return (
    <>
      <Avatar
        src={`/images/tokens/${symbol}.svg`}
        sx={{ width: 30, height: 30 }}
      />
    </>
  );
};

const DataProvider = () => {
  const [curNet, setCurNet] = useState("");
  const [tableData, setTableData] = useState<PriceRequest[]>([]);
  const [curPage, setCurPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const originMap: Origin = {
    "1": "cypto",
  };
  const onChange = (value: string) => {
    setCurNet(value);
  };

  const HandleChartData = (chartData: number[]) => {
    let arr: { amount: number }[] = [];
    if (chartData && chartData.length > 0) {
      chartData.forEach((item: number) => {
        arr.push({ amount: item });
      });
    }
    return arr;
  };

  const optionsList =
    process.env.REACT_APP_ENABLE_TESTNETS === "true"
      ? [
          {
            label: "bouncebit-testnet",
            value: "6000",
          },
        ]
      : [
          {
            label: "bouncebit-testnet",
            value: "6000",
          },
        ];

  const columns = [
    {
      title: "Price Feed",
      dataIndex: "baseAsset",
      key: "baseAsset",
      render: (text: string, record: PriceRequest) => {
        return (
          <>
            <Stack justifyContent="start" alignItems="center" direction="row">
              <TokenIcon symbol={text}></TokenIcon>
              <Box ml={20}>
                <Box>
                  <PairTitle>
                    {text}/{record.quoteAsset}
                  </PairTitle>
                </Box>
                <Box>
                  <PairDesc>
                    {originMap[record?.assetType] || `Crypto`}
                  </PairDesc>
                </Box>
              </Box>
            </Stack>
          </>
        );
      },
    },
    {
      title: "Last Updated",
      dataIndex: "lastUpdate",
      key: "lastUpdate",
      render: (text: string) => {
        return (
          <>
            <PairDesc>{formatDate(text)}</PairDesc>
          </>
        );
      },
    },
    {
      title: "Price",
      dataIndex: "lastPrice",
      key: "lastPrice",
      render: (text: string) => {
        return (
          <>
            <PairTitle>{text}</PairTitle>
          </>
        );
      },
    },
    {
      title: "Confidence",
      dataIndex: "confidence",
      key: "confidence",
      render: (text: string) => {
        return (
          <>
            <PairTitle>±${text}</PairTitle>
          </>
        );
      },
    },
    {
      title: "1H",
      dataIndex: "oneHour",
      key: "oneHour",
      render: (text: string) => {
        return (
          <>
            <Stack justifyContent="start" alignItems="center" direction="row">
              <Trend num={text} dir={Number(text) >= 0}></Trend>
            </Stack>
          </>
        );
      },
    },
    {
      title: "24H",
      dataIndex: "twentyFourHour",
      key: "twentyFourHour",
      render: (text: string) => {
        return (
          <>
            <Trend num={text} dir={Number(text) >= 0}></Trend>
          </>
        );
      },
    },
    {
      title: "7D",
      dataIndex: "sevenDay",
      key: "sevenDay",
      render: (text: string) => {
        return (
          <>
            <Trend num={text} dir={Number(text) >= 0}></Trend>
          </>
        );
      },
    },
    {
      title: "Last 7Days",
      dataIndex: "priceList",
      key: "priceList",
      render: (text: number[]) => {
        return (
          <>
            <Box width={160} height={70}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={160}
                  height={70}
                  data={HandleChartData(text) || []}
                >
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

  const getPriceApi = async () => {
    try {
      let obj: { chainId: string; page: number; pageSize: number } = {
        chainId: curNet,
        page: curPage,
        pageSize: 10,
      };
      const res = await getPriceList(obj);
      if (res?.result && res.result?.records) {
        setTableData(res.result?.records);
        setCurPage(res.result?.current);
        setTotalPages(res.result?.pages);
        setTotal(res.result?.total);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const init = useCallback(async () => {
    await getPriceApi();
  }, [curNet, curPage]);

  const changePage = useCallback(
    (type: string) => {
      if (type === "n") {
        if (curPage !== totalPages) {
          getPriceApi();
        }
      } else {
        if (curPage > 1) {
          getPriceApi();
        }
      }
    },
    [curPage, totalPages]
  );

  useEffect(() => {
    getPriceApi();
  }, [curNet, curPage]);

  useEffect(() => {
    setCurNet(optionsList[0]?.value);
    init();
  }, [init]);
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
            <NumBox>Price Feeds: {total}</NumBox>
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
              <PageBtn
                onClick={() => {
                  changePage("p");
                }}
                isDis={curPage === 1}
              >
                Previous
              </PageBtn>
              <PageBtn
                onClick={() => {
                  changePage("n");
                }}
                isDis={curPage === totalPages}
                ml={20}
              >
                Next
              </PageBtn>
              <PageText ml={20}>
                Page {curPage} of {totalPages}
              </PageText>
            </Stack>
          </Stack>
        </PriceCon>
      </Stack>
    </Containter>
  );
};

export default DataProvider;

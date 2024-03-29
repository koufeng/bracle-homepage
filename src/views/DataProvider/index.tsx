import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
import { Drow } from "components/Svg";
import BannerTem from "components/Banner";
import DataOne from "assets/images/ecosystem/data-one.png";
import DataTwo from "assets/images/ecosystem/data-two.png";
import Bracle1 from "assets/images/ecosystem/bracle1.png";
import Bracle2 from "assets/images/ecosystem/bracle2.png";
import Bracle3 from "assets/images/ecosystem/bracle3.png";
import Bracle4 from "assets/images/ecosystem/bracle4.png";
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useState } from 'react'
import { ButtonPrimary } from "components/Button";

const Containter = styled(Stack)`
  .swiper-pagination-bullet-active{
    background-color: #DC7637;
  }
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
    },
  })};
`;

const Title = styled('p')`
  color: #272727;
  text-align: center;
  font-family: Arboria-Medium;
  font-size: 40px;
  line-height: 40px;
  max-width: 725px;
  margin: 0 auto;
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      fontSize: '36px'
    },
  })};
`;

const Xbt = styled('p')<{isLeft?: boolean, mb?: string}>`
  color: #272727;
  text-align: ${({isLeft}) => isLeft ? 'left !important' : 'center'};
  font-family: Arboria-Medium;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: ${({mb}) => mb ? mb : '30px'};
  text-align: center;
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      fontSize: '20px',
      lineHeight: '25px',
    },
  })};
`;

const MainOneBox  = styled('div')`
  background-color: #fff;
  padding: 90px 0 106px;
  .main-box{
    margin: 30px auto 0;
    max-width: 930px;
    .desc{
      color: #272727;
      text-align: center;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 62px;
    }
    .desc2{
      color: #000;
      font-size: 16px;
      line-height: 24px;
      margin-top: 14px;
      max-width: 270px;
    }
    .data-one{
      width: 308px;
      height: 318px;
      background: url(${DataOne}) center no-repeat;
      background-size: contain;
    }
    .data-two{
      width: 308px;
      height: 308px;
      background: url(${DataTwo}) center no-repeat;
      background-size: contain;
    }
    .content-one-box{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 54px;
    }
    .title-box{
      display: flex;
      gap: 19px;
      align-items: center;
      
    }
  }
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      padding: '60px 25px',
      '.main-box': {
        marginTop: '30px',
        '.desc': {
          fontSize: '14px',
          lineHeight: '20px',
          marginBottom: '40px'
        },
        '.desc2': {
          fontSize: '14px',
          lineHeight: '20px',
          marginTop: '20px',
          textAlign: 'center'
        },
        '.content-one-box': {
          marginTop: '30px',
          flexDirection: 'column',
        },
        '.draw-svg': {
          width: '50px',
          height: '101px',
          transform: 'rotate(90deg)',
          margin: '50px'
        },
        '.title-box': {
          flexDirection: 'column',
        },
        '.bracle-item': {
          marginTop: '50px',
        },
      }
    },
  })};
`;

const MainTwoBox  = styled('div')`
  background-color: #F6F6F6;
  padding: 95px 0 100px;
  .main-box{
    margin: 66px auto 0;
    max-width: 1200px;
    display: grid;
    gap: 50px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    .bracle-icon1{
      width: 250px;
      height: 195px;
      background: url(${Bracle1}) center no-repeat;
      background-size: contain;
    }
    .bracle-icon2{
      width: 250px;
      height: 194px;
      background: url(${Bracle2}) center no-repeat;
      background-size: contain;
    }
    .bracle-icon3{
      width: 250px;
      height: 198px;
      background: url(${Bracle3}) center no-repeat;
      background-size: contain;
    }
    .bracle-icon4{
      width: 250px;
      height: 194px;
      background: url(${Bracle4}) center no-repeat;
      background-size: contain;
    }
    .item-title{
      color: #272727;
      font-family: Arboria-Medium;
      font-size: 18px;
      line-height: 22px;
      margin: 20px 0;
    }
    .item-desc{
      color: #000;
      font-family: Arboria-Book;
      font-size: 16px;
      line-height: 24px;
    }
  }
  .mobile-main{
    display: none;
  }
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      padding: '60px 25px 80px',
      '.main-box': {
        '.item-title': {
          fontSize: '20px',
          lineHeight: '25px',
          margin: '20px 17px',
          textAlign: 'center',
        },
        '.mian-item': {
          padding: '0 0 60px'
        },
        '.item-desc': {
          fontSize: '14px',
          maxWidth: '290px',
          margin: '0 auto',
          textAlign: 'center',
        },
        '.bracle-icon1, .bracle-icon2, .bracle-icon3, .bracle-icon4': {
          margin: '0 auto',
        },
      },
      '.mobile-main': {
        maxWidth: 'auto',
        display: 'block'
      },
      '.pc-main': {
        display: 'none'
      }
    }, 
  })};
`;
const BtnBox = styled('div')`
  display: flex;
  justify-content: center;
  margin-top: 140px;
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      marginTop: '50px',
     },
  })};
`;

const NumIcon = styled('div')`
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #FFF;
  font-family: Arboria-Medium;
  font-size: 24px;
  background-color: #DC7637;
  border-radius: 50%;
`;

const DataProvider = () => {
  const [swiperRef, setSwiperRef] = useState<any>(null);
  const dataList = [
    { title: 'Unlock new revenue streams', desc: 'Bracle is the predominant blockchain oracle for seizing data monetization opportunities, providing a vast and expanding market of data-driven applications while minimizing development expenses.', icon: 'bracle-icon1' },
    { title: 'Sell to apps on any blockchain', desc: 'Bracle nodes are inherently blockchain-agnostic, establishing a universal gateway for your business to vend data to applications across multiple blockchain networks simultaneously.', icon: 'bracle-icon2' },
    { title: 'Offer users hyper-reliable data', desc: 'Bracle nodes cryptographically sign every data transfer between systems, furnishing on-chain proof that your data originates directly from the source.', icon: 'bracle-icon3' },
    { title: 'Leverage proven infrastructure', desc: `Bracle's meticulously audited open-source software safeguards billions of dollars for applications in production, maintaining reliability amidst outages, exploits, and other market anomalies.`, icon: 'bracle-icon4' },
  ]
  return (
    <Containter>
      <BannerTem
        icon="data"
        title="Profit from your data with Bracle"
        desc="Bracle is one of the top oracle solution for data providers to sell their data and APIs to smart contracts on any blockchain." />
        <MainOneBox>
          <Title>Tap into the fast-expanding blockchain economy with ease</Title>
          <div className="main-box">
            <div className="desc">Bracle's oracle network facilitates seamless integration of your current APIs with smart contract applications across various blockchains. This allows you to leverage the increasing demand for data in rapidly expanding blockchain sectors including decentralized finance, NFTs, insurance, gaming, and many others.</div>
            <div className="content-one-box">
              <div className="one-item">
                <Xbt>Data Providers</Xbt>
                <div className="data-one"></div>
              </div>
              <Drow />
              <div className="one-item">
                <Xbt>Data Providers</Xbt>
                <div className="data-two"></div>
              </div>
            </div>
          </div>
        </MainOneBox>
        <MainTwoBox>
          <Title>The benefits of using Bracle</Title>
          <div className="main-box pc-main">
            { dataList.map((item, index) => (
              <div className="mian-item" key={index}>
                <div className={ item.icon }></div>
                <p className="item-title">{ item.title }</p>
                <p className="item-desc">{ item.desc }</p>
              </div>
            )) }
          </div>
          <div className="main-box mobile-main">
            <Swiper
                onSwiper={setSwiperRef}
                style={{ width: '100%' }}
                initialSlide={0}
                pagination={true}
                modules={[Pagination]}
              >
                {dataList.map((item: any, index: number) =>
                  <SwiperSlide key={index}>
                    <div className="mian-item">
                      <div className={ item.icon }></div>
                      <p className="item-title">{ item.title }</p>
                      <p className="item-desc">{ item.desc }</p>
                    </div>
                  </SwiperSlide>
                )
                }
              </Swiper>
          </div>
        </MainTwoBox>
        <MainOneBox>
          <Title>Get started with Bracle</Title>
          <div className="main-box">
            <div className="content-one-box">
              <div className="one-item">
                <div className="title-box">
                  <NumIcon>1</NumIcon>
                  <Xbt isLeft mb={'0px'}>Contact us</Xbt>
                </div>
                <div className="desc2">We possess a team of data product experts prepared to assist you in commencing with Bracle.</div>  
              </div>
              <div className="one-item bracle-item">
                <div className="title-box">
                  <NumIcon>2</NumIcon>
                  <Xbt isLeft mb={'0px'}>Connect your API</Xbt>
                </div>
                <div className="desc2">Effortlessly incorporate your existing APIs into the Bracle Network to seamlessly stream your data on-chain.</div>  
              </div>
              <div className="one-item bracle-item">
                <div className="title-box">
                  <NumIcon>3</NumIcon>
                  <Xbt isLeft mb={'0px'}>Earn revenue</Xbt>
                </div>
                <div className="desc2">Receive payments from smart contract applications that require your data.</div>  
              </div>
            </div>
          </div>
          <BtnBox>
            <ButtonPrimary onAction={() => {}} text='Read Docs' />
          </BtnBox>
        </MainOneBox>
    </Containter>
  );
};

export default DataProvider;

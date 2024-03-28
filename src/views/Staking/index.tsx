import { styled } from "@mui/material/styles";
import { Stack, Box } from "@mui/material";
import BannerTem from "components/Banner";
import StakingImg from "assets/images/staking/staking-img.png";
import BocOne from "assets/images/staking/boc-one.png";
import BocTwo from "assets/images/staking/boc-two.png";
import BocThree from "assets/images/staking/boc-three.png";
import { ButtonPrimary } from "components/Button";
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useState } from 'react'

const Containter = styled(Stack)`
  .swiper-pagination-bullet-active{
    background-color: #DC7637;
  }
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
    },
  })};
`;

const MainOneBox  = styled('div')`
  background-color: #fff;
  padding: 90px 0 146px;
  .main-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 83px auto 0;
    max-width: 890px;
    .img{
      width: 316px;
      height: 310px;
      background: url(${StakingImg}) center no-repeat;
      background-size: contain;
    }
  }
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      padding: '60px 25px',
      '.main-box': {
        marginTop: '30px',
        flexDirection: 'column',
        '.img': {
          width: '252px',
          height: '248px',
          marginTop: '30px'
        }
      }
    },
  })};
`;

const Title = styled('p')`
  color: #272727;
  text-align: center;
  font-family: Arboria-Medium;
  font-size: 40px;
  line-height: 40px;
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      fontSize: '36px'
    },
  })};
`;

const TitleBt = styled('p')`
  color: #272727;
  font-family: Arboria-Medium;
  font-size: 24px;
  line-height: 30px;
  max-width: 445px;
  ${({ theme }) => ({  
    [theme.breakpoints.down("lg")]: {
      fontSize: '20px',
      textAlign: 'center',
      lineHeight: '25px',
    },
  })};
`;

const DescText = styled('p')`
  color: #000;
  font-family: Arboria-Book;
  font-size: 16px;
  line-height: 24px;
  max-width: 465px;
  &.desc-one{
    margin-top: 23px;
  }
  &.desc-two{
    margin-top: 20px;
  }
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      fontSize: '14px',
      textAlign: 'center',
      lineHeight: '20px',
      '&.desc-one': {
        marginTop: '30px',
      },
      '&.desc-two': {
        marginTop: '17px',
      }
    },
  })};
`;

const MainTwoBox  = styled('div')`
  background-color: #F6F6F6;
  padding: 95px 0 178px;
  .main-box{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 80px auto 0;
    max-width: 1200px;
    gap: 42px;
  }
  .mobile-main{
    display: none;
  }
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      padding: '60px 25px 80px',
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

const MainItem = styled('div')`
  border-radius: 4px;
  background: #FFF;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  padding: 50px 30px;
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      background: 'none',
      borderRadius: 'none',
      boxShadow: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0 0 60px'
     },
  })};
`;

const BtnBox = styled('div')`
  display: flex;
  justify-content: center;
  margin-top: 120px;
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      marginTop: '60px',
     },
  })};
`;

const MainItemIcon = styled('div')`
  width: 125px;
  height: 125px;
  margin: 0 auto;
  margin-bottom: 40px;
  &.icon-one{
    background: url(${BocOne}) center no-repeat;
    background-size: contain;
  }
  &.icon-two{
    background: url(${BocTwo}) center no-repeat;
    background-size: contain;
  }
  &.icon-three{
    background: url(${BocThree}) center no-repeat;
    background-size: contain;
  }
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
     },
  })};
`;

const Staking = () => {
	const [swiperRef, setSwiperRef] = useState<any>(null);
  const bocList = [
    { title: 'Secure the Bracle Network', desc: 'Staking aids in enhancing the crypto economic security of oracle networks, initially by issuing alerts based on predefined performance standards.', icon: 'icon-one' },
    { title: 'Earn rewards', desc: 'Stakers earn staking rewards for safeguarding the network by issuing timely and valid alerts, and in the future, for activities such as slashing and loss protection.', icon: 'icon-two' },
    { title: 'Support the truth machine', desc: 'Staking enables community members to play a key role in the Chainlink Network and support a world powered by cryptographic truth.', icon: 'icon-three' },
  ]
  return (
    <Containter>
      <BannerTem
        icon="staking"
        title="Earn rewards for helping secure the Bracle Network"
        titleMaxWidth={817}
        desc="Bracle Staking signifies a new era of cryptoeconomic security for the industry-standard oracle network." />
      <MainOneBox>
        <Title>What is Bracle Staking?</Title>
        <div className="main-box">
          <div>
            <TitleBt>Staking is a pivotal mechanism designed to introduce a new level of crypto economic security to Bracle</TitleBt>
            <DescText className="desc-one">Staking offers Bracle ecosystem participants the chance to earn rewards by enhancing the security guarantees and user assurances of oracle services through the backing of staked LINK tokens. Chainlink Staking debuted with v0.1 and is progressing with the forthcoming v0.2 upgrade.</DescText>
          </div>
          <div className="img"></div>
        </div>
      </MainOneBox>
      <MainTwoBox>
        <Title>Why stake BOC?</Title>
        <div className="main-box pc-main">
          { bocList.map((item, index) => (
            <MainItem key={index}>
              <MainItemIcon className={item.icon}></MainItemIcon>
              <TitleBt>{item.title}</TitleBt>
              <DescText className="desc-two">{item.desc}</DescText>
            </MainItem>
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
              {bocList.map((item: any, index: number) =>
                <SwiperSlide key={index}>
                  <MainItem>
                    <MainItemIcon className={item.icon}></MainItemIcon>
                    <TitleBt>{item.title}</TitleBt>
                    <DescText className="desc-two">{item.desc}</DescText>
                  </MainItem>
                </SwiperSlide>
              )
              }
            </Swiper>
        </div>
        <BtnBox>
          <ButtonPrimary onAction={() => {}} text='Know more about Stake' />
        </BtnBox>
      </MainTwoBox>
    </Containter>
  );
};

export default Staking;

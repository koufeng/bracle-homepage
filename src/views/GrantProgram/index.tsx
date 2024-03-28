import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
import BannerTem from "components/Banner";
import GrantPcImg from "assets/images/ecosystem/grant-pc-img.png";
import GrantMImg from "assets/images/ecosystem/grant-m-img.png";
import IconOne from "assets/images/ecosystem/icon-one.png";
import IconTwo from "assets/images/ecosystem/icon-two.png";
import { ButtonPrimary } from "components/Button";

const Containter = styled(Stack)`
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
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      fontSize: '36px'
    },
  })};
`;

const MainOneBox  = styled('div')`
  background-color: #fff;
  padding: 90px 0 95px;
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
    .img{
      width: 762px;
      height: 441px;
      margin: 44px auto;
      background: url(${GrantPcImg}) center no-repeat;
      background-size: contain;
    }
    .img-text-box{
      display: flex;
      justify-content: space-between;
      p{
        color: #272727;
        max-width: 302px;
        font-family: Arboria-Medium;
        font-size: 16px;
        line-height: 21px;
        text-align: center;
      }
      .min-width{
        max-width: 206px;
      }
    }
  }
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      padding: '60px 25px',
      '.main-box': {
        marginTop: '30px',
        '.desc': {
          marginBottom: '40px'
        },
        '.img': {
          width: '332px',
          height: '574px',
          margin: '6px auto',
          background: `url(${GrantMImg}) center no-repeat`,
          backgroundSize: 'contain',
        },
        '.img-text-box': {
          maxWidth: '390px',
          margin: '0 auto',
          'p': {
            maxWidth: '109px',
            fontSize: '12px',
            lineHeight: '15px',
          },
          '.min-width': {
            maxWidth: '109px',
          }
        }
      }
    },
  })};
`;

const MainTwoBox  = styled('div')`
  background-color: #F6F6F6;
  padding: 95px 0 85px; 
  .main-box{
    margin: 87px auto 0;
    max-width: 930px;
    .mian-item{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .icon-one{
      width: 310px;
      height: 310px;
      background: url(${IconOne}) center no-repeat;
      background-size: contain;
    }
    .icon-two{
      width: 310px;
      height: 310px;
      background: url(${IconTwo}) center no-repeat;
      background-size: contain;
    }
    .content-box{
      max-width: 465px;
      flex: 1;
    }
    .mian-item2{
      margin-top: 77px;
    }
    .content-title{
      color: #272727;
      font-family: Arboria-Medium;
      font-size: 24px;
      line-height: 30px;
    }
    .content-desc{
      color: #000;
      font-family: Arboria-Book;
      font-size: 16px;
      line-height: 24px;
      margin: 12px 0 40px;
    }
  }
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      padding: '60px 25px 80px',
      '.mian-item': {
        flexDirection: 'column',
      },
      '.mian-item2': {
        flexDirection: 'column-reverse ',
      },
      '.main-box': {
        '.icon-one, .icon-two': {
          width: '248px',
          height: '248px',
        },
        '.content-title': {
          fontSize: '20px',
          lineHeight: '25px',
          textAlign: 'center',
        },
        '.content-desc': {
          fontSize: '14px',
          lineHeight: '20px',
          margin: '30px 0 40px',
          textAlign: 'center',
        },
        '.btn-box': {
          width: '250px',
          margin: '0 auto',
        }
      }
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
      <MainOneBox>
        <Title>Bracle grant program</Title>
        <div className="main-box">
          <div className="desc">The Bracle grant program allocates significant resources to develop essential developer tools, integrate top-notch data, and introduce vital services within the Bracle Network ecosystem.</div>
          <div className="img-text-box">
            <p>Nodes are becoming increasingly secure as they compete for expanding fees</p>
            <p>Enhance the utilization of data by smart contracts and users</p>
          </div>
          <div className="img"></div>
          <div className="img-text-box">
            <p className="min-width">New contracts generating higher user fees</p>
            <p>Additional APIs and data sources are being made accessible</p>
          </div>
        </div>
      </MainOneBox>
      <MainTwoBox>
        <Title>Participate in our grant programs</Title>
        <div className="main-box">
          <div className="mian-item">
            <div className="icon-one"></div>
            <div className="content-box">
              <p className="content-title">Developer grants</p>
              <p className="content-desc">The developer grants aim to expand smart contract developer tooling, create reference projects demonstrating the utilization of various technologies, and implement educational initiatives for developers and those aspiring to join the field. The objective is to establish essential foundations that expedite the advancement of interconnected smart contracts and oracle node networks.</p>
              <div className="btn-box"><ButtonPrimary onAction={() => {}} text='Apply for a develpper grant' /></div>
            </div>
          </div>
          <div className="mian-item mian-item2">
            <div className="content-box">
              <p className="content-title">Bug bounty program</p>
              <p className="content-desc">Bug bounties assist developers and security engineers in scrutinizing Chainlink's core code and fortifying it against potential attack vectors both presently and in the future.</p>
              <div className="btn-box"><ButtonPrimary onAction={() => {}} text='Submit a report' /></div>
            </div>
            <div className="icon-two"></div>
          </div>
        </div>
      </MainTwoBox>
    </Containter>
  );
};

export default GrantProgram;

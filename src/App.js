import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

// Importing Material UI Stuff
import { Container } from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { darkTheme, createMuiTheme } from "./theme";

//Importing Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


//Importing Routes
import Routes from "./routes";

import style from "./style";

import GithubLogo from '../src/assets/social-icons/github.svg'
import LinkedInLogo from '../src/assets/social-icons/linkedin.svg'
import InstagramLogo from '../src/assets/social-icons/instagram.svg'

const useStyles = makeStyles(style);

function Content() {
  const classes = useStyles();
  const [theme, setTheme] = useState(createMuiTheme(darkTheme));

 
  
  return (
    <>
      <div class="preloader">
      <svg width="484" height="118" viewBox="0 0 484 118" fill="none" xmlns="http://www.w3.org/2000/svg" id="logo">

<path d="M13.2356 21.6622C13.2356 16.8871 12.5801 13.376 11.2693 11.1289C9.95852 8.78814 7.33689 7.61777 3.40444 7.61777H2V3.40444H40.2009C59.1141 3.40444 73.4862 7.43052 83.3173 15.4827C93.2421 23.4412 98.2045 34.6767 98.2045 49.1893C98.2045 58.4587 96.0978 66.6513 91.8844 73.7671C87.7647 80.7893 81.5852 86.2667 73.3458 90.1991C65.2 94.1316 55.3689 96.0978 43.8524 96.0978H13.2356V21.6622ZM43.4311 90.48C49.9852 90.48 55.7902 88.8415 60.8462 85.5644C65.9959 82.2874 69.9751 77.5591 72.784 71.3796C75.6865 65.2 77.1378 57.9905 77.1378 49.7511C77.1378 41.6053 75.6865 34.4895 72.784 28.4036C69.9751 22.224 65.9959 17.4489 60.8462 14.0782C55.6966 10.7076 49.7979 9.02222 43.1502 9.02222H42.0267C38.9369 9.02222 36.4557 9.20948 34.5831 9.58399L31.4933 10.0053V89.4969L34.5831 90.0587C36.5493 90.3396 39.0305 90.48 42.0267 90.48H43.4311Z" stroke="#5D5FEF" stroke-width="4" mask="url(#path-1-outside-1)"/>
<path d="M115.826 21.6622C115.826 16.8871 115.17 13.376 113.86 11.1289C112.549 8.78814 109.927 7.61777 105.995 7.61777H104.59V3.40444H166.526C174.485 3.40444 178.464 7.14963 178.464 14.64V26.5778H174.251C174.251 20.7727 172.753 16.5126 169.757 13.7973C166.854 11.0821 162.5 9.72445 156.695 9.72445H134.084V44.8356H170.599V51.1556H134.084V89.7778H158.1C163.436 89.7778 167.884 88.6074 171.442 86.2667C175 83.8323 177.949 79.6658 180.29 73.7671L184.082 75.1716L180.009 86.2667C178.792 89.6373 177.341 92.1185 175.655 93.7102C173.97 95.3019 171.348 96.0978 167.79 96.0978H115.826V21.6622Z" stroke="#5D5FEF" stroke-width="4" mask="url(#path-1-outside-1)"/>
<path d="M195.965 19.8364C193.811 14.6868 191.658 11.0353 189.504 8.88177C187.444 6.72829 184.963 5.46429 182.061 5.08978V2.28088L187.959 2C194.139 2 199.569 3.17037 204.251 5.51111C208.932 7.85185 212.771 12.627 215.767 19.8364L237.958 72.3627L267.591 3.40444H274.754L234.306 97.5022H228.688L195.965 19.8364Z" stroke="#5D5FEF" stroke-width="4" mask="url(#path-1-outside-1)"/>
<path d="M354.494 97.5022C349.344 97.5022 344.662 96.0042 340.449 93.008C336.236 89.9182 331.835 84.6281 327.247 77.1378L313.203 53.6836H307.585V96.0978H289.187V21.6622C289.187 16.8871 288.532 13.376 287.221 11.1289C285.91 8.78814 283.288 7.61777 279.356 7.61777H277.951V3.40444H316.714C326.452 3.40444 335.206 5.1834 342.977 8.74133C350.748 12.2993 354.634 19.1342 354.634 29.2462C354.634 40.9499 347.05 48.7212 331.882 52.56L346.629 77.1378C352.153 86.4071 357.958 91.5567 364.044 92.5867V96.0978C363.295 96.4723 361.937 96.8 359.971 97.0809C358.005 97.3618 356.179 97.5022 354.494 97.5022ZM316.012 48.0658C321.255 48.0658 325.703 46.5209 329.354 43.4311C333.099 40.2477 334.972 35.2853 334.972 28.544C334.972 21.8963 333.146 16.9807 329.495 13.7973C325.843 10.6139 321.583 9.02222 316.714 9.02222C313.999 9.02222 311.892 9.20948 310.394 9.58399L307.585 10.0053V48.0658H316.012Z" stroke="#5D5FEF" stroke-width="4" mask="url(#path-1-outside-1)"/>
<path d="M450.587 96.6596C444.689 96.6596 439.352 95.4424 434.577 93.008C429.801 90.48 425.916 85.6113 422.92 78.4018L419.689 70.5369H382.331L370.815 96.0978H363.512L404.943 3.40444H411.263L442.722 78.4018C446.28 87.1093 451.149 91.7908 457.329 92.4462V95.9573C455.643 96.4255 453.396 96.6596 450.587 96.6596ZM385.281 64.2169H417.021L401.572 27.5609L385.281 64.2169Z" stroke="#5D5FEF" stroke-width="4" mask="url(#path-1-outside-1)"/>
<path d="M450.652 111.125C455.146 110.564 458.423 108.316 460.483 104.384C462.637 100.545 463.713 93.8975 463.713 84.4409V3.40444H481.971V84.4409C481.971 92.7739 481.082 99.0939 479.303 103.401C477.617 107.801 474.574 110.891 470.174 112.67C465.773 114.449 459.266 115.339 450.652 115.339V111.125Z" stroke="#5D5FEF" stroke-width="4" mask="url(#path-1-outside-1)"/>
</svg>


    </div>

    <section id="home" class="content">
      <div class="container">
        <Router >
          <div style={{width:'100%',padding:'0rem 0rem'}}>
            
            <div className="mobile___hidden" style={{position:'fixed',bottom:'0%',left:'2%',display:'flex',flexDirection:'column',alignItems:'center'}}>
            
            <svg width="54" height="56" viewBox="0 0 54 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d)">
              <path d="M32.2308 40.8791V36.1161C32.2769 35.5292 32.1976 34.9392 31.9982 34.3853C31.7987 33.8315 31.4836 33.3264 31.0738 32.9037C34.9385 32.473 39 31.0084 39 24.2884C38.9997 22.57 38.3387 20.9175 37.1538 19.673C37.7149 18.1696 37.6752 16.5079 37.0431 15.033C37.0431 15.033 35.5908 14.6022 32.2308 16.8545C29.4099 16.09 26.4363 16.09 23.6154 16.8545C20.2554 14.6022 18.8031 15.033 18.8031 15.033C18.1709 16.5079 18.1313 18.1696 18.6923 19.673C17.4986 20.9268 16.837 22.5942 16.8462 24.3253C16.8462 30.9961 20.9077 32.4607 24.7723 32.9407C24.3674 33.3591 24.0551 33.8581 23.8558 34.4052C23.6564 34.9523 23.5745 35.5352 23.6154 36.1161V40.8791M23.6154 37.1868C17.4615 39.033 17.4615 34.1099 15 33.4945L23.6154 37.1868Z" stroke="#606C8B" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <filter id="filter0_d" x="-4" y="0" width="62" height="63.8791" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
              </filter>
              </defs>
            </svg>

            <svg width="54" height="53" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d)">
              <path d="M31.8001 22.2361C33.7097 22.2361 35.541 22.9947 36.8913 24.3449C38.2415 25.6952 39.0001 27.5265 39.0001 29.4361V37.8361H34.2001V29.4361C34.2001 28.7996 33.9472 28.1891 33.4972 27.739C33.0471 27.2889 32.4366 27.0361 31.8001 27.0361C31.1636 27.0361 30.5531 27.2889 30.103 27.739C29.653 28.1891 29.4001 28.7996 29.4001 29.4361V37.8361H24.6001V29.4361C24.6001 27.5265 25.3587 25.6952 26.7089 24.3449C28.0592 22.9947 29.8905 22.2361 31.8001 22.2361V22.2361Z" stroke="#63718A" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19.8 23.4358H15V37.8358H19.8V23.4358Z" stroke="#63718A" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17.4 19.8361C18.7255 19.8361 19.8 18.7616 19.8 17.4361C19.8 16.1106 18.7255 15.0361 17.4 15.0361C16.0745 15.0361 15 16.1106 15 17.4361C15 18.7616 16.0745 19.8361 17.4 19.8361Z" stroke="#63718A" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <filter id="filter0_d" x="-4" y="0.0361328" width="62" height="60.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
              </filter>
              </defs>
            </svg>

            <svg width="54" height="55" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d)">
              <path d="M33 15.3691H21C17.6863 15.3691 15 18.0554 15 21.3691V33.3691C15 36.6828 17.6863 39.3691 21 39.3691H33C36.3137 39.3691 39 36.6828 39 33.3691V21.3691C39 18.0554 36.3137 15.3691 33 15.3691Z" stroke="#63718A" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M31.8 26.6133C31.9481 27.612 31.7775 28.6319 31.3125 29.5281C30.8475 30.4242 30.1118 31.151 29.21 31.6049C28.3082 32.0588 27.2862 32.2168 26.2894 32.0564C25.2926 31.896 24.3718 31.4254 23.6578 30.7115C22.9439 29.9975 22.4733 29.0767 22.3129 28.0799C22.1525 27.0831 22.3105 26.0611 22.7644 25.1593C23.2183 24.2575 23.9451 23.5217 24.8412 23.0567C25.7374 22.5917 26.7573 22.4212 27.756 22.5693C28.7747 22.7203 29.7179 23.195 30.4461 23.9232C31.1743 24.6514 31.649 25.5946 31.8 26.6133Z" stroke="#63718A" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M33.6001 20.7692H33.6121" stroke="#63718A" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <filter id="filter0_d" x="-4" y="0.369141" width="62" height="62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
              </filter>
              </defs>
            </svg>


              <div style={{width:'0.1rem',height:'8rem',background:'#63718A'}}></div>
            </div>
            
            <Container style={{maxWidth:'1150px'}}>
            <NavBar />
              <Routes />
            </Container>
            <Footer/>

            <div className="mobile___hidden" style={{position:'fixed',bottom:'0%',right:'2%',display:'flex',flexDirection:'column',alignItems:'center'}}>
              <div className="vertical___text" >devrajchatribin9978@gmail.com</div>
              <div style={{width:'0.125rem',height:'8rem',background:'#63718A'}}></div>
            </div>
          </div>
         
        </Router>
      </div>
    </section>
    </>
  )
}


function App() {
  const [theme, setTheme] = useState(createMuiTheme(darkTheme));

  return (
    <ThemeProvider theme={theme}>
      <Content />
    </ThemeProvider>
  );
}

export default App;

import { createGlobalStyle } from 'styled-components';
import BGImage from './images/bg.png';


export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding:0;
        margin:0;
        user-select: none;
    }
    body {
        font-family: Open-Sans, Helvetica, Sans-Serif;
        background-image: url(${BGImage});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        min-height:100vh;
        overflow-y: auto;
        ::-webkit-scrollbar {
          width: 0.4rem;
          height: 0.4rem;
        }
        ::-webkit-scrollbar-track {
          background: #e7e2e2;
        }
        ::-webkit-scrollbar-thumb {
          background: #c7213191;
          border-radius: 1rem;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #ec748f;
        }
    }
`;


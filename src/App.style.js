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
    }
`;


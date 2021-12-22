import styled, { createGlobalStyle } from 'styled-components';
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
        padding:2rem;
        background-image: url(${BGImage});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
`;

export const Header = styled.header`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding:0.5rem 2rem;
    gap:1rem;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 5px;
    color:#fff;
    text-align:center;
    background-image:linear-gradient(#c7213191,#f3bf9d);
`;

export const Logo = styled.img`
    border-radius:50%;
`;


export const Container = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    gap:1rem;
    align-items: flex-end;
    margin-top:2rem;
`;


import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.header`
    display: flex;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items: center;
    padding:0.5rem 2rem;
    min-height:10vh;
    gap:1rem;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    color:#fff;
    background-image:linear-gradient(#c7213191,#f3bf9d);
`;

export const Brand = styled(Link)`
    display: flex;
    align-items: center;
    gap:1rem;
    text-decoration: none;
    color:#fff;
`;

export const Logo = styled.img`
    border-radius:50%;
    width:2.5rem;
    height:2.5rem;
    cursor: pointer;
`;

export const User = styled.div`
    border-radius:50%;
    width:2.5rem;
    height:2.5rem;
    background-color: rgba(0,0,0,0.3);
    cursor:pointer;
    display:flex;
    justify-content: center;
    align-items: center;
`;


export const RightNav = styled.div`
    display: flex;
    align-items: center;
    gap:1rem;
`;


import styled from 'styled-components';
import { PostForm } from '../Form/Form.style';

export const Container = styled.div`
    padding:2rem;
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:90vh;
`;

export const AuthForm = styled(PostForm)`
    width:25rem;
    .sign-action{
        cursor:pointer;
    }
`;
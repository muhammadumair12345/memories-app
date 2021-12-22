import styled from 'styled-components';

export const FormContainer = styled.div`
    width:25rem;
    @media (max-width: 780px) {
        width:100%;
    }
`;

export const PostForm = styled.form`
    display: flex;
    flex-direction: column;
    padding:1rem;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 5px;
    gap:1rem;
    background-color: #fff;
`;
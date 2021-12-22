import styled from 'styled-components';

export const PostsContainer = styled.div`
    display: grid;
    flex:1;
    grid-template-columns:repeat(auto-fill, minmax(15rem, 1fr));
    grid-gap: 1rem;
`;
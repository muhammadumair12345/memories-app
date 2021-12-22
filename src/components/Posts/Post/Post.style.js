import styled from 'styled-components';
import BGImage from '../../../images/bg.png';


export const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 5px;
    background-color: #fff;
    overflow-wrap: anywhere;
`;

export const CardContent = styled.div`
        padding:1rem;
`;


export const CardImg = styled.div`
    background-image:url(${props => props.image ? props.image : BGImage});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5px 5px 0 0;
    height:12rem;
    padding:1rem;
    color:#fff;
`;

export const CardHeader = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
`;

const ScrollBar = styled.div`
    height:${props => props.height};
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
`;

export const Tag = styled(ScrollBar)`
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
    margin-bottom:0.5rem;
`;

export const Message = styled(ScrollBar)`
`;

export const ActionButton = styled.div`
    margin-top:0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Likes = styled.div`
    display:flex;
    align-items: center;
`;
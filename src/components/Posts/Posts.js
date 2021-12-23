import React, { Suspense } from 'react';
import { PostsContainer } from './Posts.style';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import LinearProgress from '@mui/material/LinearProgress';


const Post = React.lazy(() => import('./Post/Post'))

const Posts = ({ setCurrentId }) => {
    const posts = useSelector(state => state.postReducer);

    return (
        <PostsContainer>
            {posts.length === 0 ?
                <Loader /> :
                posts.map((post) =>
                    <Suspense fallback={<Loader />} key={post._id}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Suspense>
                )
            }
        </PostsContainer>
    )
}

export default Posts

import React from 'react';
import Post from './Post/Post';
import { PostsContainer } from './Posts.style';
import { useSelector } from 'react-redux';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector(state => state.postReducer);

    return (
        <PostsContainer>
            {
                posts.map((post) =>
                    <Post post={post} setCurrentId={setCurrentId} key={post._id} />
                )
            }
        </PostsContainer>
    )
}

export default Posts

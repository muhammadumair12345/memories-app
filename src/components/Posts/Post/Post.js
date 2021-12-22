import React from 'react';
import Typography from '@mui/material/Typography';
import { ActionButton, Card, CardHeader, CardImg, Likes, Tag, CardContent, Message } from './Post.style';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    return (
        <Card>
            <CardImg image={post.selectedFile}>
                <CardHeader>
                    <Typography variant="h6">
                        {post.creator}
                    </Typography>
                    <IconButton color="primary" onClick={() => setCurrentId(post._id)}>
                        <MoreHorizIcon />
                    </IconButton>
                </CardHeader>
                <Typography variant="subtitle2">
                    {moment(post.createdAt).fromNow()}
                </Typography>
            </CardImg>
            <CardContent>
                <Tag height="1.3rem">
                    {post.tags.map((tag, id) =>
                        <Typography key={id} variant="body2" color="text.secondary">#{tag.trim()}</Typography>
                    )}
                </Tag>
                <Typography variant="h5">
                    {post.title}
                </Typography>
                <Message height="2.5rem">
                    <Typography variant="body2" color="text.secondary">
                        {post.message}
                    </Typography>
                </Message>
                <ActionButton>
                    <Likes>
                        <IconButton color="primary" onClick={() => dispatch(likePost(post._id))}>
                            <ThumbUpOffAltIcon />
                        </IconButton>
                        <Typography variant="body1" color="primary">{post.likesCount}</Typography>
                    </Likes>
                    <IconButton color="primary" onClick={() => dispatch(deletePost(post._id))}>
                        <DeleteIcon />
                    </IconButton>
                </ActionButton>
            </CardContent>
        </Card>
    )
}

export default Post

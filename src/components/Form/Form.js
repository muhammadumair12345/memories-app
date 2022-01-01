import React, { memo, useEffect, useState } from 'react'
import { FormContainer, PostForm } from './Form.style'
import { TextField, Button, Typography } from '@mui/material';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
    const dispatch = useDispatch();

    const post = useSelector(state => currentId ? state.postReducer.find(p => p._id === currentId) : null);
    const user = JSON.parse(localStorage.getItem('profile'));

    const [postData, setPostData] = useState({
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });

    useEffect(() => {
        if (post) setPostData(post)
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
        }
        else {
            dispatch(createPost({ ...postData, name: user?.result?.name }));
        }
        clearData();
    }

    const clearData = () => {
        setPostData({
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        })
        setCurrentId(null);
    }

    return (
        <FormContainer>
            {!user?.result?.name ?
                <PostForm>
                    <Typography variant="h6" color="primary">
                        Please Sign In to create your own memories and like other's memories.
                    </Typography>
                </PostForm> :
                <PostForm autoComplete='off' onSubmit={handleSubmit} >
                    <Typography variant="h6" color="primary">
                        {post ? "Update" : "Create"} Memory
                    </Typography>
                    <TextField label="Title" name="title" variant="outlined" size='small' required value={postData.title} onChange={e => setPostData({ ...postData, title: e.target.value })} />
                    <TextField
                        label="Message"
                        name="message"
                        multiline
                        required
                        rows={4}
                        value={postData.message} onChange={e => setPostData({ ...postData, message: e.target.value })}
                    />
                    <TextField label="Tags (comma separated)" required name="tags" variant="outlined" size='small' value={postData.tags} onChange={e => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                    <Button variant="contained" type="submit">Submit</Button>
                    <Button variant="contained" onClick={clearData} color="error">Cancel</Button>
                </PostForm>}
        </FormContainer >
    )
}

export default memo(Form);
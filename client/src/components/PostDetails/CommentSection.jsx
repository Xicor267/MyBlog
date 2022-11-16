import React, { useState, useRef } from 'react';
import { Typography, TextField, Button } from '@material-ui/core/';
import { useDispatch } from 'react-redux';

import { commentPost } from '../../actions/posts';
import useStyles from './styles';
import moment from 'moment';

const CommentSection = ({ post }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const [comments, setComments] = useState(post?.comments);
  const classes = useStyles();
  const commentsRef = useRef();

  const handleComment = async () => {
    const newComments = await dispatch(commentPost(`[ ${user?.result.name.charAt(0)} ] ${user?.result?.name} ( ${moment(post.createdAt).fromNow()} ) => ${comment}`, post._id,));

    setComment('');
    setComments(newComments);

    commentsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div style={{ width: '45%' }}>
          <Typography gutterBottom variant="h6" color="secondary">Add a comment</Typography>
          <TextField fullWidth rows={5} variant="outlined" label="Write Something..." multiline value={comment} onChange={(e) => setComment(e.target.value)} />
          <br />
          <Button style={{ marginTop: '10px' }} fullWidth disabled={!comment.length} color="secondary" variant="contained" onClick={handleComment}>
            Comment
          </Button>
        </div>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom variant="h6" color="secondary">Comment Lists</Typography>
          {comments?.map((c, i) => (
            <Typography key={i} gutterBottom variant="subtitle1">
              <strong>{c.split(':')[0]}</strong>
            </Typography>
          ))}
          <div ref={commentsRef} />
        </div>
      </div>
    </div>
  );
};

export default CommentSection;

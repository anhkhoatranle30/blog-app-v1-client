import React, { useCallback } from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import moment from "moment";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { updatePost } from "../../../redux/actions";

export default function Post({ post }) {
  const classes = useStyles();

  const dispatch = useDispatch();
  const onLikeBtnClick = useCallback(() => {
    dispatch(
      updatePost.updatePostRequest({ ...post, likesCount: post.likesCount + 1 })
    );
  }, [dispatch, post]);

  return (
    <Card>
      <CardHeader
        avatar={<Avatar>A</Avatar>}
        title={post.author}
        subheader={moment(post.updatedAt).format("HH:MM MM DD, YYYY")}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardMedia
        image={post.attachment}
        title="Title"
        className={classes.media}
      />
      <CardContent>
        <Typography variant="h5" color="textPrimary">
          {post.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.content}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={onLikeBtnClick}>
          <FavoriteIcon />
          <Typography component="span" color="textSecondary">
            {post.likesCount} <span>likes</span>
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}

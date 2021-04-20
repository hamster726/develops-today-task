import { useState } from "react";
import { useRouter } from "next/router";
import { addComment } from "../redux/reducers/reducer";
import { useDispatch, useSelector } from "react-redux";
import {Input, Button, List, ListItem, TextField} from "@material-ui/core"

const PostComments = ({ post }) => {
  const router = useRouter();
  const [commentValue, setCommentValue] = useState("");
  const dispatch = useDispatch();

  const { comments } = useSelector((state) => ({ comments: state.comments }));

  const addCurrentComment = () => {
    if (commentValue.length === 0) return;
    dispatch(addComment(post.id, commentValue));
    setCommentValue("");
  };

  return (
    <>
      <h2>Comments</h2>
      <TextField>
          <Button onClick={addCurrentComment}>
            Send
          </Button>
        <Input
          type="text"
          name="text"
          placeholder="Add comment..."
          onChange={(e) => setCommentValue(e.target.value)}
          value={commentValue}
        />
      </TextField>
      <p />
      <List>
        {comments
          .map((item) => (
            <ListItem key={item.id}>
              <b>{`anonymous:`}</b> {item.body}
            </ListItem>
          ))
          .reverse()}
      </List>
    </>
  );
};

export default PostComments;
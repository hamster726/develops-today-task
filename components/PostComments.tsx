import {
  Button,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { useState } from "react";
import { useRouter } from "next/router";
import { addComment } from "../redux/reducers/reducer";
import { useDispatch, useSelector } from "react-redux";

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
      <InputGroup>
        <InputGroupAddon addonType="append">
          <Button color="success" onClick={addCurrentComment}>
            Send
          </Button>
        </InputGroupAddon>
        <Input
          type="text"
          name="text"
          placeholder="Add comment..."
          onChange={(e) => setCommentValue(e.target.value)}
          value={commentValue}
        />
      </InputGroup>
      <p />
      <ListGroup>
        {comments
          .map((item) => (
            <ListGroupItem key={item.id}>
              <b>{`anonymous:`}</b> {item.body}
            </ListGroupItem>
          ))
          .reverse()}
      </ListGroup>
    </>
  );
};

export default PostComments;
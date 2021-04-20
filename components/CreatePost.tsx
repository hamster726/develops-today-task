import { useRouter } from "next/router";
import {
  Row,
  Col,
  Container,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/reducers/reducer";

const CreatePost = () => {
  const router = useRouter();

  const [newPostTitle, setPostTitle] = useState("");
  const [newPostBody, setPostBody] = useState("");
  const dispatch = useDispatch();

  const addNewPost = async () => {
    await dispatch(addPost(newPostTitle, newPostBody));
    router.push("/");
  };

  return (
    <>
      <Row>
        <Col>
          <FormGroup>
            <Label for="postTitle">Title</Label>
            <Input
              type="text"
              name="title"
              id="exampleAddress2"
              placeholder="Type your title"
              onChange={(e) => setPostTitle(e.target.value)}
              value={newPostTitle}
            />
            <Label for="postBody">Post</Label>
            <Input
              type="textarea"
              name="body"
              id="exampleAddress2"
              placeholder="What's on your mind?"
              onChange={(e) => setPostBody(e.target.value)}
              value={newPostBody}
            />
            <Button color="success" onClick={addNewPost}>
              Send
            </Button>
          </FormGroup>
        </Col>
      </Row>
    </>
  );
};

export default CreatePost;

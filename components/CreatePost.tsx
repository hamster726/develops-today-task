import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/reducers/reducer";
import {Grid, Box, Button, TextField} from "@material-ui/core";
import {FormGroup, InputLabel} from "@material-ui/core";

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
      <Grid>
        <Box>
          <FormGroup>
            <InputLabel>Type something what you want</InputLabel>
            <TextField
              variant="outlined"
              margin="normal"
              name="title"
              id="postTitle"
              label="Title"
              fullWidth
              autoFocus
              onChange={(e) => setPostTitle(e.target.value)}
              value={newPostTitle}
            />
            <TextField
              multiline
              rows={30}
              variant="outlined"
              label="What`s on your mind?"
              name="body"
              id="outlined-multiline-static"
              onChange={(e) => setPostBody(e.target.value)}
              value={newPostBody}
            />
            <Button onClick={addNewPost}>
              Send
            </Button>
          </FormGroup>
        </Box>
      </Grid>
    </>
  );
};

export default CreatePost;

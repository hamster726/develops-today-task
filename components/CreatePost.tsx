import Router, {useRouter} from "next/router";
import MainLayout from "../layouts/MainLayout";
import {Row, Col, Container, FormGroup, Label, Input, Button} from "reactstrap";
import {useState} from "react";
import axios from "axios";

const CreatePost = () => {

  const router = useRouter();

  const [newPostTitle, setPostTitle] = useState('');
  const [newPostBody, setPostBody] = useState('');

  const addPost = () => {
    const data = {
      'title': newPostTitle,
      'body': newPostBody,
    }
    axios.post('https://simple-blog-api.crew.red/posts', data)
      .then(resp => router.push('/'))
      .catch(e => console.log(`Error with Creating Post: ${e}`))
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <FormGroup>
              <Label for="postTitle">Title</Label>
              <Input type="text" name="title" id="exampleAddress2" placeholder="Type your title" onChange={(e) => setPostTitle(e.target.value)} value={newPostTitle}/>
              <Label for="postBody">Post</Label>
              <Input type="textarea" name="body" id="exampleAddress2" placeholder="What's on your mind?" onChange={(e) => setPostBody(e.target.value)} value={newPostBody}/>
              <Button color="success" onClick={addPost}>Send</Button>
            </FormGroup>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CreatePost;
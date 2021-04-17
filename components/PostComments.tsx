import {Button, Col, Input, InputGroup, InputGroupAddon, ListGroup, ListGroupItem} from "reactstrap";
import axios from "axios";
import {useState} from "react";
import {useRouter} from "next/router";

const PostComments = ({serverPost}) => {
  const router = useRouter();
  const [commentValue, setCommentValue] = useState('');


  const addComment = async () => {
    if (commentValue.length === 0) return;
    try {
      const response = await axios.post('https://simple-blog-api.crew.red/comments', {
        postId: serverPost.id,
        body: commentValue
      })
      router.push(`/posts/${serverPost.id}`);
    } catch (e) {
      console.log("Error with posting comment: " + e)
    }
    setCommentValue('');
  }

  return (
    <>
      <h2>Comments</h2>
      <InputGroup>
        <InputGroupAddon addonType="append"><Button color="success" onClick={addComment}>Send</Button></InputGroupAddon>
        <Input type="text" name="text" placeholder="Add comment..." onChange={(e) => setCommentValue(e.target.value)}
               value={commentValue}/>
      </InputGroup>
      <p/>
      <ListGroup>
        {serverPost.comments.map(item => <ListGroupItem key={item.id}><b>{`anonymous:`}</b> {item.body}</ListGroupItem>).reverse()}
      </ListGroup>
    </>
  )
}

export default PostComments;
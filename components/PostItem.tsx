import {Button, Card, CardText, CardTitle} from "reactstrap";
import Router, {useRouter} from "next/router";
import axios from "axios";

const PostItem = ({data}) => {
  const router = useRouter();

  const deletePost = () => {
    axios.delete(`https://simple-blog-api.crew.red/posts/${data.id}`)
      .then(resp => router.push('/'))
      .catch(e => console.log(`Error with deleting post: ${e}`))
  }

  return (
    <Card body>
      <CardTitle tag="h5">{data.title}</CardTitle>
      <CardText>{data.body}</CardText>
      <Button color="primary" size={'md'} onClick={() => Router.push(`/posts/${data.id}`)}>More</Button>
      <Button color="danger" size={'md'} onClick={deletePost}>Delete</Button>


    </Card>

  )
}

export default PostItem;
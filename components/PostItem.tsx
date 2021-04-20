import {Button, Card, CardText, CardTitle} from "reactstrap";
import {useRouter} from "next/router";
import {deletePost, getPosts} from "../redux/reducers/reducer";
import {useDispatch} from "react-redux";

const PostItem = ({item}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const deleteThisPost = async () => {
    await dispatch(deletePost(item.id));
    dispatch(getPosts());
  }

  return (
    <Card body>
      <CardTitle tag="h5">{item.title}</CardTitle>
      <CardText>{item.body}</CardText>
      <Button color="primary" size={'md'} onClick={() => router.push(`/posts/${item.id}`)}>More</Button>
      <Button color="danger" size={'md'} onClick={deleteThisPost}>Delete</Button>


    </Card>

  )
}

export default PostItem;
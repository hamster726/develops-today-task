import {useRouter} from "next/router";
import {deletePost, getPosts} from "../redux/reducers/reducer";
import {useDispatch} from "react-redux";
import {Grid, Box, Button} from "@material-ui/core";

const PostItem = ({item}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const deleteThisPost = async () => {
    await dispatch(deletePost(item.id));
    dispatch(getPosts());
  }

  return (
    <Grid>
      <h5>{item.title}</h5>
      <p>{item.body}</p>
      <Button color="primary" onClick={() => router.push(`/posts/${item.id}`)}>More</Button>
      <Button onClick={deleteThisPost}>Delete</Button>

    </Grid>

  )
}

export default PostItem;
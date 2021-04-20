import PostItem from "./PostItem";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPosts} from "../redux/reducers/reducer";
import {Grid, Box, Button} from "@material-ui/core";


const PostList = () => {

  const {loading, posts} = useSelector((state) => ({
    loading: state.isLoaded, posts: state.posts
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [])


  return (
    <Grid>
      <Box>
          <h1>Simple blog | DevelopsToday</h1>
      </Box>
      <Box>
          {posts.map(item => <PostItem key={item.id} item={item}/>
          ).reverse()}
      </Box>

    </Grid>
  )
}




export default PostList;
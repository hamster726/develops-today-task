import { useRouter } from "next/router";
import MainLayout from "../../layouts/MainLayout";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getPost } from "../../redux/reducers/reducer";
import PostComments from "../../components/PostComments";
import { useEffect } from "react";
import {isLoaded} from "../../redux/actions/actions";
import {Grid, Box, Button} from "@material-ui/core";

const Post = ({props}) => {
  const router = useRouter();

  const postId = router.query.postid ? router.query.postid : props.postId;

  const { post, loading } = useSelector(
    (state) => ({
      post: state.currentPost,
      loading: state.isLoaded,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(isLoaded(false));
    dispatch(getPost(postId));
  }, []);


  if (!loading || post === undefined) {
    return (
      <MainLayout title={"Loading..."}>
        <Grid justify="center">
            <Box>
              <p>Loading...</p>
            </Box>
        </Grid>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={post.title}>
      <Grid>
        <Box>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Button onClick={() => router.push("/")}>Homepage</Button>
            <hr />
            <PostComments post={post} />
        </Box>
      </Grid>
    </MainLayout>
  );
};

export default Post;

export const getServerSideProps = async ({ params }) => {

  return {
    props: {
      props: params.postid
    }
  }
};

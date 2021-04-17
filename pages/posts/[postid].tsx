import { useRouter } from "next/router";
import Router from "next/router";
import MainLayout from "../../layouts/MainLayout";
import { Button, Row, Col, Container } from "reactstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getPost } from "../../redux/reducers/reducer";
import PostComments from "../../components/PostComments";
import { useEffect } from "react";

const Post = () => {
  const router = useRouter();
  const { post, isLoaded } = useSelector(
    (state) => ({
      post: state.currentPost,
      isLoaded: state.isLoaded,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost());
  }, []);


  if (!isLoaded) {
    return (
      <MainLayout title={"Loading..."}>
        <Container>
          <Row>
            <Col>
              <p>Loading...</p>
            </Col>
          </Row>
        </Container>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={post.title}>
      <Container>
        <Row>
          <Col>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Button onClick={() => Router.push("/")}>Homepage</Button>
            <hr />
            <PostComments serverPost={post} />
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Post;

// export const getServerSideProps = async ({ params }) => {
//   const response = await axios.get(
//     `https://simple-blog-api.crew.red/posts/${params.postid}?_embed=comments`
//   );
//   return {
//     props: {
//       serverPost: response.data,
//     },
//   };
// };

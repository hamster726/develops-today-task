import MainLayout from "../layouts/MainLayout";
import PostList from "../components/PostList";
import { useDispatch, useSelector } from "react-redux";
import {getPosts} from "../redux/reducers/reducer";
import { Col, Container, Row } from "reactstrap";
import {useEffect} from "react";

const Index = () => {

  const {loading, posts} = useSelector((state) => ({
    loading: state.isLoaded, posts: state.posts
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [])


  console.log("posts index",posts);
  if (!loading || posts.length === 0) {
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
    <MainLayout>
      <PostList/>
    </MainLayout>
  );
};

export default Index;

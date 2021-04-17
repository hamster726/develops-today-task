import MainLayout from "../layouts/MainLayout";
import PostList from "../components/PostList";
import { useDispatch, useSelector } from "react-redux";
import {getPosts} from "../redux/reducers/reducer";
import { Col, Container, Row } from "reactstrap";
import {useEffect} from "react";

const Index = () => {

  const { posts, isLoaded } = useSelector((state) => ({
    posts: state.posts,
    isLoaded: state.isLoaded,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [])


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
    <MainLayout>
      <PostList data={posts} />
    </MainLayout>
  );
};

export default Index;

import PostItem from "./PostItem";
import {Container, Row, Col} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPosts} from "../redux/reducers/reducer";


const PostList = () => {

  const {loading, posts} = useSelector((state) => ({
    loading: state.isLoaded, posts: state.posts
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [])


  return (
    <Container>
      <Row>
        <Col>
          <h1>Simple blog | DevelopsToday</h1>
        </Col>
      </Row>
      <Row>
          {posts.map(item => <Col sm={{ size: 4}}><PostItem key={item.id} item={item}/></Col>
          ).reverse()}
      </Row>

    </Container>
  )
}




export default PostList;
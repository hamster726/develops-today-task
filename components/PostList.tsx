import PostItem from "./PostItem";
import {Container, Row, Col} from "reactstrap";
import {useSelector} from "react-redux";


const PostList = () => {

  const {posts} = useSelector((state) => ({
    posts: state.posts
  }));

  console.log("posts PostList", posts);


  return (
    <Container>
      <Row>
        <Col>
          <h1>Simple blog | DevelopsToday</h1>
        </Col>
      </Row>
      <Row>
          {posts.map(item => <Col sm={{ size: 4, offset: 0 }}><PostItem key={item.id} item={item}/></Col>
          ).reverse()}
      </Row>

    </Container>
  )
}




export default PostList;
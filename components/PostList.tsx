import PostItem from "./PostItem";
import {useEffect, useState} from "react";
import {Container, Row, Col} from "reactstrap";


const PostList = ({data}) => {

  const [posts, setPosts] = useState(data);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Simple blog | DevelopsToday</h1>
        </Col>
      </Row>
      <Row>
          {posts.map(item => <Col sm={{ size: 4, offset: 0 }}><PostItem key={item.id} data={item}/></Col>
          ).reverse()}
      </Row>

    </Container>
  )
}




export default PostList;
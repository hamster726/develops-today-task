import MainLayout from "../layouts/MainLayout";
import Router from "next/router";

import {Button, Container, Row, Col} from "reactstrap";


const ErrorPage = () => {
  return (
    <MainLayout>
      <Container>
        <Row>
          <Col>
            <h1>Oops...</h1>
            <p>Page not found</p>
            <Button color="primary" onClick={() => Router.push("/")}> Go to main page</Button>
          </Col>
        </Row>
      </Container>

    </MainLayout>
  )
}

export default ErrorPage;
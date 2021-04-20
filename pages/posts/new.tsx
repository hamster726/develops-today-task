import MainLayout from "../../layouts/MainLayout";
import CreatePost from "../../components/CreatePost";
import { Container } from "reactstrap";

const NewPost = () => {
  return (
    <MainLayout title={`Create new post`}>
      <Container>
        <h1>Create new post</h1>
        <CreatePost />
      </Container>
    </MainLayout>
  );
};

export default NewPost;
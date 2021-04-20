import MainLayout from "../../layouts/MainLayout";
import CreatePost from "../../components/CreatePost";
import {Container} from "@material-ui/core";

const NewPost = () => {
  return (
    <MainLayout title={`Create new post`}>
      <Container maxWidth="md">
        <h1>Create new post</h1>
        <CreatePost />
      </Container>
    </MainLayout>
  );
};

export default NewPost;
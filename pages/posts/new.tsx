import Router from "next/router";
import Head from "next/head";
import MainLayout from "../../layouts/MainLayout";
import CreatePost from "../../components/CreatePost";

const NewPost = () => {
  return (
    <MainLayout title={`Create new post`}>
      <h1>Create new post</h1>
      <CreatePost/>
    </MainLayout>
  )
}

export default NewPost;
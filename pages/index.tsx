import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../components/Header.component";
import Post from "../components/Post.component";
import PostList from "../components/PostList.component";
import { ToastContainer } from "react-toastify";
import Button from "../components/Button.component";
import Modal from "../components/Modal.component";
import CreatePostForm from "../components/CreatePostForm.component";
import Layout from "../components/Layout.component";
import BASE_URL from '../constants'
interface Attributes {
  url: string;
  content?: string;
  description?: string;
  title?: string;
  cover_url?: string;
}
interface PostsResponse {
  attributes: Attributes;
}
interface PostsResponse {
  id: number;
  attributes: Attributes;
}

const Home: NextPage = () => {
  const [posts, setPosts] = useState<Array<PostsResponse>>();
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    axios.get(`${BASE_URL}/posts/?populate=*`).then((response) => {
      setPosts(response.data.data);
    });
  }, []);

  if (!posts) return null;

  return (
    <Layout>
      {/* <div>
          <div
            className={ styles.actions +" container flex justify-end invisible md:visible lg:visible xl:visible sm:visible"} >
            <Button onClick={toggleModal} priority="outline">
              Submit Content
            </Button>
          </div>
      </div> */}
        {showModal && (
          <Modal confirmLabel="Submit" handleClose={toggleModal}>
            <>
              <p>Submit an entry below.</p>
              <CreatePostForm></CreatePostForm>
            </>
          </Modal>
        )}
        <div className="m-4 grid lg:grid-cols-3 sm:grid-cols-1 sm:gap-1 gap-4">
          <PostList></PostList>
        </div>
    </Layout>
  );
};

export default Home;

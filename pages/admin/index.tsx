import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Admin.module.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import Banner from "../../components/Banner.component";
import Header from "../../components/Header.component";
import Button from "../../components/Button.component";
import Modal from "../../components/Modal.component";
import CreatePostForm from "../../components/CreatePostForm.component";
import Post from "../../components/Post.component";
import PostList from "../../components/PostList.component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PlaceholderItem from "../../components/PlaceholderItem";
import Dropzone, { useDropzone, FileWithPath } from "react-dropzone";
import Layout from "../../components/Layout.component";
import BASE_URL from '../../constants'

interface Attributes {
  url: string;
  description?: string;
  cover_url?: string;
  content?: string;
  title?: string;
}
interface BookmarksResponse {
  id: number;
  attributes: Attributes;
}

const AdminPage: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState();
  const [url, setUrl] = useState();
  const [content, setContent] = useState();
  const [files, setFiles] = useState<FileWithPath[]>([]);
  const [mediaURL, setMediaURL] = useState<string | null | undefined>();

  useEffect(() => {
    uploadMedia();
  }, [files]);

  const onDrop = (files: FileWithPath[]) => {
    setFiles(files);
  };

  const uploadMedia = () => {
    const formData = new FormData();
    Array.from(files).forEach((image) => {
      formData.append("files", image);
    });
    axios
      .post(`${BASE_URL}/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res);
        setMediaURL(`http://api.digitalbytes.com:1337${res.data[0].url}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createPost = () => {
    const ARTICLE = 1;
    const LINK = 2;

    try {
      axios
        .post(`${BASE_URL}/posts/`, {
          data: {
            title,
            url,
            content,
            background_url: mediaURL,
            type: url ? LINK : ARTICLE,
          },
        })
        .then((response) => {
          console.log("response", response)
          setShowModal(!showModal);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <Banner label="You are viewing this page as an admin"></Banner>

      <div className="flex justify-end">
        <div
          className={
            styles.actions +
            "invisible md:visible right lg:visible xl:visible sm:visible"
          }
        >
          <Button priority="outline">Edit Settings</Button>
          <ToastContainer />
        </div>
      </div>

      <div className="container mt-4mx-auto"></div>
      {showModal && (
        <Modal handleConfirm={createPost} handleClose={toggleModal}>
          <>
            <h1>Create Post</h1>
            <div className={styles.placeholder}>
              {/* Todo - add ability to cmd-v into the drag + drop zone. */}
              <div className="border border-black rounded border-4 p-4">
                {!mediaURL && (
                  <Dropzone onDrop={onDrop}>
                    {({ getRootProps, getInputProps }) => (
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop a photo here, or click to select</p>
                      </div>
                    )}
                  </Dropzone>
                )}

                {mediaURL && (
                  <div
                    style={{
                      height: "300px",
                      width: "100%",
                      backgroundImage: "url(" + mediaURL + ")",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                )}
              </div>
            </div>
            <form className="w-full mt-4 mx-auto">
              <label className="mt-4 text-left ml-0 block">Title</label>
              <div className="flex items-center border-2 rounded border-black py-2">
                <input
                  className="appearance-none bg-transparent block  border-none w-100 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Title"
                  aria-label="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <label className="mt-4 text-left ml-0 block">Url</label>
              <div className="flex items-center border-2 rounded border-black py-2">
                <input
                  className="appearance-none bg-transparent block  border-none w-100 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="URL"
                  aria-label="URL"
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
              <label className="mt-4 text-left ml-0 block">Description</label>
              <div className="flex items-center border-2 rounded border-black py-2">
                <textarea
                  className="appearance-none bg-transparent border-none block w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder="Description"
                  aria-label="description"
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
            </form>
          </>
        </Modal>
      )}
      <div className="mt-4 grid lg:grid-cols-3 sm:grid-cols-1 sm:gap-1 gap-4">
        <PlaceholderItem onClick={toggleModal}></PlaceholderItem>
        <PostList isAdmin={true}></PostList>
      </div>
    </Layout>
  );
};

export default AdminPage;

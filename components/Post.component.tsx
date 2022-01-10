import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styles from "../styles/components/Post.module.scss";
import Modal from "./Modal.component";
import Drawer from "./Drawer.component";
import Tag from "./Tag.component";
import BASE_URL from '../constants'
import { useRouter } from "next/router";

interface PostAttributes {
  name: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
}

interface Post {
  id: number;
  attributes: PostAttributes;
}

interface PostProps {
  id: number;
  //isEditMode: boolean;
  isAdmin: boolean;
  background_url?: string;
  url?: string;
  title?: string;
  content?: string;
  type?: string;
  tags?: Array<string>;
  refetch?: Function;
  refetchById?: Function;
}

export default function Post(props: PostProps) {
  const router = useRouter();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [url, setUrl] = useState(props.url || `/posts/${props.id}`);
  const [title, setTitle] = useState(props.title || "");
  const [content, setContent] = useState(props.content || "");
  const [isEditMode, setIsEditMode] = useState(false);

  const isArticle = props.type === "Article" ? true : false;
  const isLink = !isArticle;

  const handleDelete = () => {
    setShowDeleteModal(!showDeleteModal);
    try {
      axios.delete(`${BASE_URL}/posts/${props.id}`).then(() => {
        toast.success("Deleted successfully", {
          position: "bottom-right",
          theme: "light",
          autoClose: 1500,
          hideProgressBar: true,
          onClose: () => {
             // todo: update this so re-fetching data instead of router.reload();
            router.reload()
          }
        })
      });
    } catch (e) {
      toast.error(e as string, {
        position: "bottom-right",
        theme: "light",
      });
    }
  };

  useEffect(() => {
    if (showDeleteModal) {
      setTimeout(() => {
        setShowDeleteModal(!showDeleteModal);
      }, 10000);
    }
  }, [showDeleteModal]);

  useEffect(() => {
    const id = props.id;
    try {
      axios
        .put(`${BASE_URL}/posts/${id}/`, {
          data: {
            title,
            url,
            content,
          },
        })
        .then(() => {
          
        });
    } catch (e) {
      console.log(e);
    }

    if (showDeleteModal) {
      setTimeout(() => {
        setShowDeleteModal(!showDeleteModal);
      }, 10000);
    }
  }, [title, content, url]);

  const getPostPreview = () => {
    return `url(${props.background_url})`;
  };
  return (
    <>
      {showDeleteModal && (
        <Modal
          confirmLabel="Delete"
          handleConfirm={handleDelete}
          handleClose={() => setShowDeleteModal(!showDeleteModal)}
        >
          Are you sure you'd like to delete this?
        </Modal>
      )}

      <div
        className={styles.PostComponent + " rounded-lg"}
        style={{
          height: "300px",
          backgroundImage: getPostPreview(),
          backgroundSize: "cover",
        }}
      >
        {props.isAdmin && (
          <div className={styles.admin}>
            <i
              onClick={() => setIsEditMode(!isEditMode)}
              className="fas fa-pen text-white"
            ></i>
            <i
              onClick={() => setShowDeleteModal(true)}
              className="fa fa-trash text-white"
            ></i>
          </div>
        )}

        {isArticle && isEditMode && (
          <Drawer
            isOpen={true}
            handleClose={() => {
              setIsEditMode(false);
            }}
          >
            <div>
              <h1 className="text-3xl" >{title}</h1>
              <p>{content}</p>
            </div>
          </Drawer>
        )}

        {isEditMode && isLink && (
          <div className={styles.meta}>
            <div className="formGroup">
              <input
                id="title"
                type="text"
                style={{ width: "100%" }}
                placeholder={props.title}
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className="mt-2 bg-white block p-2 w-full text-black font-medium text-sm"
              />
            </div>
            <div className="formGroup">
              <input
                id="url"
                type="text"
                style={{ width: "100%" }}
                placeholder={props.url}
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                }}
                className="mt-2 bg-white block p-2 w-full text-black font-medium text-sm"
              />
            </div>
            <div className="formGroup">
              <input
                id="content"
                type="text"
                value={content}
                style={{ width: "100%" }}
                placeholder={props.content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
                className="mt-2 bg-white block p-2 w-full text-black font-medium text-sm"
              />
            </div>
          </div>
        )}
        {(isArticle || (isLink && !isEditMode)) && (
          <div className={styles.meta}>
            <a target="_blank" href={url}>
              <h1 className="font-medium text-white text-3xl">{title} </h1>
              <p className="text-sm text-white text-base">{content.substring(0, 200)}</p>
            </a>
          </div>
        )}
      </div>
    </>
  );
}
Post.defaultProps = {
  isAdmin: false,
  isEditMode: false,
};

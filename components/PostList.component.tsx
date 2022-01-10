import axios from "axios";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import { useEffect, useState } from "react";
import styles from "../styles/components/Post.module.scss";
import Post from "./Post.component";
import Tag from "./Tag.component";
import BASE_URL from '../constants'

interface PostListProps {
  isAdmin: boolean;
  background_url?: string;
  url?: string;
  title?: string;
  content?: string;
}

interface CategoryAttributes {
  id: string | number;
  name: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
}

interface Category {
  data: Array<CategoryAttributes>
}

interface Attributes {
  url: string;
  content?: string;
  background_url?: string;
  title?: string;
  type?: any;
}
interface PostResponse {
  id: number;
  attributes: Attributes;
}

export default function PostList(props: PostListProps) {
  const [posts, setPosts] = useState<Array<PostResponse>>([]);
  
  const refetch = () => {
    axios.get(`${BASE_URL}/posts/?populate=*`).then((response) => {
      setPosts(response.data.data);
    });
  }
  
  const refetchById = (id: string | number) => {
    axios.get(`${BASE_URL}/posts/${id}`).then((response) => {
      // a singuar bookmark.
      const data = response.data.data;
      const bookmark  = posts.find(b => b.id === id);
      if (bookmark) {
        bookmark.attributes = data.attributes;
      }
    });
  }

  useEffect(() => {
    axios.get(`${BASE_URL}/posts/?populate=*`).then((response) => {
      setPosts(response.data.data);
    });
  }, []);
  if (!posts) return null;
  
  return (
    <>
      {Boolean(posts.length > 0) &&
        posts.map((b, i) => {
          return (
            <Post
              key={i}
              refetch={refetch}
              refetchById={refetchById}
              id={b.id}
              type={b.attributes?.type?.data?.attributes?.label}
              isAdmin={props.isAdmin}
              url={b.attributes.url}
              title={b.attributes.title}
              background_url={b.attributes.background_url}
              content={b.attributes.content}
            ></Post>
          );
        })}
    </>
  );
}
PostList.defaultProps = {
  isAdmin: false,
};

import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "../../components/Button.component";
import Layout from "../../components/Layout.component";
import Link from "next/link";
import BASE_URL from '../../constants'

interface Post {
  title: string;
  content: string;
}

const PostPage = () => {
  const router = useRouter();
  const id = parseInt(router.query["id"] as string);
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    if (id) {
      getPost();
    }
  }, [id]);

  const getPost = () => {
    axios.get(BASE_URL + `/posts/${id}`).then((response) => {
      setPost(response.data.data.attributes);
      return response;
    });
  };
  return (
    <Layout>
      {post && (
        <article className="py-4">
          <Link href="/">
            <div>
              <i className="fas fa-arrow-left"></i>
              <span className="ml-2">Go Back</span>
            </div>
          </Link>
          <h1 className="my-4 text-3xl">{post.title}</h1>
          {post.content}
        </article>
      )}
    </Layout>
  );
};

export default PostPage;

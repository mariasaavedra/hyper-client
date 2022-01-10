import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import BASE_URL from "../constants";
import Button from "./Button.component";

export default function Header() {
  const router = useRouter();
  
  const pickRandomUrls = (urls: Array<string>) => {
    const url = urls[Math.floor(Math.random()*urls.length)];
    return url;
  }
  const getRandomPost = () => {
    axios.get(`${BASE_URL}/posts`).then((response) => {
      const postsList = response.data.data;
      const urls = postsList.map((post: any) => {
        return post.attributes.url
      })
      const url = pickRandomUrls(urls);
      router.push(url)
    })
  }


  return (
    <div className="flex items-center justify-between ml-4 mt-5 md:mt-5 lg:mt-10">
      <div>
        <Link href="/">
          <img width="150px" src="/images/logo-black.png"></img>
        </Link>
        <h3 className="mt-4 text-xs font-weight-700">A garden of digital delights.</h3>
      </div>
      <div className="mr-4">
        <Button onClick={() => {
           getRandomPost();
        }} display="inline-flex">Random Post</Button>
      </div>
    </div>
  );
}

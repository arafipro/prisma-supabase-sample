"use client";

import { getAllPosts } from "@/lib/blogApi";
import { useEffect, useState } from "react";

export default function Page() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const data = await getAllPosts();
      setPosts(data.posts);
    }
    fetchPosts();
  }, []);
  return (
    <>
      {posts.map((post: Post) => (
        <div key={post.id} className="p-4">
          <h1>Title:{post.title}</h1>
          <p>Content:{post.content}</p>
        </div>
      ))}
    </>
  );
}

"use client";

import Form from "@components/Form";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const EditPost = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    title: "",
    description: "",
    tag: "",
    link: "",
    image: "",
  });
  const router = useRouter();
  const searchParams = useSearchParams();
  const postId = searchParams.get("id");
  useEffect(() => {
    const getPostDetails = async () => {
      const response = await fetch(`/api/post/${postId}`);
      const data = await response.json();
      setPost({
        title: data.title,
        description: data.description,
        tag: data.tag,
        link: data.link,
        image: data.image,
      });
    };
    if (postId) getPostDetails();
  }, [postId]);

  const updatePost = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!postId) return alert("Post Id not found");

    try {
      const res = await fetch(`/api/post/${postId}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: post.title,
          description: post.description,
          tag: post.tag,
          link: post.link,
          image: post.image,
        }),
      });
      if (res.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="تغیر"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePost}
    />
  );
};

export default EditPost;

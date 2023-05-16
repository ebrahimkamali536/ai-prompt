"use client";

import Form from "@components/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreatePost = () => {
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    title: "",
    description: "",
    tag: "",
    link: "",
    image: "",
    linkError: "",
  });
  const router = useRouter();
  const createPost = async (e) => {
    e.preventDefault();
    if(!/^(ftp|http|https):\/\/[^ "]+$/.test(post.link)) {
      setPost(prev => ({...prev, linkError: "لینک نا معتبر است"}))
    } else {
    setSubmitting(true);
    try {
      const res = await fetch("/api/post/new", {
        method: "POST",
        body: JSON.stringify({
          title: post.title,
          userId: session?.user.id,
          description: post.description,
          tag: post.tag,
          image: post.image,
          link: post.link,
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
    }
  };
  return (
    <Form
      type="ارسال"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPost}
    />
  );
};

export default CreatePost;

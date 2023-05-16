"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Tags from "./Tags";

const PostDetails = () => {
  const [data, setData] = useState({ post: null, loading: true, error: null });
  const params = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setData((prev) => ({ ...prev, loading: true }));
        const res = await fetch(`/api/post/${params.postId}`);
        const data = await res.json();
        setData((prev) => ({ ...prev, post: data, loading: false }));
      } catch (error) {
        setData((prev) => ({ ...prev, error, loading: false }));
      }
    };
    fetchPost();
  }, []);

  if (data.loading) return null

  return (
    <div className="mb-10 lg:max-w-screen-xl">
      <Image
        src={data.post.image}
        alt={data.post.title}
        width={1000}
        height={1000}
        className="text-center mx-auto"
      />
      <div className="flex items-center gap-x-2.5 text-white mt-5">
        <Image
          src={data.post.creator?.image}
          width={37}
          height={37}
          className="rounded-full"
          alt="profile"
        />
        <p>{data.post.creator?.username}</p>
      </div>
      <div className="flex flex-col mt-10 text-white">
        <h1 className="text-2xl mb-6 text-center font-bold">
          {data.post.title}
        </h1>
        <p className="text-gray-300 mb-5">{data.post.description}</p>
        <div className="flex flex-col gap-y-2.5 mb-5">
          <span>تگ ها:</span>
          <Tags tag={data.post.tag} />
        </div>
        <p>
          <span className="font-bold">لینک دانلود:</span>{" "}
          <Link className="text-blue-500" href={data.post.link || ""}>
            {data.post.link}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PostDetails;

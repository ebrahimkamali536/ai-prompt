"use client";

import { truncate } from "@utils/function";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const PostCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const [copied, setCopied] = useState("");
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <div className="post_card">
      <div className="h-32 mb-2">
        <Image
          src={post.image}
          width={1000}
          height={1000}
          alt={post.title}
          className="w-full max-h-full"
        />
      </div>
      <Link href={`/post/${post._id}`}>
        <p className="text-center font-bold md:text-lg">{post.title}</p>
      </Link>
      <p className="desc mb-2">{truncate(post.description, 120)}</p>
      <p
        onClick={() => handleTagClick && handleTagClick(post.tag)}
        className="text-sm text-blue-500 cursor-pointer mb-4"
      >
        #{post.tag}
      </p>
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={post.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-semibold text-gray-900">
              {post.creator.username}
            </h3>
            <p className="text-sm text-gray-500">{post.creator.email}</p>
          </div>
        </div>
      </div>

      {session?.user.id === post.creator._id && pathname == "/profile" && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-300 pt-3">
          <p
            className="text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            تغیر
          </p>
          <p
            className="text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            حذف
          </p>
        </div>
      )}
    </div>
  );
};

export default PostCard;

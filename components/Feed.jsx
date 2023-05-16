"use client";
import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { toast } from "react-toastify";

const PostCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 post_layout">
      {data.map((post) => (
        <PostCard key={post._id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const handleSearch = (e) => {};
  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch("/api/post");
      const data = await response.json();
      setPosts(data);
    };
    fetchPost();
  }, []);

  return (
    <section className="flex flex-col my-16 w-full lg:max-w-screen-xl">
      <form className="relative w-full flex-center max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="جستجو تگ، فیلم و نام سریال"
          value={searchText}
          onChange={handleSearch}
          required
          className="search_input peer"
        />
      </form>
      <PostCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;

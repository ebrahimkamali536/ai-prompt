import React from "react";
import PostCard from "./PostCard";

const Profile = ({ name, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full mb-10">
      <h1 className="head_text">
        <span className="text-white">پروفایل {name}</span>
      </h1>
      <div className="mt-10 post_layout">
        {data.map((post) => (
          <PostCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;

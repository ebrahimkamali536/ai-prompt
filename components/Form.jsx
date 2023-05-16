import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  const [ImageUserAdded, setImageUserAdded] = useState("");
  const handler = (event) => {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      setPost((prev) => ({ ...prev, image: reader.result }));
      setImageUserAdded(reader.result);
    };
  };
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left mb-6">
        <span className="text-primary">{type} </span>
        دیدگاه
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mt-19 w-full max-w-4xl flex flex-col md:flex-row gap-7 items-stretch form_style"
      >
        <div className="w-full md:w-1/2 flex-1">
          <label>
            <span className="font-semibold text-base text-gray-700">عنوان</span>
            <input
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              placeholder="عنوان دیدگاه"
              required
              className="form_input mb-2.5"
            />
          </label>
          <label>
            <span className="font-semibold text-base text-gray-700">تگ ها</span>
            <input
              value={post.tag}
              onChange={(e) => setPost({ ...post, tag: e.target.value })}
              placeholder="تگ های مرتبط"
              required
              className="form_input mb-2.5"
            />
          </label>
          <label className="relative">
            <span className="font-semibold text-base text-gray-700">
              لینک دانلود
            </span>
            <input
              value={post.link}
              onChange={(e) => setPost({ ...post, link: e.target.value })}
              placeholder="لینک های دانلود"
              required
              className="form_input mb-6"
            />
            {post.linkError && <span className="absolute right-0 text-xs bottom-7 w-28 text-red-500 font-bold">{post.linkError}</span>}
          </label>
          <label>
            <input
              type="file"
              name="myImage"
              accept="image/*"
              multiple={false}
              onChange={handler}
              required
            />
            <span className="image_upload_input">افزودن عکس</span>
          </label>
          <div className="mt-4">
            {ImageUserAdded && (
              <Image
                src={ImageUserAdded}
                width={200}
                height={200}
                alt="example"
              />
            )}
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between w-full md:w-1/2 gap-2">
          <textarea
            value={post.description}
            onChange={(e) => setPost({ ...post, description: e.target.value })}
            placeholder="نطراتو راجب فیلمی که دیدی اینجا بنویس"
            required
            className="form_textarea flex-1"
          />
          <div className="flex items-center gap-x-4">
            <button
              type="submit"
              disabled={submitting}
              className="px-5 py-1.5 text-sm bg-primary rounded-full text-white"
            >
              {submitting ? `${type}...` : type}
            </button>
            <Link href="/" className="text-gray-500 text-sm">
              انصراف
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;

{
  /* <label>
        
          <input
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            placeholder="عنوان فیلم"
            required
            className="form_input mb-4"
          />
          
        </label>
        <label>
          <span className="font-semibold text-base text-gray-700">
            تگ ها
            <span className="font-normal">(#2022, #comedy, #پوست_شیر)</span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#تگ"
            required
            className="form_input"
          />
        </label> */
}

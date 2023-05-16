import React from "react";

const Tags = ({ tag }) => {
  const createTag = (staring) => {
    const removeHashtag = staring?.replace("#", "");
    const splitTag = removeHashtag?.split("-");
    return splitTag;
  };
  let string = "hi my name is ebrahim";
  let newString = string.trim().replace(/\s+/g, "_");
  console.log(newString);
  return (
    <div className="flex gap-2">
      {createTag(tag)?.map((item, index) => {
        const removeSpace = item.trim();
        const addUnderScore = removeSpace.trim().replace(/\s+/g, "_");
        return (
          <span key={index} className="bg-slate-800 rounded-md px-2 py-1.5">
            #{addUnderScore}
          </span>
        );
      })}
    </div>
  );
};

export default Tags;

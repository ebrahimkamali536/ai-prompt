import { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  tag: {
    type: String,
    required: [true, "Tag is required"],
  },
  link: {
    type: String,
    required: [true, "Link is required"],
  },
  image: {
    type: String,
    required: [true, "Image is required"]
  }
});

const Post = models.Post || model("Post", PostSchema);
export default Post;

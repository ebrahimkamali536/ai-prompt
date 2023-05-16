import Post from "@models/post";
import { connectToDB } from "@utils/database";

export const POST = async (req) => {
  const { title, description, tag, link, image, userId } = await req.json()

  try {
    await connectToDB();
    const newPost = new Post({
      creator: userId,
      title,
      description,
      tag,
      link,
      image,
    });
    await newPost.save();
    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    return new Response(500, "Failed to upload form")
  }
};

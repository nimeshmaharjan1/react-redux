import React from "react";
import { useSelector } from "react-redux";
import AddPost from "./AddPost";
import { selectAllPosts } from "./postsSlice";
const PostList = () => {
  const posts = useSelector(selectAllPosts);
  const renderedPosts =
    posts &&
    posts.map((post) => (
      <div key={post.id} className="card w-96 bg-base-100 shadow-xl mb-10">
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.content.substring(0, 100)}</p>
          <p>{post.user}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    ));
  return (
    <div>
      <div className="flex justify-center items-center gap-5 my-4 mt-6">
        <h2 className=" text-6xl font-bold text-center">Posts</h2>
        <AddPost></AddPost>
      </div>

      <div className="flex flex-col items-center justify-center">
        {renderedPosts}
      </div>
    </div>
  );
};

export default PostList;

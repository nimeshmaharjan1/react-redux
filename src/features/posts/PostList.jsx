import React from "react";
import { useSelector } from "react-redux";
import AddPost from "./AddPost";
import PostAuthor from "./PostAuthor";
import { selectAllPosts } from "./postsSlice";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";
const PostList = () => {
  const posts = useSelector(selectAllPosts);
  const renderedPosts =
    posts &&
    posts.map((post) => (
      <div
        key={post.id}
        className="card w-full
			bg-base-100 shadow-xl"
      >
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.content.substring(0, 100)}</p>
          <PostAuthor userId={post.userId}></PostAuthor>
          <TimeAgo timestamp={post.createdAt}></TimeAgo>
          <ReactionButton post={post} />
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    ));
  return (
    <div>
      <div className="flex gap-5 my-4 mt-6">
        <h2 className=" text-5xl font-bold">Posts</h2>
        <AddPost></AddPost>
      </div>

      <div className="flex flex-wrap gap-5 mt-4">{renderedPosts}</div>
    </div>
  );
};

export default PostList;

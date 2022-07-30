import { useDispatch } from "react-redux";
import { addReaction } from "./postsSlice";
import React from "react";

const ReactionButton = ({ post }) => {
  const dispatch = useDispatch();
  const reactions = {
    thumbsUp: "👍",
    wow: "😲",
    heart: "❣️",
    rocket: "🚀",
    coffee: "☕",
  };
  const reactionButton = Object.entries(reactions).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reaction-button mt-1 mr-2 btn hover:btn-primary"
        onClick={() =>
          dispatch(addReaction({ postId: post.id, reaction: name }))
        }
      >
        <span
          style={{ fontSize: "1.2rem", marginLeft: "-0.2rem" }}
          className="mr-1"
        >
          {emoji}
        </span>
        {post.reactions[name]}
      </button>
    );
  });
  return <div>{reactionButton}</div>;
};

export default ReactionButton;

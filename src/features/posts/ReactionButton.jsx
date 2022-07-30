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
        className="reaction-button"
        onClick={dispatch(addReaction({ postId: post.id, reaction: name }))}
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });
  return <div>{reactionButton}</div>;
};

export default ReactionButton;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "./postsSlice";
const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (title && content) {
      dispatch(addPost(title, content));
    }
    setContent("");
    setTitle("");
  };
  return (
    <section>
      <label for="my-modal" className="btn modal-button">
        open modal
      </label>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add Post</h3>
          <form>
            <div className="form-control py-4">
              <label className="input-group">
                <span className="text-xl py-2">Title</span>
                <input
                  type="text"
                  id="title"
                  name="postTitle"
                  onChange={onTitleChange}
                  value={title}
                />
              </label>
            </div>

            <div className="form-control">
              <label className="input-group">
                <span className="text-lg py-2">Content</span>
                <textarea
                  type="text"
                  id="content"
                  name="postContent"
                  onChange={onContentChange}
                  value={content}
                />
              </label>
            </div>
          </form>
          <div className="modal-action ">
            <label for="my-modal" className="btn" onClick={handleSubmit}>
              Submit
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddPost;

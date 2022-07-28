import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "./postsSlice";
import { useSelector } from "react-redux";
import { getAllUsers } from "../users/userSlice";
const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onUserChange = (e) => setUserId(e.target.value);
  const dispatch = useDispatch();
  const users = useSelector(getAllUsers);
  const userOptions = users.map((user) => (
    <option value={user.id} key={user.id}>
      {user.name}
    </option>
  ));
  const handleSubmit = () => {
    if (title && content) {
      dispatch(addPost(title, content, userId));
    }
    setContent("");
    setTitle("");
  };
  return (
    <section>
      <label htmlFor="my-modal" className="btn modal-button">
        open modal
      </label>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add Post</h3>
          <form>
            <div className="form-control py-4">
              <label className="input-group">
                <span className="text-lg py-2">Title</span>
                <input
                  type="text"
                  id="title"
                  className="px-2 py-1"
                  name="postTitle"
                  onChange={onTitleChange}
                  value={title}
                />
              </label>
            </div>

            <div className="form-control">
              <label className="input-group">
                <span className="text-md py-2">Content</span>
                <textarea
                  type="text"
                  id="content"
                  className="px-2 py-1"
                  name="postContent"
                  onChange={onContentChange}
                  value={content}
                />
              </label>
            </div>
            <div className="form-control my-4">
              <div className="input-group">
                <span className="text-md py-2">Users</span>
                <select className="select select-bordered">
                  <option disabled value={null}>
                    Pick category
                  </option>
                  {userOptions}
                </select>
              </div>
            </div>
          </form>
          <div className="modal-action ">
            <label htmlFor="my-modal" className="btn" onClick={handleSubmit}>
              Submit
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddPost;

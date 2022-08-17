import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content));

      setTitle("");
      setContent("");
    }
  };

  return (
    <section>
      <h2>Add a new post</h2>
      <form>
        <label htmlFor="postTitle">Post title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChange}
        />
        <label htmlFor="postContent">Post content</label>
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={onContentChange}
        ></textarea>
        <button type="button" onClick={onSavePostClicked}>
          Save post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;

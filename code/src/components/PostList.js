import { Link } from "react-router-dom";

import classes from "./PostList.module.css";

function PostList({ posts }) {
  //for preventing .map not a function error

  return (
    <ul className={classes.list}>
      {Array.isArray(posts)
        ? posts.map((post) => (
            <li key={post.id}>
              <Link to={post.id.toString()}>{post.title}</Link>
            </li>
          ))
        : null}
    </ul>
  );
}

export default PostList;

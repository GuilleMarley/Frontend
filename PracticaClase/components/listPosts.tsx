import { FunctionComponent } from "preact";
import { Content } from "../types.ts";

const PostList: FunctionComponent<{ posts: Content[] }> = (
    { posts } = { posts: [] }, 
  ) => {
  
    return (
      <div class="postList">
        <h1>Post list</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <span>{post.title}:</span>
              <span> {post.author}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default PostList;
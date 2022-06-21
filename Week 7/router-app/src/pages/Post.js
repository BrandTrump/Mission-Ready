import { useParams } from "react-router-dom";

const Post = () => {
  const params = useParams();
  return <div>This page will show post number: {params.postID}</div>;
};
export default Post;

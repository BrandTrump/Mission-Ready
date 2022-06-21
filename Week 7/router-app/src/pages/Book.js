import { useParams } from "react-router-dom";

const Post = () => {
  const params = useParams();
  return <div>You are about to access book: {params.bookID}</div>;
};
export default Post;

import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <div className="home">Home Page</div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link to="/signup">Sign-up</Link>
      </div>
    </div>
  );
};

export default Home;

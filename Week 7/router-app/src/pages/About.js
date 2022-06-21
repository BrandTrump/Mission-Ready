import { Link } from "react-router-dom";

const About = (props) => {
  return (
    <div>
      <div className="about">About Page</div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default About;

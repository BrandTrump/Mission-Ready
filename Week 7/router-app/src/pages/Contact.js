import { Link } from "react-router-dom";

const Contact = (props) => {
  return (
    <div>
      <div className="contact">Contact Page</div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Contact;

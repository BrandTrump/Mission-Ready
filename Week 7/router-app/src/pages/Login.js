import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <div>
      <div className="login">Login Page</div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Login;

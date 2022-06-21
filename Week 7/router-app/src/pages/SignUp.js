import { Link } from "react-router-dom";

const SignUp = (props) => {
  return (
    <div>
      <div className="sign-up">Sign-Up Page</div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
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

export default SignUp;

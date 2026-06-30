import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";
import type { FC } from "react";

interface SignUpProps {
  formType?: string;
}

const SignUp: FC<SignUpProps> = () => {
  return (
    <div>
      <h2>Sign Up</h2>
      <AuthForm formType="signup" />
      <Link to="/signin">Already have an account? Sign In</Link>
    </div>
  );
};

export default SignUp;

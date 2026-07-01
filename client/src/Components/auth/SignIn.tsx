import type { FC } from "react";
import AuthForm from "./AuthForm";
import signinImage from "../../assets/images/signin.gif";

interface SignInProps {
  formType?: string;
}

const SignIn: FC<SignInProps> = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="hidden lg:flex justify-center">
          <img 
            src={signinImage} 
            alt="Sign In Illustration" 
            className="max-w-md w-full h-auto"
          />
        </div>

        {/* Form Section */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white p-8 rounded-lg">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Login
            </h1>
            <p className="text-gray-600 mb-8">
              Please Login to continue.
            </p>

            <AuthForm formType="signin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
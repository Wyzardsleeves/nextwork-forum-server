import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface AuthFormProps {
  formType?: string;
}

const AuthForm = ({ formType }: AuthFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      mobileNumber,
      password,
      formType,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Mobile Number Input */}
      <div>
        <input
          type="tel"
          placeholder="Enter your Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Password Input with Toggle */}
      <div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible className="w-5 h-5" />
            ) : (
              <AiOutlineEye className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Forgot Password Link */}
      <div className="flex justify-end">
        <Link
          to="#"
          className="text-sm text-gray-900 font-medium hover:text-blue-600"
        >
          Forgot Password?
        </Link>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full transition duration-200"
      >
        {formType === "signup" ? "Sign Up" : "Log In"}
      </button>

      {/* Registration Link */}
      <div className="text-center pt-4">
        <p className="text-gray-600 text-sm">
          {formType === "signup" ? "Already have an account? " : "Don't have an account? "}
          <Link
            to={formType === "signup" ? "/signin" : "/signup"}
            className="text-blue-600 font-medium hover:text-blue-700"
          >
            {formType === "signup" ? "Sign In" : "Register Now"}
          </Link>
        </p>
      </div>
    </form>
  );
};

export default AuthForm;
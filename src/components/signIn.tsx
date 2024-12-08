// src/pages/sign-in.tsx or src/pages/sign-in/index.tsx
import Link from 'next/link';

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Sign-In Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign In</h2>

        {/* Sign-In Form */}
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="rememberMe"
              className="w-4 h-4 border-gray-300 text-orange-500 focus:ring-2 focus:ring-orange-500"
            />
            <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">Remember Me</label>
          </div>

          {/* Sign-In Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 focus:outline-none"
          >
            Sign In
          </button>

          {/* Forgot Password Link */}
          <div className="mt-4 text-center">
            <Link href="/forgot-password" className="text-sm text-gray-500 hover:text-gray-700">
              Forgot Password?
            </Link>
          </div>

          {/* Social Sign In Buttons */}
          <div className="mt-6 flex flex-col gap-4">
            <button
              className="w-full flex items-center justify-center bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 focus:outline-none"
            >
              Sign In with Google
            </button>
            <button
              className="w-full flex items-center justify-center bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 focus:outline-none"
            >
              Sign In with Apple
            </button>
          </div>
        </form>

        {/* Sign Up Link */}
        <div className="mt-6 text-center text-sm text-gray-500">
         {` Don't have an account?`}
          <Link href="/sign-up" className="text-orange-500 hover:text-orange-600">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;

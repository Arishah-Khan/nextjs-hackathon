"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { auth } from "../../firebaseConfig";
import { toast, ToastContainer } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import toast CSS for styling
import { Circles } from "react-loader-spinner"; // Import spinner component for loading state

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [firebaseReady, setFirebaseReady] = useState(false); // State to check if we're on the client-side
  const router = useRouter(); // Initialize useRouter

  // Run Firebase-related code only in the client-side (in useEffect)
  useEffect(() => {
    if (typeof window !== "undefined") {
      setFirebaseReady(true); // Client-side, so we can initialize Firebase
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset error state

    if (!firebaseReady) {
      return; // Firebase hasn't been initialized yet
    }

    try {
      await signInWithEmailAndPassword(auth, email, password); // Sign in user
      // Show success toast
      toast.success("Signed in successfully!", {
        autoClose: 3000,
      });
      // Redirect to home page upon successful sign-in
      router.push("/"); // Redirect to home page
    } catch (err: any) {
      setError(err.message); // Set error message
      setLoading(false); // Stop loading
      // Show error toast
      toast.error("Invalid credentials. Please try again.", {
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign In</h2>

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Sign-In Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 focus:outline-none"
            disabled={loading || !firebaseReady}
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <Circles height="24" width="24" color="#fff" />
              </div>
            ) : (
              "Sign In"
            )}
          </button>

          {/* Error Message */}
          {error && <div className="text-red-500 mt-4">{error}</div>}

          {/* Forgot Password Link */}
          <div className="mt-4 text-center">
            <Link href="/forgot-password" className="text-sm text-gray-500 hover:text-gray-700">
              Forgot Password?
            </Link>
          </div>

          {/* Sign Up Link */}
          <div className="mt-6 text-center text-sm text-gray-500">
            {` Don't have an account?`}
            <Link href="/signUp" className="text-orange-500 hover:text-orange-600">
              Sign Up
            </Link>
          </div>
        </form>
      </div>

      {/* Toast Notifications Container */}
      <ToastContainer position="bottom-left" />
    </div>
  );
};

export default SignInPage;

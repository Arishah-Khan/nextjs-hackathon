"use client";
import { useState } from "react";
import { signIn } from "next-auth/react"; // Import signIn from NextAuth.js
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BeatLoader } from "react-spinners"; // Import loader
import Link from "next/link";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Handle sign-up form submission (email/password)
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || !fullName) {
      setError("All fields are required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true); // Show loader

    try {
      // Sign up using NextAuth (email/password)
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setError(res.error);
        toast.error(res.error); // Show error via toast
      } else {
        toast.success("Sign up successful! Please check your email for verification.");
        router.push("/login"); // Redirect to login page after successful sign-up
      }
    } catch (error) {
      setError("An error occurred while signing up.");
      toast.error("An error occurred while signing up.");
    } finally {
      setLoading(false); // Hide loader
    }
  };

  // Handle provider sign-in (Google)
  const handleProviderSignIn = async (provider: string) => {
    setLoading(true);
    try {
      const res = await signIn(provider, { redirect: true });
    } catch (error) {
      setError("An error occurred with provider sign-in.");
      toast.error("An error occurred with provider sign-in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-8">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>

        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 focus:outline-none"
            disabled={loading}
          >
            {loading ? <BeatLoader color="white" size={10} /> : "Sign Up"}
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-500">
          <p>Or sign up with</p>
          <div className="mt-2">
            <button
              onClick={() => handleProviderSignIn("google")}
              className="w-full bg-red-500 text-white py-3 rounded-md font-semibold hover:bg-red-600 focus:outline-none"
            >
              Sign Up with Google
            </button>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-orange-500 hover:text-orange-600">
            Login
          </Link>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default SignUpPage;

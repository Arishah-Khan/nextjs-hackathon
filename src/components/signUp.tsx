"use client"
import { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebaseConfig"; // Firebase config import

import { useRouter } from "next/navigation";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig"; // Import Firestore config
import Link from "next/link";
import uploadImageToCloudinary from "@/lib/cloudinaryUtils";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState("");
  const router = useRouter();

  // Handle sign-up form submission
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

    try {
      // Handle image upload if present
      let imageUrl = "";
      if (image) {
        imageUrl = await uploadImageToCloudinary(image);
      }

      // Create the user with Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Send email verification
      await sendEmailVerification(user);
      setError("Please check your email to verify your account");

      // Save user data to Firestore
      await setDoc(doc(db, "users", user.uid), {
        fullName,
        email,
        profileImageUrl: imageUrl, // Save image URL in Firestore
      });

      // Redirect to login page
      router.push("/login");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
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

          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Profile Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
              onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 focus:outline-none"
          >
            Sign Up
          </button>

          <div className="mt-4 text-center">
            <Link href="/forgot-password" className="text-sm text-gray-500 hover:text-gray-700">
              Forgot Password?
            </Link>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/login" className="text-orange-500 hover:text-orange-600">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;

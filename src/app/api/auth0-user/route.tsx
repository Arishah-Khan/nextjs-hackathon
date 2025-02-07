import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";
import { getSession } from "@auth0/nextjs-auth0";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-02-01",
  token: process.env.SANITY_API_TOKEN!,
});

const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL!;

export async function POST(req: Request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ success: false, message: "Not authenticated" }, { status: 401 });
    }

    const { user } = session;
    const { name, email } = user;

    // **Check if user already exists in Sanity**
    const existingUser = await client.fetch(`*[_type == "user" && email == $email][0]`, { email });

    // **Admin Check**
    let role = "Customer";
    if (email === ADMIN_EMAIL) {
      role = "Admin"; // ✅ Admin Role Set
    }

    if (existingUser) {
      // ✅ **User already exists, update the user**
      const updatedUser = await client.patch(existingUser._id).set({ name, role }).commit();
      return NextResponse.json({ success: true, message: "User updated", user: updatedUser });
    }

    // ✅ **If user doesn't exist, create a new one**
    const newUser = await client.create({
      _type: "user",
      name,
      email,
      role,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, user: newUser });
  } catch (error) {
    console.error("Sanity User Save Error:", error);
    return NextResponse.json({ success: false, message: "Error saving user" }, { status: 500 });
  }
}

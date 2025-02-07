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

    if (existingUser) {
      return NextResponse.json({ success: false, message: "User already exists" });
    }

    // Save new user in Sanity
    const newUser = await client.create({
      _type: "user",
      name,
      email,
      role: "Customer",
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, user: newUser });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error saving user" }, { status: 500 });
  }
}

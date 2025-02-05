import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-02-01",
  token: process.env.SANITY_API_TOKEN!,
});

export async function GET() {
  try {
    const reviews = await client.fetch(`*[_type == "review"] | order(createdAt desc)`);
    return NextResponse.json(reviews, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { name, email, rating, comment } = await req.json();
    const newReview = await client.create({
      _type: "review",
      name,
      email,
      rating,
      comment,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json(newReview, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to submit review" }, { status: 500 });
  }
}

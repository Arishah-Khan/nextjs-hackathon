// lib/getUserByEmail.ts
import { client } from "@/sanity/lib/client"; // Import your Sanity client

// Function to get a user by their email from Sanity
export async function getUserByEmail(email: string) {
  try {
    const user = await client.fetch('*[_type == "user" && email == $email]', { email });
    return user[0];  // Assuming user is an array, return the first result
  } catch (error) {
    console.error('Error fetching user by email', error);
    return null;  // If there's an error, return null
  }
}

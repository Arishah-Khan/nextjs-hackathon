// lib/auth.ts
import bcrypt from 'bcryptjs';

// Function to verify the entered password against the stored hashed password
export async function verifyPassword(enteredPassword: string, storedHashedPassword: string) {
  try {
    const isMatch = await bcrypt.compare(enteredPassword, storedHashedPassword);
    return isMatch;
  } catch (error) {
    console.error('Error verifying password', error);
    return false;
  }
}

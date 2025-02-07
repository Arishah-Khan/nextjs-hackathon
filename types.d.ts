// types.d.ts
import { User as NextAuthUser } from "next-auth";

declare module "next-auth" {
  interface User {
    email: string;
    id?: string; // Optional: You can include other fields like `id` if you need them
  }

  interface Session {
    user: {
      email: string;
      // Add other session-related fields here if needed
    };
  }
}

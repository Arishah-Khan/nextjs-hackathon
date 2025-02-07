"use client"; 

import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";

export default function SaveUserToSanity() {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      fetch("/api/auth0-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
        }),
      });
    }
  }, [user]);

  return null;
}

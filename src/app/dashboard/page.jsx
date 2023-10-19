"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

function DashboardPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  return (
    <div className="flex flex-col space-y-4">
      <span>Dashboard</span>
      <p>Hi: {JSON.stringify(session)}</p>

      <button
        className="border rounded p-2 "
        onClick={() => {
          signOut({
            callbackUrl: "/",
          });
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default DashboardPage;

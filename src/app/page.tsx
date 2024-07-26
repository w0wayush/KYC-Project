"use client";

import React from "react";
import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  return (
    <main className="h-screen relative flex items-center justify-center flex-col ">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0"></div>
      <h1>Welcome to the KYC Application</h1>
      <Link href="/kyc-form">
        <Button variant="default" className="m-2">
          Fill KYC Application Form
        </Button>
      </Link>
    </main>
  );
}

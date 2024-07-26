"use client";

import React from "react";
import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="h-screen flex items-center justify-center flex-col ">
      <h1>Welcome to the KYC Application</h1>
      <Button
        variant="default"
        className="m-2"
        onClick={() => router.push("/kyc-form")}
      >
        Fill KYC Application Form
      </Button>
    </main>
  );
}

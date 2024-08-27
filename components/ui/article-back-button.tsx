"use client";
import React from "react";
import { Button } from "./button";
import { TiChevronLeft } from "react-icons/ti";
import { useRouter } from "next/navigation";
export const ArticleBackButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/#articles")}
      variant="outline"
      className="flex flex-row items-center gap-2"
    >
      <TiChevronLeft />
      Back
    </Button>
  );
};

"use client";
import Word from "@/components/Word";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const encodedSearchQuery = encodeURI("keyboard");

  router.push(`/search/${encodedSearchQuery}`);
  return <></>;
}

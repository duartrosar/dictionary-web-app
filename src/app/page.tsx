import { redirect } from "next/navigation";

export default function Home() {
  const encodedSearchQuery = encodeURI("keyboard");

  redirect(`/search/${encodedSearchQuery}`);
}

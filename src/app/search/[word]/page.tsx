import { getDefinition } from "@/app/libs/getDefinition";
import React from "react";
import Word from "@/components/Word";

const SearchPage = async ({ params }: { params: { word: string } }) => {
  // const search = useSearchParams();
  // const searchQuery = search ? search.get("q") : null;
  const decodedWord = decodeURI(params.word);
  const wordDefinition: WordDefinition = await getDefinition(decodedWord);

  return <Word wordDefinition={wordDefinition} />;
};

export default SearchPage;

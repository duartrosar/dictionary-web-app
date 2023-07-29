import { getDefinition } from "@/app/libs/getDefinition";
import { Definition } from "@/types/Definition";
import React from "react";
import Word from "@/components/Word";

const SearchPage = async ({ params }: { params: { word: string } }) => {
  // const search = useSearchParams();
  // const searchQuery = search ? search.get("q") : null;
  const decodedWord = decodeURI(params.word);
  const definition: Definition = await getDefinition(decodedWord);

  return <Word definition={definition} />;
};

export default SearchPage;

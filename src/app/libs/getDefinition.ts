import { Definition } from "@/types/Definition";
import { Phonetic } from "@/types/Phonetic";

export async function getDefinition(word: string): Promise<Definition> {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
  );

  if (!response.ok) {
    throw new Error("No Definitions Found");
  }

  const data = await response.json();

  // Check if the phonetics array has at least one element and contains the 'text' property
  const phoneticsArray: Phonetic[] =
    data[0]?.phonetics.filter((p: Phonetic) => p.text) || [];

  // Return the cleaned-up Definition object
  return {
    word: data[0]?.word || "",
    phonetics: phoneticsArray,
  };
}

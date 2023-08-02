export async function getDefinition(word: string): Promise<WordDefinition> {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
  );

  if (!response.ok) {
    throw new Error("No Definitions Found");
  }

  const data = await response.json();

  // Check if the phonetics array has at least one element and contains the 'text' property
  let phoneticsArray: Phonetic[] =
    data[0]?.phonetics.filter((p: Phonetic) => p.text && p.audio) || [];

  // if (phoneticsArray.length === 0) {
  //   const newPhonetic: Phonetic = {
  //     text: "No Phonetics Found",
  //     audio: "No Audio Found",
  //   };
  //   phoneticsArray.push(newPhonetic);
  // }

  console.log(data[0].meanings);
  // Return the cleaned-up Definition object
  return {
    word: data[0]?.word || "",
    phonetics: phoneticsArray,
    meanings: data[0].meanings,
    sourceUrls: data[0]?.sourceUrls || ["No Source Available"],
  };
}

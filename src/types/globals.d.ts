export {};

declare global {
  interface Phonetic {
    text: string;
    audio: string;
  }

  interface Definition {
    definition: string;
    synonyms: string[];
    antonyms: string[];
    example?: string;
  }

  interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
    synonyms: string[];
    antonyms: string[];
  }

  interface WordDefinition {
    word: string;
    phonetics: Phonetic[];
    meanings: Meaning[];
    sourceUrls: string[];
  }
}

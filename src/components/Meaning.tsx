import React from "react";

export default function Meaning({ meaning }: { meaning: Meaning }) {
  return (
    <>
      <div className="flex items-center mt-8 md:mt-10 mx-auto max-w-[736px] gap-4 md:gap-5">
        <p className="text-lg italic font-bold text-dark-600 md:text-2xl dark:text-white">
          {meaning.partOfSpeech}
        </p>
        <div className="w-full h-0 border-t border-dark-300 dark:border-dark-500"></div>
      </div>
      <div className="mx-auto max-w-[736px] mt-8 md:mt-10">
        <h3 className="text-dark-400 md:text-xl">Meaning</h3>
        <ul className="flex flex-col gap-3 pl-[18px] mt-4 md:mt-6 md:pl-10 list-disc marker:text-primary text-[15px] md:text-lg text-dark-600 dark:text-white">
          {meaning.definitions.slice(0, 3).map((definition, key) => (
            <li key={key} className="pt-3 pl-1 leading-6 md:pl-2">
              {definition.definition}
              {definition.example && (
                <p className="text-dark-400 text-[15px] md:text-lg mt-3">
                  "{definition.example}"
                </p>
              )}
            </li>
          ))}
        </ul>
        {meaning.synonyms[0] && (
          <div className="flex gap-6 mt-6">
            <h3 className="text-dark-400 md:text-xl">Synonyms</h3>
            <h3 className="font-bold text-primary md:text-xl">
              {meaning.synonyms.join(", ")}
            </h3>
          </div>
        )}
      </div>
    </>
  );
}

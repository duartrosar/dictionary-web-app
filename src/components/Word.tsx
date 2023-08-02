import React from "react";
import Image from "next/image";
import play from "../../public/icon-play.svg";
import newWindow from "../../public/icon-new-window.svg";
import Link from "next/link";
import Meaning from "./Meaning";
// import { Definition } from "@/types/Definition";

const Word = ({ wordDefinition }: { wordDefinition: WordDefinition }) => {
  return (
    <>
      <div className="w-full px-6 md:px-10">
        <div className="flex items-center justify-between mx-auto max-w-[736px]">
          <div className="mt-6 md:mt-[43px]">
            <h1 className="font-bold text-[32px] text-dark-600 md:text-[64px] dark:text-white">
              {wordDefinition.word}
            </h1>
            {wordDefinition.phonetics[0] && (
              <h2 className="mt-2 text-lg text-primary md:text-2xl">
                {wordDefinition.phonetics[0].text}
              </h2>
            )}
          </div>
          {wordDefinition.phonetics[0] && (
            <button>
              <Image
                src={play}
                alt="play-button"
                className="w-12 md:w-[75px]"
              />
            </button>
          )}
        </div>
        {wordDefinition.meanings.map((meaning, index) => (
          <Meaning meaning={meaning} />
        ))}

        <div className="w-full h-0 mx-auto mt-8 border-t border-dark-300 dark:border-dark-500 max-w-[736px]"></div>
        <div className="mt-6 sm:mt-5 mb-20 max-w-[736px] mx-auto flex flex-col gap-2 sm:flex-row sm:gap-5 ">
          <p className="text-sm underline text-dark-400 underline-offset- underline-offset-2">
            Source
          </p>
          <Link href={wordDefinition.sourceUrls[0]} target="_blank">
            <p className="flex gap-2 text-sm underline text-dark-600 underline-offset-2 dark:text-white">
              {wordDefinition.sourceUrls[0]}
              <Image
                src={newWindow}
                alt="new-window"
                className="w-3 text-dark-400"
              />
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Word;

import React from "react";
import Image from "next/image";
import play from "../../public/icon-play.svg";
import newWindow from "../../public/icon-new-window.svg";
import Link from "next/link";
import { Definition } from "@/types/Definition";

const Word = ({ definition }: { definition: Definition }) => {
  return (
    <>
      <div className="w-full px-6 md:px-10">
        <div className="flex items-center justify-between mx-auto max-w-[736px]">
          <div className="mt-6 md:mt-[43px]">
            <h1 className="font-bold text-[32px] text-dark-600 md:text-[64px] dark:text-white">
              {definition.word}
            </h1>
            <h2 className="mt-2 text-lg text-primary md:text-2xl">
              {definition.phonetics[0].text}
            </h2>
          </div>
          <button>
            <Image src={play} alt="play-button" className="w-12 md:w-[75px]" />
            {/* <audio controls src={definition.phonetics[0].audio}></audio> */}
          </button>
        </div>
        <div className="flex items-center mt-8 md:mt-10 mx-auto max-w-[736px] gap-4 md:gap-5">
          <p className="text-lg italic font-bold text-dark-600 md:text-2xl dark:text-white">
            noun
          </p>
          <div className="w-full h-0 border-t border-dark-300 dark:border-dark-500"></div>
        </div>
        <div className="mx-auto max-w-[736px] mt-8 md:mt-10">
          <h3 className="text-dark-400 md:text-xl">Meaning</h3>
          <ul className="pl-[18px] mt-4 md:mt-6 md:pl-10 list-disc marker:text-primary text-[15px] md:text-lg text-dark-600 dark:text-white">
            <li className="pl-1 leading-6 md:pl-2">
              (etc.) A set of keys used to operate a typewriter, computer etc.
            </li>
            <li className="pt-3 pl-1 leading-6 md:pl-2 ">
              A component of many instruments including the piano, organ, and
              harpsichord consisting of usually black and white keys that cause
              different tones to be produced when struck.
            </li>
            <li className="pt-3 pl-1 leading-6 md:pl-2 ">
              A device with keys of a musical keyboard, used to control
              electronic sound-producing devices which may be built into or
              separate from the keyboard device.
            </li>
          </ul>
          <div className="flex gap-6 mt-6">
            <h3 className="text-dark-400 md:text-xl">Meaning</h3>
            <h3 className="font-bold text-primary md:text-xl">
              electronic keyboard
            </h3>
          </div>
        </div>
        <div className="flex items-center mt-8 md:mt-10 mx-auto max-w-[736px] gap-4 md:gap-5">
          <p className="text-lg italic font-bold text-dark-600 md:text-2xl dark:text-white">
            verb
          </p>
          <div className="w-full h-0 border-t border-dark-300 dark:border-dark-500"></div>
        </div>
        <div className="mx-auto max-w-[736px] mt-8 md:mt-10">
          <h3 className="text-dark-400 md:text-xl">Meaning</h3>
          <ul className="pl-[18px] mt-4 md:mt-6 md:pl-10 list-disc marker:text-primary text-[15px] md:text-lg text-dark-600 dark:text-white">
            <li className="pl-1 leading-6 md:pl-2">
              To type on a computer keyboard.
            </li>
          </ul>
          <p className="text-dark-400 text-[15px] md:text-lg md:ml-12 ml-6 mt-3">
            “Keyboarding is the part of this job I hate the most.”
          </p>
        </div>

        <div className="w-full h-0 mx-auto mt-8 border-t border-dark-300 dark:border-dark-500 max-w-[736px]"></div>
        <div className="mt-6 sm:mt-5 mb-20 max-w-[736px] mx-auto flex flex-col gap-2 sm:flex-row sm:gap-5 ">
          <p className="text-sm underline text-dark-400 underline-offset- underline-offset-2">
            Source
          </p>
          <Link href="https://en.wiktionary.org/wiki/keyboard" target="_blank">
            <p className="flex gap-2 text-sm underline text-dark-600 underline-offset-2 dark:text-white">
              https://en.wiktionary.org/wiki/keyboard
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

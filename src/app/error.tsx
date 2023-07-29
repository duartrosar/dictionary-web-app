"use client";
import { BsEmojiFrownFill } from "react-icons/bs";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="w-full px-6 md:px-10">
      <div className="flex flex-col items-center justify-center mx-auto max-w-[736px] pt-14">
        <BsEmojiFrownFill
          size={64}
          className="rounded-full shadow-xl text-secondary"
        />
        <h1 className="font-bold text-dark-600 mt-11 dark:text-white">
          No Definitions Found
        </h1>
        <p className="mt-6 text-center text-dark-400">
          Sorry pal, we couldn't find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </p>
      </div>
    </div>
  );
};

export default error;

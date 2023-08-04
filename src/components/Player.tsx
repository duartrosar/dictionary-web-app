"use client";

import React, { useRef } from "react";
import Image from "next/image";
import play from "../../public/icon-play.svg";

export const Player = ({ source }: { source: string }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <button onClick={handlePlay}>
      <Image src={play} alt="play-button" className="w-12 md:w-[75px]" />
      <audio ref={audioRef}>
        <source src={source} type="audio/mpeg" />
      </audio>
    </button>
  );
};

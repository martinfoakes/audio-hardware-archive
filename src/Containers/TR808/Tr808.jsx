/* eslint-disable react/no-array-index-key */
import React from "react";

import { playAudio } from "../../Utils/audio_helper";
import { KeyList } from "../../Components";
import Kick from "../../Audio/Tr808/BassD.mp3";
import Clap from "../../Audio/Tr808/Clap.mp3";
import CowB from "../../Audio/Tr808/CowB.mp3";
import Crash from "../../Audio/Tr808/Crash.mp3";
import HighH from "../../Audio/Tr808/HighH.mp3";
import LowTom from "../../Audio/Tr808/LowTom.mp3";
import OpenH from "../../Audio/Tr808/OpenH.mp3";
import Ride from "../../Audio/Tr808/Ride.mp3";
import Shaker from "../../Audio/Tr808/Shaker.mp3";
import Snare from "../../Audio/Tr808/Snare.mp3";

const play = (e) => {
  const audioSrc = {
    KeyA: Kick,
    KeyS: Clap,
    KeyD: Snare,
    KeyF: HighH,
    KeyG: OpenH,
    KeyH: Shaker,
    KeyJ: LowTom,
    KeyK: Crash,
    KeyL: Ride,
    Semicolon: CowB,
  };
  playAudio(audioSrc[e.code]);
  const key = document.getElementById(`key-${e.key.toUpperCase()}`);
  if (key !== null) {
    key.classList.add("playing");
  }
  setTimeout(() => {
    key.classList.remove("playing");
  }, 200);
};

const Tr808 = () => {
  window.addEventListener("keydown", play);
  const labels = [
    "Kick",
    "Clap",
    "Snare",
    "HiHat",
    "OpenHat",
    "Shaker",
    "Low Tom",
    "Crash",
    "Ride",
    "Cowbell",
  ];
  const keys = KeyList(labels);
  return (
    <>
      <div className="drum-keys">{keys}</div>
    </>
  );
};

export default Tr808;

/* eslint-disable react/no-array-index-key */
import React from "react";

import { playAudio } from "../../Utils/audio_helper";
import { KeyList } from "../../Components";
import Kick from "./audio/BassD.wav";
import Clap from "./audio/Clap.wav";
import CowB from "./audio/CowB.wav";
import Crash from "./audio/Crash.wav";
import HighH from "./audio/HighH.wav";
import LowTom from "./audio/LowTom.wav";
import OpenH from "./audio/OpenH.wav";
import Ride from "./audio/Ride.wav";
import Shaker from "./audio/Shaker.wav";
import Snare from "./audio/Snare.wav";

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

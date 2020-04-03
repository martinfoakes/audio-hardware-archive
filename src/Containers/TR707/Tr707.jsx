/* eslint-disable react/no-array-index-key */
import React from "react";

import { playAudio } from "../../Utils/audio_helper";
import { KeyList } from "../../Components";
import Kick from "./audio/BD0.WAV";
import Clap from "./audio/HCP.WAV";
import CowB from "./audio/COW.WAV";
import Crash from "./audio/CRS.WAV";
import HighH from "./audio/HHC.WAV";
import Tom from "./audio/HT.WAV";
import OpenH from "./audio/HHO.WAV";
import Ride from "./audio/RID.WAV";
import Rim from "./audio/RIM.WAV";
import Snare from "./audio/SD0.WAV";

const play = (e) => {
  const audioSrc = {
    KeyA: Kick,
    KeyS: Clap,
    KeyD: Snare,
    KeyF: HighH,
    KeyG: OpenH,
    KeyH: Tom,
    KeyJ: Rim,
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

const Tr707 = () => {
  window.addEventListener("keydown", play);
  const labels = [
    "Kick",
    "Clap",
    "Snare",
    "HiHat",
    "OpenHat",
    "Tom",
    "Rimshot",
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

export default Tr707;

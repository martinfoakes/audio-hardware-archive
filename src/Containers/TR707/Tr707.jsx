/* eslint-disable react/no-array-index-key */
import React from "react";

import { playAudio } from "../../Utils/audio_helper";
import { KeyList } from "../../Components";
import Kick from "../../Audio/Tr707/BD0.mp3";
import Clap from "../../Audio/Tr707/HCP.mp3";
import CowB from "../../Audio/Tr707/COW.mp3";
import Crash from "../../Audio/Tr707/CRS.mp3";
import HighH from "../../Audio/Tr707/HHC.mp3";
import Tom from "../../Audio/Tr707/HT.mp3";
import OpenH from "../../Audio/Tr707/HHO.mp3";
import Ride from "../../Audio/Tr707/RID.mp3";
import Rim from "../../Audio/Tr707/RIM.mp3";
import Snare from "../../Audio/Tr707/SD0.mp3";

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

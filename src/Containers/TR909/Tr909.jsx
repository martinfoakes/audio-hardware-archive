import React from "react";

import { playAudio } from "../../Utils/audio_helper";
import { KeyList } from "../../Components";
import Kick from "./audio/kick.wav";
import Snare from "./audio/snare.wav";
import HiHat from "./audio/hihat.wav";
import OpenHat from "./audio/openhat.wav";
import Clap from "./audio/clap.wav";
import Ride from "./audio/ride.wav";
import Tom1 from "./audio/tom1.wav";
import Rimshot from "./audio/rimshot.wav";
import Tom2 from "./audio/tom2.wav";

const play = (e) => {
  const audioSrc = {
    KeyA: Kick,
    KeyS: Snare,
    KeyD: Rimshot,
    KeyF: HiHat,
    KeyG: OpenHat,
    KeyH: Ride,
    KeyJ: Tom1,
    KeyK: Tom2,
    KeyL: Clap,
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

const Tr909 = () => {
  window.addEventListener("keydown", play);
  const labels = [
    "Kick",
    "Snare",
    "Rimshot",
    "HiHat",
    "OpenHat",
    "Ride",
    "Tom1",
    "Tom2",
    "Clap",
  ];
  const keys = KeyList(labels);
  return (
    <>
      <div className="drum-keys">{keys}</div>
    </>
  );
};

export default Tr909;

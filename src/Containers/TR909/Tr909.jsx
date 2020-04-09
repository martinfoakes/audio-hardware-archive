import React from "react";

import { playAudio } from "../../Utils/audio_helper";
import { KeyList } from "../../Components";
import Kick from "../../Audio/Tr909/kick.mp3";
import Snare from "../../Audio/Tr909/snare.mp3";
import HiHat from "../../Audio/Tr909/hihat.mp3";
import OpenHat from "../../Audio/Tr909/openhat.mp3";
import Clap from "../../Audio/Tr909/clap.mp3";
import Ride from "../../Audio/Tr909/ride.mp3";
import Tom1 from "../../Audio/Tr909/tom1.mp3";
import Rimshot from "../../Audio/Tr909/rimshot.mp3";
import Tom2 from "../../Audio/Tr909/tom2.mp3";

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

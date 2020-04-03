/* eslint-disable react/no-array-index-key */
import React from "react";

import Kick from "./audio/kick.wav";
import Snare from "./audio/snare.wav";
import HiHat from "./audio/hihat.wav";
import OpenHat from "./audio/openhat.wav";
import Clap from "./audio/clap.wav";
import Ride from "./audio/ride.wav";
import Tom from "./audio/tom.wav";
import Tink from "./audio/tink.wav";
import Boom from "./audio/boom.wav";

const playAudio = (e) => {
  const audioSrc = {
    KeyA: Kick,
    KeyS: Snare,
    KeyD: HiHat,
    KeyF: OpenHat,
    KeyG: Clap,
    KeyH: Ride,
    KeyJ: Tom,
    KeyK: Tink,
    KeyL: Boom,
  };
  // eslint-disable-next-line no-undef
  const audio = new Audio(audioSrc[e.code]);
  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
};

const Tr909 = () => {
  window.addEventListener("keydown", playAudio);

  const KeyList = [
    { key: "A", name: "Kick" },
    { key: "S", name: "Snare" },
    { key: "D", name: "HiHat" },
    { key: "F", name: "OpenHat" },
    { key: "G", name: "Clap" },
    { key: "H", name: "Ride" },
    { key: "J", name: "Tom" },
    { key: "K", name: "Tink" },
    { key: "L", name: "Boom" },
  ].map((item, idx) => (
    <li key={idx}>
      <kbd>{item.key}</kbd>
      <span>{item.name}</span>
    </li>
  ));

  return (
    <>
      <div className="drum-keys">
        <ul>{KeyList}</ul>
      </div>
    </>
  );
};

export default Tr909;

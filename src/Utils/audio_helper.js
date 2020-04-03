export const playAudio = (source) => {
  // eslint-disable-next-line no-undef
  const audio = new Audio(source);
  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
};

export const OtherAudioFunc = () => {};

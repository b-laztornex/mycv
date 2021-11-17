import React, { useState, useEffect } from "react";
import audio_track from '../music/another_world_remix.mp3'

const useAudio = audio_track => {
  const [audio] = useState(new Audio(audio_track));
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);
  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = () => {
  const [playing, toggle] = useAudio(audio_track);
  return (
    <div>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

export default Player;
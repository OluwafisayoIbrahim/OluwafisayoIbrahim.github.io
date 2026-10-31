"use client";

import { useEffect, useRef, useState } from "react";
import { Square, Volume2 } from "lucide-react";

export function NamePronunciation() {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const element = audio.current;
    return () => {
      element?.pause();
    };
  }, []);
  async function toggle() {
    if (!audio.current) return;
    if (playing) {
      audio.current.pause();
      audio.current.currentTime = 0;
      setPlaying(false);
      return;
    }
    setMessage("");
    try {
      await audio.current.play();
    } catch {
      setPlaying(false);
      setMessage(
        "Audio could not be played. Pronunciation: oh-loo-wah-fee-sah-yoh.",
      );
    }
  }
  return (
    <span className="name-pronunciation">
      <button
        type="button"
        onClick={() => void toggle()}
        aria-label={
          playing ? "Stop name pronunciation" : "Hear Oluwafisayo pronounced"
        }
        aria-describedby="name-pronunciation-guide"
        aria-pressed={playing}
        title={playing ? "Stop pronunciation" : "Hear Oluwafisayo pronounced"}
      >
        {playing ? (
          <Square size={19} aria-hidden="true" />
        ) : (
          <Volume2 size={22} aria-hidden="true" />
        )}
      </button>
      <audio
        ref={audio}
        src="/audio/oluwafisayo.wav"
        preload="none"
        onPlay={() => setPlaying(true)}
        onEnded={() => setPlaying(false)}
        onError={() => {
          setPlaying(false);
          setMessage(
            "Audio could not be played. Pronunciation: oh-loo-wah-fee-sah-yoh.",
          );
        }}
      >
        <track
          kind="captions"
          src="/audio/oluwafisayo.vtt"
          srcLang="en"
          label="Name pronunciation"
          default
        />
      </audio>
      <span className="sr-only" role="status">
        {message}
      </span>
    </span>
  );
}

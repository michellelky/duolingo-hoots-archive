import { useCallback, useEffect, useRef, useState } from "react";

type SoundOption = {
  autoplay: boolean;
};

export default function useSound(source: string, options?: SoundOption) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>();

  const play = useCallback(async () => {
    try {
      if (audioRef.current) {
        // Restart if same audio
        if (isPlaying) {
          audioRef.current.currentTime = 0;
        }
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.error(err);
    }
  }, [audioRef, isPlaying]);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [audioRef]);

  useEffect(() => {
    if (!source) {
      return;
    }

    const handleLoadError = () => {
      console.error("Failed to load sound file");
    };
    const onEnd = () => {
      setIsPlaying(false);
    };

    try {
      audioRef.current = new Audio(source);
      audioRef.current.addEventListener("error", handleLoadError);
      audioRef.current.addEventListener("ended", onEnd);

      if (options?.autoplay) {
        play();
      }
    } catch (err) {
      console.error("Failed to create Audio");
    }

    return () => {
      audioRef.current?.removeEventListener("error", handleLoadError);
      stop();
    };
    // Including play/stop causes DOMException: The play() request was interrupted by a call to pause().
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options?.autoplay, source]);

  return { isPlaying, play, stop };
}

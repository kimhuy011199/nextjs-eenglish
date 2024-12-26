import { Audio } from '@/lib/interfaces';
import React, {
  useState,
  useRef,
  createContext,
  useContext,
  useEffect,
  useCallback,
} from 'react';

interface PlayerContextType {
  audioData: Audio;
  audioRef: any;
  isPlaying: boolean;
  shouldRepeat: boolean;
  shouldShowLyrics: boolean;
  progress: number;
  handlePlayPause: () => void;
  handleRepeat: () => void;
  handleChangeProgress: (values: number[]) => void;
  handleForward: (second?: number) => void;
  handleBackward: (second?: number) => void;
  handleEnded?: () => void;
  handleShowHideLyrics?: () => void;
}

export const PlayerContext = createContext<PlayerContextType>({
  audioData: {
    id: '',
    title: '',
    lessonId: '',
    src: '',
    duration: 0,
  },
  audioRef: null,
  shouldRepeat: false,
  shouldShowLyrics: true,
  isPlaying: false,
  progress: 0,
  handlePlayPause: () => {},
  handleRepeat: () => {},
  handleChangeProgress: () => {},
  handleEnded: () => {},
  handleForward: () => {},
  handleBackward: () => {},
  handleShowHideLyrics: () => {},
});

export function PlayerProvider({
  audioData,
  children,
}: {
  audioData: Audio;
  children: React.ReactNode;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [shouldShowLyrics, setShouldShowLyrics] = useState(true);
  const [shouldRepeat, setShouldRepeat] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const playAnimationRef = useRef<number>(0);

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
  };

  const handleRepeat = () => {
    setShouldRepeat((prev) => !prev);
  };

  const handleShowHideLyrics = () => {
    setShouldShowLyrics((prev) => !prev);
  };

  const handleEnded = () => {
    if (shouldRepeat) {
      audioRef.current?.play();
    } else {
      setIsPlaying(false);
    }
  };

  const handleChangeProgress = ([value]: number[]) => {
    setProgress(value);
    if (audioRef.current) {
      audioRef.current.currentTime = value;
    }
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  };

  const handleForward = (second = 5) => {
    setProgress((progress) => progress + second);
    if (audioRef.current) {
      audioRef.current.currentTime += second;
    }
  };

  const handleBackward = (second = 5) => {
    if (progress - second < 0) {
      setProgress(0);
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
      }
    } else {
      setProgress((progress) => progress - second);
      if (audioRef.current) {
        audioRef.current.currentTime -= second;
      }
    }
  };

  const repeat = useCallback(() => {
    const currentTime = audioRef.current?.currentTime;
    if (currentTime !== undefined) {
      setProgress(currentTime);
    }

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef]);

  // Cleanup the animation frame
  useEffect(() => {
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  const value = {
    audioData,
    isPlaying,
    shouldRepeat,
    shouldShowLyrics,
    audioRef,
    progress,
    handlePlayPause,
    handleChangeProgress,
    handleEnded,
    handleForward,
    handleBackward,
    handleRepeat,
    handleShowHideLyrics,
  };

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
}

export function usePlayer() {
  return useContext(PlayerContext);
}

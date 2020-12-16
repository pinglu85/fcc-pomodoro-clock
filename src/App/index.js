import { useReducer, useEffect, useRef } from 'react';

import timerReducer from './timerReducer';
import * as actionTypes from './actionTypes';
import LengthControls from '../LengthControls';
import Timer from '../Timer';
import TimerControls from '../TimerControls';
import styles from './style.module.css';

const initialTimerState = {
  isStart: false,
  breakLength: 5,
  sessionLength: 25,
  isSession: true,
  time: {
    minute: 25,
    second: 0,
  },
};

const App = () => {
  const [timer, dispatch] = useReducer(timerReducer, initialTimerState);
  const audioRef = useRef(null);

  const handleToggleTimer = () => {
    dispatch({ type: actionTypes.TOGGLE_TIMER });
  };

  const handleReset = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    dispatch({ type: actionTypes.RESET });
  };

  const handleDecreaseLength = (pomodoro) => {
    if (timer.isStart) {
      return;
    }
    dispatch({ type: actionTypes.DECREASE_LENGTH, payload: pomodoro });
  };

  const handleIncreaseLength = (pomodoro) => {
    if (timer.isStart) {
      return;
    }
    dispatch({ type: actionTypes.INCREASE_LENGTH, payload: pomodoro });
  };

  // Count down the time.
  useEffect(() => {
    if (!timer.isStart) {
      return;
    }

    let previous = Date.now();

    let intervalId = setInterval(() => {
      const now = Date.now();
      if (now - previous >= 1000) {
        dispatch({ type: actionTypes.COUNT_DOWN });
        previous = now;
      }
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [timer.isStart]);

  // Play audio when countdown reaches zero.
  useEffect(() => {
    if (
      timer.time.minute === 0 &&
      timer.time.second === 0 &&
      audioRef.current
    ) {
      audioRef.current.play();
    }
  }, [timer.time]);

  return (
    <div className={styles.App}>
      <header>
        <h1>25 + 5 Clock</h1>
      </header>
      <LengthControls
        breakLength={timer.breakLength}
        sessionLength={timer.sessionLength}
        onDecreaseLength={handleDecreaseLength}
        onIncreaseLength={handleIncreaseLength}
      />
      <Timer
        isSession={timer.isSession}
        minute={timer.time.minute}
        second={timer.time.second}
      />
      <TimerControls onToggleTimer={handleToggleTimer} onReset={handleReset} />
      <audio
        ref={audioRef}
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </div>
  );
};

export default App;

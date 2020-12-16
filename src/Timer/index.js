import padZeroToNum from './padZeroToNum';
import styles from './style.module.css';

const Timer = ({ isSession, minute, second }) => {
  const formattedMinute = padZeroToNum(minute);
  const formattedSecond = padZeroToNum(second);
  const isLastMinute = minute === 0 && second >= 0;

  return (
    <div className={styles.Timer}>
      <div id="timer-label">{isSession ? 'Session' : 'Break'}</div>
      <div
        id="time-left"
        className={`${styles.time} ${isLastMinute ? styles.red : ''}`}
      >{`${formattedMinute}:${formattedSecond}`}</div>
    </div>
  );
};

export default Timer;

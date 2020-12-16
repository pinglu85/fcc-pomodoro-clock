import ToggleTimerButton from './ToggleTimerButton';
import ResetButton from './ResetButton';
import styles from './style.module.css';

const TimerControls = ({ onToggleTimer, onReset }) => (
  <div className={styles.TimerControls}>
    <ToggleTimerButton onToggleTimer={onToggleTimer} />
    <ResetButton onReset={onReset} />
  </div>
);

export default TimerControls;

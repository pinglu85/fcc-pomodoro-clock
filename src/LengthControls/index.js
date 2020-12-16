import LengthControl from './LengthControl';
import styles from './style.module.css';

const LengthControls = ({
  breakLength,
  sessionLength,
  onDecreaseLength,
  onIncreaseLength,
}) => (
  <div className={styles.LengthControls}>
    <LengthControl
      pomodoro="Break"
      length={breakLength}
      onDecreaseLength={onDecreaseLength}
      onIncreaseLength={onIncreaseLength}
    />
    <LengthControl
      pomodoro="Session"
      length={sessionLength}
      onDecreaseLength={onDecreaseLength}
      onIncreaseLength={onIncreaseLength}
    />
  </div>
);

export default LengthControls;

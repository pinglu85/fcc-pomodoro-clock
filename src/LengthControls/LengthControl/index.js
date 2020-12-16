import Button from '../../shared/Button';
import styles from './style.module.css';

const LengthControl = ({
  pomodoro,
  length,
  onDecreaseLength,
  onIncreaseLength,
}) => {
  const lowerCasedPomodoro = pomodoro.toLowerCase();
  return (
    <div className={styles.LengthControl}>
      <div id={`${lowerCasedPomodoro}-label`} className={styles.label}>
        {pomodoro} Length
      </div>
      <div className={styles.controls}>
        <Button
          id={`${lowerCasedPomodoro}-decrement`}
          label={`Decrease ${lowerCasedPomodoro} length`}
          isSmallIcon
          handleClick={() => onDecreaseLength(lowerCasedPomodoro)}
        >
          <i className="fas fa-chevron-down"></i>
        </Button>
        <div id={`${lowerCasedPomodoro}-length`}>{length}</div>
        <Button
          id={`${lowerCasedPomodoro}-increment`}
          label={`Increase ${lowerCasedPomodoro} length`}
          isSmallIcon
          handleClick={() => onIncreaseLength(lowerCasedPomodoro)}
        >
          <i className="fas fa-chevron-up"></i>
        </Button>
      </div>
    </div>
  );
};

export default LengthControl;

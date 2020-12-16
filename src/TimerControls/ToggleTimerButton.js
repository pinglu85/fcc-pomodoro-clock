import Button from '../shared/Button';

const ToggleTimerButton = ({ onToggleTimer }) => (
  <Button
    id="start_stop"
    label="Toggle timer"
    isBigButton
    handleClick={onToggleTimer}
  >
    <i className="fas fa-play"></i>
    <i className="fas fa-pause"></i>
  </Button>
);

export default ToggleTimerButton;

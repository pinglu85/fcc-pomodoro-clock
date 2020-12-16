import Button from '../shared/Button';

const ResetButton = ({ onReset }) => (
  <Button id="reset" label="Reset" handleClick={onReset}>
    <i className="fas fa-sync-alt"></i>
  </Button>
);

export default ResetButton;

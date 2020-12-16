import styles from './style.module.css';

const Button = ({
  id,
  label,
  handleClick,
  isBigButton,
  isSmallIcon,
  children,
}) => (
  <button
    type="button"
    id={id}
    className={`${styles.Button} ${isBigButton ? styles.bigButton : ''} ${
      isSmallIcon ? styles.smallIcon : ''
    }`}
    onClick={handleClick}
  >
    {children}
    <span className={styles.srOnly}>{label}</span>
  </button>
);

export default Button;

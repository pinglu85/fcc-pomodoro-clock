const checkIfCurrentPomodoroLengthChanged = (isSession, changedPomodoro) => {
  return (
    (isSession && changedPomodoro === 'session') ||
    (!isSession && changedPomodoro === 'break')
  );
};

export default checkIfCurrentPomodoroLengthChanged;

import checkIfCurrentPomodoroLengthChanged from './checkIfCurrentPomodoroLengthChanged';

const increaseLength = (key, state, increasedPomodoro) => {
  const increasedLength = state[key] === 60 ? state[key] : state[key] + 1;

  const isCurrentPomodoroChanged = checkIfCurrentPomodoroLengthChanged(
    state.isSession,
    increasedPomodoro
  );

  return {
    increasedLength,
    updatedMinute: isCurrentPomodoroChanged
      ? increasedLength
      : state.time.minute,
    updatedSecond: isCurrentPomodoroChanged ? 0 : state.time.second,
  };
};

export default increaseLength;

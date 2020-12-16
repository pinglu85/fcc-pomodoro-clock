import checkIfCurrentPomodoroLengthChanged from './checkIfCurrentPomodoroLengthChanged';

const decreaseLength = (key, state, decreasedPomodoro) => {
  const decreasedLength = state[key] === 1 ? state[key] : state[key] - 1;

  const isCurrentPomodoroChanged = checkIfCurrentPomodoroLengthChanged(
    state.isSession,
    decreasedPomodoro
  );

  return {
    decreasedLength,
    updatedMinute: isCurrentPomodoroChanged
      ? decreasedLength
      : state.time.minute,
    updatedSecond: isCurrentPomodoroChanged ? 0 : state.time.second,
  };
};

export default decreaseLength;

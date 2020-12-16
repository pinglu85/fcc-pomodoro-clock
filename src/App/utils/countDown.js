const countDown = (state) => {
  let updatedMinute = 0;
  let updatedSecond = 0;
  let isSession = state.isSession;

  if (state.time.minute === 0 && state.time.second === 0) {
    updatedMinute = state.isSession ? state.breakLength : state.sessionLength;
    isSession = !state.isSession;
  } else {
    const isSecondEqualToZero = state.time.second === 0;
    updatedMinute = isSecondEqualToZero
      ? state.time.minute - 1
      : state.time.minute;
    updatedSecond = isSecondEqualToZero ? 59 : state.time.second - 1;
  }

  return { isSession, updatedMinute, updatedSecond };
};

export default countDown;

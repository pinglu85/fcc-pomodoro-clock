import * as actionTypes from './actionTypes';
import increaseLength from './utils/increaseLength';
import decreaseLength from './utils/decreaseLength';
import countDown from './utils/countDown';

const timerReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_TIMER:
      return {
        ...state,
        isStart: !state.isStart,
      };
    case actionTypes.INCREASE_LENGTH:
      const increasedKey = `${action.payload}Length`;
      const incrementResult = increaseLength(
        increasedKey,
        state,
        action.payload
      );
      return {
        ...state,
        [increasedKey]: incrementResult.increasedLength,
        time: {
          minute: incrementResult.updatedMinute,
          second: incrementResult.updatedSecond,
        },
      };
    case actionTypes.DECREASE_LENGTH:
      const decreasedKey = `${action.payload}Length`;
      const decrementResult = decreaseLength(
        decreasedKey,
        state,
        action.payload
      );
      return {
        ...state,
        [decreasedKey]: decrementResult.decreasedLength,
        time: {
          minute: decrementResult.updatedMinute,
          second: decrementResult.updatedSecond,
        },
      };
    case actionTypes.COUNT_DOWN:
      const { isSession, updatedMinute, updatedSecond } = countDown(state);

      return {
        ...state,
        isSession: isSession,
        time: {
          minute: updatedMinute,
          second: updatedSecond,
        },
      };
    case actionTypes.RESET:
      return {
        isStart: false,
        breakLength: 5,
        sessionLength: 25,
        isSession: true,
        time: {
          minute: 25,
          second: 0,
        },
      };
    default:
      throw new Error('Should not reach here.');
  }
};

export default timerReducer;

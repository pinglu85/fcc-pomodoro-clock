const padZeroToNum = (num) => {
  return num < 10 ? `0${num}` : String(num);
};

export default padZeroToNum;

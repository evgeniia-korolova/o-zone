export const debounce = (func, ms = 300) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => func.apply(this, args), ms);
    
  }
};

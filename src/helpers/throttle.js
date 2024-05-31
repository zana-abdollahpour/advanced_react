export function throttle(fn, delay) {
  let timerId, inThrottle, lastTime;

  return (...args) => {
    if (!inThrottle) {
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        if (Date.now() - lastTime > delay) {
          fn(...args);
          lastTime = Date.now();
        }
      }, Math.max(delay - (Date.now() - lastTime), 0));
    }
  };
}

// set your shared functions here

/* ********************************* example ******************************** */
export function getWindowSize() {
  if (typeof window !== "undefined") {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  return null;
}

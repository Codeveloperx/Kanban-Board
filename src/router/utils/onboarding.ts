export const hasSeenHome = (): boolean => {
  return localStorage.getItem("hasSeenHome") === "true";
};

export const markHomeAsSeen = () => localStorage.setItem("hasSeenHome", "true");

export const navigateToUrl = (url: string) => {
  window.location.href = url;
};

export const getImageName = (url: string) => {
  const urlSplit = url.split("/");
  return urlSplit.slice(4).join("/");
};

export const getRotation = (direction: string) => {
  switch (direction) {
    case "up":
      return "rotate(90deg)";
    case "down":
      return "rotate(270deg)";
    case "left":
      return "rotate(180deg)";
    case "right":
    default:
      return "rotate(0deg)";
  }
};

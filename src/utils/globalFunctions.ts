export const getImageName = (url: string) => {
  const urlSplit = url.split("/");
  return urlSplit.slice(4).join("/");
};

export const openExternalUrl = (url: string) => {
  window.open(url, "_blank");
};

export const navigateInPage = (id: string, yOffset?: number) => {
  if (yOffset !== undefined) {
    // Scroll to specific Y coordinate
    window.scrollTo({
      top: yOffset,
      behavior: "smooth",
    });
  } else {
    // Original behavior - scroll to element by ID
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
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

export const navigateToUrl = (url: string) => {
  window.location.href = url;
};

export const getImageName = (url: string) => {
  const urlSplit = url.split("/");
  return urlSplit.slice(4).join("/");
};

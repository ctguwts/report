export const getGuideWrapperDom = () => {
  if (document.querySelector(".y-guide")) {
    return document.querySelector(".y-guide");
  }
  const guideWrapperDom = document.createElement("div");
  guideWrapperDom.setAttribute("class", "y-guide");
  document.body.appendChild(guideWrapperDom);
  return guideWrapperDom;
};

export const getDomByGuideKey = (nameKey, key) => {
  return document.querySelector(`[${nameKey}=${key}]`);
};

export const getOffset = (element) => {
  const docEl = document.documentElement;
  const scrollTop = docEl.scrollTop;
  const scrollLeft = docEl.scrollLeft;
  const rec = element.getBoundingClientRect();
  return {
    top: rec.top + scrollTop,
    width: rec.width,
    height: rec.height,
    left: rec.left + scrollLeft,
  };
};

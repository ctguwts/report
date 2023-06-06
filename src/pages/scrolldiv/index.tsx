import React, { useState, useEffect } from "react";

const AutoScrollDiv = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const div = document.getElementById("scrollDiv");
    const divRect = div.getBoundingClientRect();

    if (divRect.top < windowHeight / 2) {
      console.log("我距离视口顶部", divRect.top);
      console.log("视口举例Window顶部", document.documentElement.scrollTop);
      document.documentElement.scrollTop =
        divRect.top + document.documentElement.scrollTop;
      //   div.scrollIntoView(true);
    }

    setScrollPosition(scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  //   setTimeout(() => {
  //     window.scrollTo({
  //       top: 200,
  //       behavior: "smooth",
  //     });
  //   }, 2000);

  //   setTimeout(() => {
  //     document.documentElement.scrollTop = 200;
  //   }, 2000);

  return (
    <div
      id="scrollDiv"
      style={{
        minHeight: "200px",
        width: "100%",
        backgroundColor: "lightblue",
        padding: "10px",
      }}
    >
      <h3>Auto-scrolling div</h3>
      <p>当用户将此div滚动到屏幕上半部分时，它将自动滚动到屏幕顶部。</p>
    </div>
  );
};

export default AutoScrollDiv;

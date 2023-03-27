import React, { useEffect, useState } from "react";
import { observable, autorun } from "mobx";
import store from "../mobx/store";

const Child = (props) => {
  useEffect(() => {
    store.changeShow();
    return () => {
      console.log("child销毁了");
      store.changeHide();
    };
  }, []);

  return <div>haha</div>;
};

export default Child;

import React, { Component, useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import Child from "./child.tsx";
import { Observer } from "mobx-react";
import store from "../mobx/store";

const TEST = () => {
  const [number, setNumber] = useState(0);
  const [childParam1, setChildParam1] = useState(0);
  const [isShowChild, setIsShowChild] = useState(true);

  console.log("组件刷新");
  return (
    <Observer>
      {() => {
        return (
          <div>
            <div
              onClick={() => {
                // setIsShowChild(!isShowChild);
                store.changeShow();
              }}
            >
              将changeShow设置为展示
            </div>
            <div
              onClick={() => {
                store.changeHide();
              }}
            >
              将changeShow设置为隐藏
            </div>
            {isShowChild ? (
              <Child number={number} childParam1={childParam1} />
            ) : null}
            {store.isTabbarShow && <h1>isTabbarShow</h1>}
          </div>
        );
      }}
    </Observer>
  );
};

export default TEST;

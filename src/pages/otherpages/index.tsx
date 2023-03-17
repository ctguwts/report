import { observable, autorun } from "@formily/reactive";
import React from "react";

function testObservable2() {
  const obs = observable({
    aa: {
      bb: 123,
    },
    cc: {
      dd: 123,
    },
    ee: {
      ff: 123,
    },
    gg: {
      hh: 123,
    },
  });

  autorun(() => {
    // 只是倾听aa字段的话，那么子字段的变化是不会触发的
    // 因为obs.aa的引用没有变化
    // 所以这里只触发1次
    console.log("object3", obs.aa.bb);
  });

  obs.aa.bb = 444;
}

const Test = () => {
  testObservable2();
  return <div>hell</div>;
};

export default Test;

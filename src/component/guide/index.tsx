import ReactDOM from "react-dom";
import NormalGuideView from "./component/normalGuide/guideView.tsx";
import { getGuideWrapperDom } from "./utils.ts";

const originalStep = [
  {
    key: "first_guide",
    extra: "退出引导",
    title: "自动解除限售地区上线啦",
    placement: "bottom",
  },
  {
    key: "second_guide",
    title: "一单多品运费规则已到这里了",
    placement: "bottom",
  },
];
export const getStartGuide = () => {
  console.log("执行了getStartGuide");
  const viewDom = getGuideWrapperDom();
  const reactEle = <NormalGuideView options={{ steps: originalStep }} />;
  ReactDOM.render(reactEle, viewDom);
};

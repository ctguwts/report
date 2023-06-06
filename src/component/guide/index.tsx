import ReactDOM from "react-dom";
import NormalGuideView from "./component/normalGuide/guideView";
import { getGuideWrapperDom } from "./utils";

const originalStep = [
  {
    key: "first_guide",
    extra: "退出引导",
    title: "自动解除限售地区上线啦[我是标题]",
    content:
      "自动解除限售地区是一个新功能，商家开启次功能后，如果限售地区物流商恢复正常，那么系统会自动解除对该地区的限售[我是content内容]",
    placement: "bottom",
  },
  {
    key: "second_guide",
    title: "一单多品运费规则已到这里了",
    content:
      "自动解除限售地区是一个新功能，商家开启次功能后，如果限售地区物流商恢复正常，那么系统会自动解除对该地区的限售[我是content内容]",
    placement: "left",
  },
];
export const getStartGuide = () => {
  const viewDom = getGuideWrapperDom();
  const reactEle = <NormalGuideView options={{ steps: originalStep }} />;
  ReactDOM.render(reactEle, viewDom);
};

import { observable } from "mobx";

const store = observable({
  isTabbarShow: true,
  list: [],
  cityName: "北京",
  changeShow() {
    this.isTabbarShow = true;
  },
  changeHide() {
    this.isTabbarShow = false;
  },
});

export default store;

export enum Scene {
  "会议赛事影响",
  "自然灾害影响",
  "停电，着火，网络异常等影响",
}

export enum Addr {
  "发货地",
  "收货地",
}

export const reasonEnums = [
  {
    label: "会议赛事影响",
    value: Scene.会议赛事影响,
  },
  {
    label: "自然灾害影响",
    value: Scene.自然灾害影响,
  },
  {
    label: "停电，着火，网络异常等影响",
    value: Scene["停电，着火，网络异常等影响"],
  },
];

export const addrEnums = [
  {
    label: "发货地",
    value: Addr.发货地,
  },
  {
    label: "收货地",
    value: Addr.收货地,
  },
];

export const addrLimitEnums = [
  {
    label: "发货地",
    value: Addr.发货地,
  },
];

export const origin = [
  {
    value: "hubei",
    label: "湖北",
  },
  {
    value: "beijing",
    label: "北京",
  },
];

export const destination = [
  {
    value: "shanghai",
    label: "上海",
  },
  {
    value: "nanjing",
    label: "南京",
  },
  {
    value: "shenzhen",
    label: "深圳",
  },
  {
    value: "beijing",
    label: "北京",
  },
  {
    value: "hubei",
    label: "湖北",
  },
  {
    value: "beijing",
    label: "北京",
  },
];

import React from "react";
import { Select } from "antd";

export const Address: React.FC = (props) => {
  const { options, onChange, disable, value } = props;
  const { Option } = Select;

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
    onChange(value);
  };

  return (
    <div>
      <Select
        value={value}
        disabled={disable}
        mode="multiple"
        style={{ width: "100%" }}
        placeholder="请先选择报备原因，再设置受影响地区"
        // defaultValue={["china"]}
        onChange={handleChange}
        optionLabelProp="label"
      >
        <Option value="china" label="China">
          <span role="img" aria-label="China">
            🇨🇳
          </span>
          China (中国)
        </Option>
        <Option value="usa" label="USA">
          <span role="img" aria-label="USA">
            🇺🇸
          </span>
          USA (美国)
        </Option>
        <Option value="japan" label="Japan">
          <span role="img" aria-label="Japan">
            🇯🇵
          </span>
          Japan (日本)
        </Option>
        <Option value="korea" label="Korea">
          <span role="img" aria-label="Korea">
            🇰🇷
          </span>
          Korea (韩国)
        </Option>
      </Select>
    </div>
  );
};

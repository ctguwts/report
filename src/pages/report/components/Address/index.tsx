import React from "react";
import { Select } from "antd";
import { useForm, observer } from "@formily/react";

export const Address: React.FC = observer((props) => {
  const { options, onChange, value } = props;
  const { Option } = Select;

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
    onChange(value);
  };

  const form = useForm();
  const formValue = form?.getFormState().values;
  const canEdit =
    formValue.scene_type != undefined && formValue.addr_type != undefined;
  console.log("我拿到的formValue", formValue.scene_type, formValue.addr_type);
  return (
    <div>
      <Select
        value={value}
        disabled={!canEdit}
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
});

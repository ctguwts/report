import React from "react";
import { Modal, Select } from "antd";
import { reasonEnums, addrEnums, addrLimitEnums, Scene } from "../../const.ts";
import { useForm } from "@formily/react";

export const SceneTypeSelector: React.FC = (props) => {
  const { options, onChange, value } = props;

  const form = useForm();
  const handleChange = (val) => {
    const scene_type = form?.getFormState().values?.scene_type;
    if (scene_type !== undefined) {
      Modal.warning({
        title: "确定要选择该报备原因吗？选择后已填写的报备内容将被清空。",
        okText: "切换",
        closable: true,
        onOk() {
          form.reset().then(() => {
            onChange(val);
          });
        },
        onCancel() {},
      });
    } else {
      form.reset().then(() => {
        onChange(val);
      });
    }
  };

  return (
    <div>
      <Select onChange={handleChange} value={value}>
        {reasonEnums.map((opt) => {
          return <Select.Option value={opt.value}>{opt.label}</Select.Option>;
        })}
      </Select>
    </div>
  );
};

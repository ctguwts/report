import React from "react";
import { Radio, Modal } from "antd";
import { useForm } from "@formily/react";

export const InfluenceAreaType: React.FC = (props) => {
  const { options, onChange, value } = props;

  const form = useForm();

  const handleChange = (val) => {
    const formValue = form?.getFormState().values;
    const hasInfluenceArea = formValue?.influenceArea?.length;
    if (hasInfluenceArea) {
      Modal.warning({
        title: "确定要切换地区类型吗？选择后受影响地区将被清空。",
        okText: "切换",
        closable: true,
        onOk() {
          onChange(val?.target?.value);
          form?.setValuesIn("influenceArea", undefined);
        },
        onCancel() {},
      });
    } else {
      onChange(val?.target?.value);
    }
  };
  return (
    <Radio.Group
      value={value}
      onChange={(val) => {
        handleChange(val);
      }}
    >
      {options?.map(({ label, value }) => {
        return (
          <Radio key={value} value={value}>
            {label}
          </Radio>
        );
      })}
    </Radio.Group>
  );
};

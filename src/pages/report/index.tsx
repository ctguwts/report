import React from "react";
import { createForm, onFieldValueChange } from "@formily/core";
import { createSchemaField } from "@formily/react";
import {
  Form,
  FormItem,
  Input,
  Password,
  Submit,
  Select,
  Radio,
} from "@formily/antd";
import { reasonEnums, Scene, addrEnums, addrLimitEnums } from "./const.ts";
import * as ICONS from "@ant-design/icons";
import { InfluenceAreaType } from "./components/InfluenceAreaType/index.tsx";
import { Modal } from "antd";
import { SceneTypeSelector } from "./components/SceneTypeSelector/index.tsx";
import { Address } from "./components/Address/index.tsx";
import { CertificateUploader } from "./components/CertificateUploader/index.tsx";

const normalForm = createForm({
  validateFirst: true,
  effects() {
    onFieldValueChange("scene_type", (field) => {
      const { value } = field;
      if (value === Scene["停电，着火，网络异常等影响"]) {
        normalForm.setFieldState("addr_type", (state) => {
          const { componentProps } = state;
          componentProps.options = addrLimitEnums;
        });
      } else {
        normalForm.setFieldState("addr_type", (state) => {
          const { componentProps } = state;
          componentProps.options = addrEnums;
        });
      }

      if (value !== undefined) {
        normalForm.setFieldState("influenceArea", (state) => {
          const { componentProps } = state;
          componentProps.disable = false;
        });
      }
    });
  },
});

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Password,
    Select,
    Radio,
    InfluenceAreaType,
    SceneTypeSelector,
    Address,
    CertificateUploader,
  },
  scope: {
    icon(name) {
      return React.createElement(ICONS[name]);
    },
  },
});

const normalSchema = {
  type: "object",
  properties: {
    username: {
      type: "string",
      title: "用户名",
      required: true,
      "x-decorator": "FormItem",
      "x-component": "Input",
      "x-component-props": {
        prefix: "{{icon('UserOutlined')}}",
      },
    },
    password: {
      type: "string",
      title: "密码",
      required: true,
      "x-decorator": "FormItem",
      "x-component": "Password",
      "x-component-props": {
        prefix: "{{icon('LockOutlined')}}",
      },
    },
    scene_type: {
      type: "string",
      title: "报备原因",
      "x-decorator": "FormItem",
      "x-component": "SceneTypeSelector",
    },
    addr_type: {
      type: "string",
      title: "受影响地区类型",
      "x-decorator": "FormItem",
      "x-component": "InfluenceAreaType",
      "x-reactions": {
        dependencies: ["scene_type"],
        fulfill: {
          state: {
            display: `{{$deps[0] !== undefined ? 'visible' : 'none'}}`,
          },
        },
      },
    },
    influenceArea: {
      "x-component-props": {
        disable: "{{true}}",
      },
      type: "string",
      title: "受影响地区",
      "x-decorator": "FormItem",
      "x-component": "Address",
      // "x-reactions": {
      //   dependencies: ["scene_type"],
      //   fulfill: {
      //     state: {
      //       disabled: `true`,
      //     },
      //   },
      // },
      "x-pattern": "disabled",
    },
    certificateList: {
      type: "object",
      title: "上传凭证",
      "x-decorator": "FormItem",
      "x-component": "CertificateUploader",
      // "x-reactions": {
      //   dependencies: ["scene_type"],
      //   fulfill: {
      //     schema: {
      //       "x-decorator-props": {
      //         allDeps: [`$deps[0]`],
      //       },
      //     },
      //   },
      // },
    },
  },
};

const submit = (value) => {
  console.log(normalForm.getFieldState()?.values);
  console.log("value是", value);
};

export default () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        background: "#eee",
        padding: "40px 0",
      }}
    >
      <Form
        form={normalForm}
        layout="vertical"
        size="large"
        onAutoSubmit={submit}
      >
        <SchemaField schema={normalSchema} />
        <Submit block size="large">
          登录
        </Submit>
      </Form>
    </div>
  );
};

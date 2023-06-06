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
import { reasonEnums, Scene, addrEnums, addrLimitEnums } from "./const";
import * as ICONS from "@ant-design/icons";
import { InfluenceAreaType } from "./components/InfluenceAreaType/index";
import { Modal } from "antd";
import { SceneTypeSelector } from "./components/SceneTypeSelector/index";
import { Address } from "./components/Address/index";
import { CertificateUploader } from "./components/CertificateUploader/index";
import styles from "./styles.module.scss";
import classnames from "classnames";

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
    scene_type: {
      required: true,
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
  let userID = Math.ceil(Math.random() * 10);

  let mode = userID % 2 === 1 ? true : false;
  return (
    <>
      <div
        className={classnames({
          [styles.bannerContainerDark]: mode,
          [styles.bannerContainerLight]: !mode,
        })}
      >
        <div className={styles.item}>超时免扣信用积分</div>
        <div className={styles.item}>超时免赔付</div>
      </div>
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
            提交报备资料
          </Submit>
        </Form>
      </div>
    </>
  );
};

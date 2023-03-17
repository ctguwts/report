import React from "react";
import Upload from "antd/lib/upload/Upload";
import { useForm, observer } from "@formily/react";
import { Button } from "antd";

export const CertificateUploader: React.FC = observer((props) => {
  const { options, onChange, disable, value } = props;

  const form = useForm();

  const { scene_type, addr_type, influenceArea } = form?.getFormState().values;
  console.log(
    "我拿到的form表单的值是什么",
    scene_type,
    addr_type,
    influenceArea
  );
  return (
    <>
      {scene_type != undefined &&
      addr_type != undefined &&
      influenceArea != undefined ? (
        <div>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            // beforeUpload={beforeUpload}
            // onChange={handleChange}
          >
            Click to Upload
          </Upload>
        </div>
      ) : (
        <div>请先填写报备原因、受影响地区类型、受影响地区，再上传凭证</div>
      )}
    </>
  );
});

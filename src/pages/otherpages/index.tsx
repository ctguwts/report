import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { observer } from "mobx-react-lite";
import { useLocalObservable } from "mobx-react";

const MYForm = observer(() => {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const store = useLocalObservable(() => ({
    firstName: "",
    lastName: "",
    // fullName: computed(() => `${store.firstName} ${store.lastName}`),
  }));

  const handleSubmit = async (values) => {
    setSubmitting(true);
    try {
      console.log("values是什么", values);
      // perform form submission with values
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form form={form} onFinish={handleSubmit}>
      <Form.Item name="firstName" label="First Name">
        <Input
          value={store.firstName}
          onChange={(e) => (store.firstName = e.target.value)}
        />
      </Form.Item>
      <Form.Item name="lastName" label="Last Name">
        <Input
          value={store.lastName}
          // onChange={(e) => (store.lastName = e.target.value)}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={submitting}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
});

export default MYForm;

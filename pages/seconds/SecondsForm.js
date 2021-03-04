import { Divider, Radio } from "antd";
import styles from "./seconds.module.css";
import "antd/dist/antd.css";
import Link from "next/link";
import EverySecStartingAt from "./EverySecStartingAt";
import SpecificSecond from "./SpecificSecond";
import EverySecond from "./EverySecond";
import { Form, Button } from "antd";
import { useState } from "react";

const SecondsForm = () => {
  const [selected, setSelected] = useState(null);
  const onChange = (e) => {
    setSelected(e.target.value);
  };
  const onFinish = (values) => {
    console.log("radio checked", selected);
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const parentRadio = {
    width: "100%",
  };

  return (
    <>
      <div className={styles.header}>
        <h1>Seconds</h1>
      </div>
      {/* Every second
      <Radio defaultChecked={true} /> */}
      <Divider />
      <Form
        // {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Radio.Group name="radiogroup" style={parentRadio} onChange={onChange}>
          <Radio value={1} valuePropName="checked">
            <EverySecond />
          </Radio>
          <Divider />
          <Radio value={2}>
            <EverySecStartingAt />
          </Radio>

          <Divider />

          <Radio value={3}>
            <SpecificSecond />
          </Radio>
          <Divider />
        </Radio.Group>
        <Form.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form.Item>
      </Form>
      <Divider />
      {/* <br /> */}
      <div className={styles.backToHome}>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    </>
  );
};

export default SecondsForm;

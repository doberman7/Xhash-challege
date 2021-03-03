import { Divider } from "antd";
import styles from "./seconds.module.css";
import "antd/dist/antd.css";
import Link from "next/link";
import EverySecStartingAt from "./EverySecStartingAt";
import SpecificSecond from "./SpecificSecond";
import EverySecond from "./EverySecond";
import { Form, Button } from "antd";
const SecondsForm = () => {
  const layout = {
    labelCol: {
      // span: 8,
      span: 11,
    },
    wrapperCol: {
      // span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      // offset: 8,
      offset: 11,
      // span: 26,
    },
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <EverySecond />
        <Divider />
        <EverySecStartingAt />
        <Divider />
        <SpecificSecond />

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
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

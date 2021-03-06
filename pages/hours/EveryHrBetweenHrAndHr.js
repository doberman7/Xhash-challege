import "antd/dist/antd.css";
import { Form, Button } from "antd";

import HourA from "./HourA";
import HourB from "./HourB";
const EveryHrBetweenHrAndHr = () => {
  const onFinish = (values) => {
    console.log("values", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // function handleChange(value) {
  //   console.log(`Selected: ${value}`);
  // }
  return (
    <>
      <p>Every hour between </p>
      <Form
        // {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HourA /> <HourB />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default EveryHrBetweenHrAndHr;

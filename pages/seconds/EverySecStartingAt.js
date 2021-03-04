import "antd/dist/antd.css";
import { Select, Form, Button } from "antd";

import Every from "./Every";
import StartingAt from "./StartingAt";
const EverySecStartingAt = () => {
  const onFinish = (values) => {
    console.log("values", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  function handleChange(value) {
    console.log(`Selected: ${value}`);
  }
  return (
    <>
      {/* <div
        style={{
          display: "inline-block",
          width: "auto",
        }}
      > */}{" "}
      <Form
        // {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Every />
        <StartingAt />
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
      {/* </div> */}
    </>
  );
};

export default EverySecStartingAt;

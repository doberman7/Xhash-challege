import "antd/dist/antd.css";
import { Form, Button } from "antd";

import OnThe from "./OnThe";
import OfTheMonth from "./OfTheMonth";
const OnTheXXoFTheMonth = () => {
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
          <OnThe />
          &nbsp;
          <OfTheMonth />
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

export default OnTheXXoFTheMonth;

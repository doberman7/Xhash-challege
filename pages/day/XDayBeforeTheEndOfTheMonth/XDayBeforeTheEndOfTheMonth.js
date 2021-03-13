import { Select, Form, Button } from "antd";
import "antd/dist/antd.css";

const XDayBeforeTheEndOfTheMonth = () => {
  const onFinish = (values) => {
    console.log("values", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const children = [];
  // funtion for the 60 secs on select
  for (let i = 1; i < 30; i++) {
    children.push(
      <Select.Option key={i} value={i}>
        {i}
      </Select.Option>
    );
  }

  function handleChange(value) {
    // console.log(`Selected: ${value}`);
  }

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
        <Form.Item
          name="XDay(s)BeforeTheEndOfTheMonth"
          label="day(s) before the end of the month:"
        >
          <Select
            size="small"
            // defaultValue="1"
            onChange={handleChange}
            style={{ width: 50 }}
          >
            {children}
          </Select>
        </Form.Item>
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
    </>
  );
};

export default XDayBeforeTheEndOfTheMonth;

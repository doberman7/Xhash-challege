import { Select, Form, Button } from "antd";
import "antd/dist/antd.css";

const NearestWeekday = () => {
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
        {i}th
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
          name="nearest-weekday"
          label="Nearest weekday (Monday to Friday) to the"
        >
          <Select
            size="small"
            // defaultValue="1"
            onChange={handleChange}
            style={{ width: 70 }}
          >
            {children}
          </Select>
        </Form.Item>
        of the month
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

export default NearestWeekday;

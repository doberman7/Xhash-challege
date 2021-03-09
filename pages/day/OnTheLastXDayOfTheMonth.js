import { Select, Form, Button } from "antd";
import "antd/dist/antd.css";

const OnTheLastXDayOfTheMonth = () => {
  let values = null;
  const onFinish = (values) => {
    console.log("values", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  function handleChange(value) {
    // values = value;
    // console.log(`Selected: ${value}`);
  }
  const children = [];
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  // funtion for the 60 secs on select
  days.map((day) => {
    children.push(
      <Select.Option key={day} value={day}>
        {day} of the month
      </Select.Option>
    );
  });

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
        <Form.Item name="OnTheLastXDayOfTheMonth" label=" on the last :">
          <Select
            size="small"
            // defaultValue="1"
            onChange={handleChange}
            style={{ width: 200 }}
          >
            {children}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default OnTheLastXDayOfTheMonth;

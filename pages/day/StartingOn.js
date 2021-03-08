import { Select, Form } from "antd";
import "antd/dist/antd.css";

const StartingOn = () => {
  function handleChange(value) {
    // console.log(`Selected: ${value}`);
  }
  const children = [];
  // funtion for the 60 secs on select
  for (let i = 1; i < 30; i++) {
    children.push(
      <Select.Option key={i} value={i}>
        {i}
      </Select.Option>
    );
  }

  return (
    <>
      <Form.Item name="starting-on-X-day" label=" day(s) starting on the :">
        <Select
          size="small"
          // defaultValue="1"
          onChange={handleChange}
          style={{ width: 50 }}
        >
          {children}
        </Select>
      </Form.Item>
      of the month
    </>
  );
};
export default StartingOn;

import { Select, Form, Button } from "antd";
import "antd/dist/antd.css";

const StartingAt = () => {
  function handleChange(value) {
    // console.log(`Selected: ${value}`);
  }
  const children = [];
  // funtion for the 60 secs on select
  for (let i = 0; i < 61; i++) {
    children.push(
      <Select.Option key={i} value={i}>
        {i} seconds
      </Select.Option>
    );
  }

  return (
    <>
      <Form.Item name="StartingAt" label="Starting at:">
        <Select
          size="small"
          // defaultValue="1"
          onChange={handleChange}
          style={{ width: 120 }}
        >
          {children}
        </Select>
      </Form.Item>
    </>
  );
};

export default StartingAt;

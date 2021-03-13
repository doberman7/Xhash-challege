import { Select, Form } from "antd";
import "antd/dist/antd.css";

const OnThe = () => {
  const children = [];

  // funtion for the 60 secs on select
  for (let i = 1; i < 5; i++) {
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
      <Form.Item name="OnThe" label="On The:">
        <Select
          size="small"
          // defaultValue="1"
          onChange={handleChange}
          style={{ width: 60 }}
        >
          {children}
        </Select>
      </Form.Item>
    </>
  );
};

export default OnThe;

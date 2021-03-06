import { Select, Form } from "antd";
import "antd/dist/antd.css";

const Every = () => {
  const children = [];
  // funtion for the 60 secs on select
  for (let i = 1; i < 61; i++) {
    children.push(
      <Select.Option key={i} value={i}>
        {i} hours
      </Select.Option>
    );
  }

  function handleChange(value) {
    // console.log(`Selected: ${value}`);
  }

  return (
    <>
      <Form.Item name="every-X-hour" label="Every:">
        <Select
          size="small"
          // defaultValue="1"
          onChange={handleChange}
          // style={{ width: 120 }}
        >
          {children}
        </Select>
      </Form.Item>
    </>
  );
};

export default Every;

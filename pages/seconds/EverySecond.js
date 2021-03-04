import { Radio, Form } from "antd";
import "antd/dist/antd.css";

const Every = (checked) => {
  checked = true;
  return (
    <>
      <Form.Item name="EverySecond" label="Every sec">
        <Radio value={1}>Every Second</Radio>
      </Form.Item>
    </>
  );
};

export default Every;

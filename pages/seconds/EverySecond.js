import { Form } from "antd";
import "antd/dist/antd.css";

const EverySecond = () => {
  return (
    <>
      <div
        style={{
          display: "inline-block",
          width: "auto",
        }}
      >
        <Form.Item name="Every-Second" initialValue="every-second">
          Every Second
        </Form.Item>
      </div>
    </>
  );
};

export default EverySecond;

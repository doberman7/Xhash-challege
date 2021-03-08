import { Select, Form } from "antd";
import "antd/dist/antd.css";

const StartingOn = () => {
  function handleChange(value) {
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
        {day}
      </Select.Option>
    );
  });

  return (
    <>
      <Form.Item name="starting-on-X-day" label=" day(s) starting on the :">
        <Select
          size="small"
          // defaultValue="1"
          onChange={handleChange}
          style={{ width: 115 }}
        >
          {children}
        </Select>
      </Form.Item>
    </>
  );
};
export default StartingOn;

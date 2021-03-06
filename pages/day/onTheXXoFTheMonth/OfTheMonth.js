import { Select, Form } from "antd";
import "antd/dist/antd.css";

const OfTheMonth = () => {
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
        {day} of the month
      </Select.Option>
    );
  });

  return (
    <>
      <Form.Item name="starting-on-X-day" label="">
        <Select
          size="small"
          // defaultValue="1"
          onChange={handleChange}
          style={{ width: 200 }}
        >
          {children}
        </Select>
      </Form.Item>
    </>
  );
};
export default OfTheMonth;

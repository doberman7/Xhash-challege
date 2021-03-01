import { Select, Radio, Divider } from "antd";
import "antd/dist/antd.css";

const { Option } = Select;
const Starting = () => {
  const children = [];
  // funtion for the 60 secs on select
  for (let i = 1; i < 61; i++) {
    children.push(<Option key={i}>{i}</Option>);
  }

  function handleChange(value) {
    console.log(`Selected: ${value}`);
  }

  return (
    <>
      Every{" "}
      <Select
        size="small"
        defaultValue="1"
        onChange={handleChange}
        style={{ width: 60 }}
      >
        {children}
      </Select>{" "}
      second(s) starting at second
      <Select
        size="small"
        defaultValue="0"
        onChange={handleChange}
        style={{ width: 60 }}
      >
        {children}
      </Select>{" "}
    </>
  );
};

export default Starting;

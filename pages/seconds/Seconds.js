import { Select, Radio, Divider } from "antd";
import styles from "./seconds.module.css";
import "antd/dist/antd.css";
import Link from "next/link";

const { Option } = Select;
const Seconds = () => {
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
      <div className={styles.header}>Seconds</div>
      Every second
      <Radio defaultChecked={true} />
      <Divider />
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
      <Divider />
      <br />
      <div className={styles.backToHome}>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    </>
  );
};

export default Seconds;

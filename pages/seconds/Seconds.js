import { Select, Radio, Divider } from "antd";
import styles from "./seconds.module.css";

import Link from "next/link";

const { Option } = Select;
const Seconds = () => {
  const children = [];
  for (let i = 1; i < 61; i++) {
    children.push(<Option key={i}>{i}</Option>);
  }

  function handleChange(value) {
    console.log(`Selected: ${value}`);
  }

  return (
    <>
      Every second
      <Radio defaultChecked={true} />
      <Divider />
      Every
      <Select
        size="small"
        defaultValue="1"
        onChange={handleChange}
        style={{ width: 200 }}
      >
        {children}
      </Select>
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

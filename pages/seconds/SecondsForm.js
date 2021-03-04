import { Divider, Radio } from "antd";
import styles from "./seconds.module.css";
import "antd/dist/antd.css";
import Link from "next/link";
import EverySecStartingAt from "./EverySecStartingAt";
import SpecificSecond from "./SpecificSecond";
import EverySecond from "./EverySecond";
import { Form, Button } from "antd";

const SecondsForm = () => {
  const onChange = (e) => {
    console.log(e.target.value);
  };

  const parentRadio = {
    width: "100%",
  };

  return (
    <>
      <div className={styles.header}>
        <h1>Seconds</h1>
      </div>
      {/* Every second
      <Radio defaultChecked={true} /> */}
      <Divider />

      <Radio.Group name="radiogroup" style={parentRadio} onChange={onChange}>
        <Radio value={1} valuePropName="checked">
          <EverySecond />
        </Radio>
        <Divider />
        <Radio value={2}>
          <EverySecStartingAt />
        </Radio>

        <Divider />

        <Radio value={3}>
          <SpecificSecond />
        </Radio>
        <Divider />
      </Radio.Group>
      <Divider />
      {/* <br /> */}
      <div className={styles.backToHome}>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    </>
  );
};

export default SecondsForm;

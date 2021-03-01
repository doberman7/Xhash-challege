import { Select, Radio, Divider } from "antd";
import styles from "./seconds.module.css";
import "antd/dist/antd.css";
import Link from "next/link";
import Starting from "./Starting";

const Seconds = () => {
  return (
    <>
      <div className={styles.header}>Seconds</div>
      Every second
      <Radio defaultChecked={true} />
      <Divider />
      <Starting />
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

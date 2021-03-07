import { Divider, Radio } from "antd";
import styles from "./Hours.module.css";
import "antd/dist/antd.css";
import Link from "next/link";
import EveryHrStartingAt from "./EveryHrStartingAt";
import SpecificHour from "./SpecificHour";
import EveryHour from "./EveryHour";
import EveryHrBetweenHrAndHr from "./EveryHrBetweenHrAndHr";
import { useState } from "react";
import { Modal } from "antd";

const HoursPeriodiocidad = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [select, setSelect] = useState(null);

  const showModal = (target) => {
    setIsModalVisible(true);
    setSelect(target);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange = (e) => {
    // console.log(e.target.value);
    showModal(e.target.value);
  };

  const parentRadio = {
    width: "100%",
  };

  return (
    <>
      <div className={styles.header}>
        <h1>Hours</h1>
      </div>

      <Divider />
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {select === 1 ? <EveryHour /> : null}
        {select === 2 ? <EveryHrStartingAt /> : null}
        {select === 3 ? <SpecificHour /> : null}
        {select === 4 ? <EveryHrBetweenHrAndHr /> : null}
      </Modal>

      <Radio.Group name="radiogroup" style={parentRadio} onChange={onChange}>
        <Radio value={1} valuePropName="checked">
          Every hour
        </Radio>

        <Divider />
        <Radio value={2}>Every hour starting at</Radio>

        <Divider />

        <Radio value={3}>Specific hour</Radio>
        <Divider />
        <Radio value={4}>Every hour between hour and hour </Radio>
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

export default HoursPeriodiocidad;

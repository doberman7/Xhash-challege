import { Divider, Radio } from "antd";
import styles from "./seconds.module.css";
import "antd/dist/antd.css";
import Link from "next/link";
import EverySecStartingAt from "./EverySecStartingAt";
import SpecificSecond from "./SpecificSecond";
import EverySecond from "./EverySecond";
import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";

const SecondsForm = () => {
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
        <h1>Seconds</h1>
      </div>

      <Divider />
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {select === 1 ? <EverySecond /> : null}
        {select === 2 ? <EverySecStartingAt /> : null}
        {select === 3 ? <SpecificSecond /> : null}
      </Modal>

      <Radio.Group name="radiogroup" style={parentRadio} onChange={onChange}>
        <Radio value={1} valuePropName="checked">
          Every second
        </Radio>

        <Divider />
        <Radio value={2}>Every second starting at</Radio>

        <Divider />

        <Radio value={3}>Specific second</Radio>
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

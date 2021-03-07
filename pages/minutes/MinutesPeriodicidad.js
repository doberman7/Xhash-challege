import { Divider, Radio } from "antd";
import styles from "./minutes.module.css";
import "antd/dist/antd.css";
import Link from "next/link";
import EveryMinStartingAt from "./EveryMinStartingAt";
import SpecificMinute from "./SpecificMinute";
import EveryMinute from "./EveryMinute";
import EveryMinBetweenMinAndMin from "./EveryMinBetweenMinAndMin";
import React, { useState } from "react";
import { Modal } from "antd";

const MinutesPeriodiocidad = () => {
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
        <h1>minutes</h1>
      </div>

      <Divider />
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {select === 1 ? <EveryMinute /> : null}
        {select === 2 ? <EveryMinStartingAt /> : null}
        {select === 3 ? <SpecificMinute /> : null}
        {select === 4 ? <EveryMinBetweenMinAndMin /> : null}
      </Modal>

      <Radio.Group name="radiogroup" style={parentRadio} onChange={onChange}>
        <Radio value={1} valuePropName="checked">
          Every Minute
        </Radio>

        <Divider />
        <Radio value={2}>Every minute starting at</Radio>

        <Divider />

        <Radio value={3}>Specific minute</Radio>
        <Divider />
        <Radio value={4}>Every minute between minute and minute </Radio>
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

export default MinutesPeriodiocidad;

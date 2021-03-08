import { Divider, Radio } from "antd";
import styles from "./days.module.css";
import "antd/dist/antd.css";
import Link from "next/link";
import EveryDayStartingOn from "./EveryDayStartingOn";
import SpecificDay from "./SpecificDay";
import EveryDay from "./EveryDay";
// import EveryHrBetweenHrAndHr from "./EveryHrBetweenHrAndHr";
import { useState } from "react";
import { Modal } from "antd";

const DaysPeriodiocidad = () => {
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
        <h1>Days</h1>
      </div>

      <Divider />
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {select === 1 ? <EveryDay /> : null}
        {select === 2 ? <EveryDayStartingOn /> : null}
        {select === 3 ? <SpecificDay /> : null}
        {/* {select === 4 ? <EveryHrBetweenHrAndHr /> : null} */}
      </Modal>

      <Radio.Group name="radiogroup" style={parentRadio} onChange={onChange}>
        <Radio value={1} valuePropName="checked">
          Every Day
        </Radio>

        <Divider />
        <Radio value={2}>Every Day starting at</Radio>

        <Divider />

        <Radio value={3}>Specific Day</Radio>
        {/* <Divider />
        <Radio value={4}>Every Day between Day and Day </Radio>
        <Divider /> */}
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

export default DaysPeriodiocidad;

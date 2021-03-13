import { Divider, Radio } from "antd";
import styles from "./days.module.css";
import "antd/dist/antd.css";
import Link from "next/link";
import EveryDayStartingOnDay from "./everyDayStartingOnDay/EveryDayStartingOnDay";
import EveryDayStartingOn from "./everyDayStartingOnMonth/EveryDayStartingOn";
import OnTheLast from "./onTheLast/OnTheLast";
import SpecificDay from "./specificDay/SpecificDay";
import EveryDay from "./everyDay/EveryDay";
import OnTheLastXDayOfTheMonth from "./onTheLastXDayOfTheMonth/OnTheLastXDayOfTheMonth";
import XDayBeforeTheEndOfTheMonth from "./xDayBeforeTheEndOfTheMonth/XDayBeforeTheEndOfTheMonth";
import NearestWeekday from "./nearestWeekday/NearestWeekday";
import OnTheXXoFTheMonth from "./onTheXXoFTheMonth/OnTheXXoFTheMonth";

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
        {select === 2 ? <EveryDayStartingOnDay /> : null}
        {select === 3 ? <EveryDayStartingOn /> : null}
        {select === 4 ? <SpecificDay /> : null}
        {select === 5 ? <OnTheLast /> : null}
        {select === 6 ? <OnTheLastXDayOfTheMonth /> : null}
        {select === 7 ? <XDayBeforeTheEndOfTheMonth /> : null}
        {select === 8 ? <NearestWeekday /> : null}
        {select === 9 ? <OnTheXXoFTheMonth /> : null}
      </Modal>

      <Radio.Group name="radiogroup" style={parentRadio} onChange={onChange}>
        <Radio value={1} valuePropName="checked">
          Every Day
        </Radio>

        <Divider />
        <Radio value={2}>Every Day starting on Day...</Radio>

        <Divider />
        <Radio value={3}>Every Day starting on Month..</Radio>

        <Divider />

        <Radio value={4}>Specific Day</Radio>
        <Divider />
        <Radio value={5}>On The Last...</Radio>
        <Divider />
        <Radio value={6}>On The Last selected Day Of The Month</Radio>
        <Divider />
        <Radio value={7}>
          select Number of days before the end of the month
        </Radio>
        <Divider />
        <Radio value={8}>Nearest Weekday...</Radio>
        <Divider />
        <Radio value={9}>On The selected number / day of the month</Radio>
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

export default DaysPeriodiocidad;

import { Form, Button } from "antd";
import { Checkbox } from "antd";
import React, { useState } from "react";
let minutos = [];

const SpecificSecond = () => {
  // const [minutos, setminutos] = useState([]);
  function onChange(checkedValues) {
    minutos = checkedValues;
    // console.log("minutos = ", minutos);
  }

  const plainOptions = [];
  let minute = -1;
  while (minute < 59) {
    minute++;
    const obj = { label: `${minute}`, value: minute };
    plainOptions.push(obj);
  }
  const onFinish = (values) => {
    console.log("radio checked", minutos);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form
          // {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item name="specific-second">
            <p>Specifiq second (chose one or many)</p>
            <Checkbox.Group
              options={plainOptions}
              defaultValue={["Apple"]}
              onChange={onChange}
            />
            <br />
          </Form.Item>

          <Form.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
      <p>You clicked {minutos} times</p>
    </>
  );
};

export default SpecificSecond;

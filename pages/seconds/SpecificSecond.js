import { Form, Button } from "antd";
import { Checkbox } from "antd";
import React, { useState } from "react";
let segundos = [];

const SpecificSecond = () => {
  function onChange(checkedValues) {
    segundos = checkedValues;
  }

  const plainOptions = [];
  let second = -1;
  while (second < 59) {
    second++;
    const obj = { label: `${second}`, value: second };
    plainOptions.push(obj);
  }
  const onFinish = (values) => {
    console.log("segundos", segundos);
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
    </>
  );
};

export default SpecificSecond;

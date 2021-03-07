import { Form, Button } from "antd";
import { Checkbox } from "antd";
let horas = [];

const SpecificHour = () => {
  function onChange(checkedValues) {
    horas = checkedValues;
  }

  const plainOptions = [];
  let hour = -1;
  while (hour < 17) {
    hour++;
    const obj = { label: `${hour}`, value: hour };
    plainOptions.push(obj);
  }
  const onFinish = (values) => {
    console.log("horas", horas);
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
          <Form.Item name="specific-hour">
            <p>Specifiq hour (chose one or many)</p>
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

export default SpecificHour;

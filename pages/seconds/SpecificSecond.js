import { Form, Button } from "antd";
import { Checkbox } from "antd";

function onChange(checkedValues) {
  console.log("checked = ", checkedValues);
}

const plainOptions = [];
let minute = 0;
while (minute < 60) {
  minute++;
  const obj = { label: `${minute}`, value: minute };
  plainOptions.push(obj);
}

const SpecificSecond = () => {
  const onFinish = (values) => {
    console.log("radio checked", values);
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
          <Form.Item name="specific-second" label="Specific second:">
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

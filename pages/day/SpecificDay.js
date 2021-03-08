import { Form, Button } from "antd";
import { Checkbox } from "antd";
let dias = [];

const SpecificDay = () => {
  function onChange(checkedValues) {
    dias = checkedValues;
  }

  const plainOptions = [];
  let day = 0;
  while (day < 31) {
    day++;
    const obj = { label: `${day}`, value: day };
    plainOptions.push(obj);
  }
  const onFinish = (values) => {
    console.log("dias", dias);
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
          <Form.Item name="specific-day">
            <p>Specifiq day (chose one or many)</p>
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

export default SpecificDay;

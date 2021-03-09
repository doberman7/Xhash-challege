import { Form, Button, Radio, Divider } from "antd";
import "antd/dist/antd.css";
const OnTheLastDayOfMonth = () => {
  let selected = null;
  const onChange = (e) => {
    selected = e.target.value;
  };
  const onFinish = (values) => {
    // console.log(values);

    switch (selected) {
      case 1:
        console.log(values.lastDayOfTheMonth);
        break;

      case 2:
        console.log(values.lastWeekendOfTheMonth);
        break;

      default:
        null;
        break;
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const parentRadio = {
    // width: "100%",
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
          <Radio.Group
            name="radiogroup"
            style={parentRadio}
            onChange={onChange}
          >
            <Radio value={1} valuePropName="checked">
              <Form.Item
                name="lastDayOfTheMonth"
                initialValue="lastDayOfTheMonth"
              >
                On the last day of the month
              </Form.Item>
            </Radio>

            <Divider />
            <Radio value={2}>
              <Form.Item
                name="lastWeekendOfTheMonth"
                initialValue="lastWeekendOfTheMonth"
              >
                On the last weekend of the month
              </Form.Item>
            </Radio>
          </Radio.Group>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default OnTheLastDayOfMonth;

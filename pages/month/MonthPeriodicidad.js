import React from "react";
import { Formik, Field, Form } from "formik";
import { Divider } from "antd";

const EveryMonth = () => {
  return (
    <>
      <label>
        <Field type="radio" name="picked" value="every-month" />
        EveryMonth
      </label>
    </>
  );
};
const EveryXMonth = () => {
  return (
    <>
      <label>
        <Field type="radio" name="picked" value="every-month-stating-at" />
        EveryXMonths starting at month X
      </label>
    </>
  );
};
const SpecificMonth = () => {
  return (
    <>
      <label>
        <Field type="radio" name="picked" value="Tree" />
        <Field as="select" name="color">
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </Field>
      </label>
    </>
  );
};

const EveryMonthBetween = () => <p>EveryMonthBetween</p>;

const MonthPeriodicidad = () => (
  <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        picked: "",
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form>
          {/* <div id="my-radio-group">Picked</div> */}
          <div role="group" aria-labelledby="my-radio-group">
            <EveryMonth />
            <Divider />
            <EveryXMonth />
            <Divider />
            <SpecificMonth />

            <div>Picked: {values.picked}</div>
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default MonthPeriodicidad;

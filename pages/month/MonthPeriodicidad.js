import React from "react";
import { Formik, Field, Form } from "formik";
import { Divider } from "antd";

const EveryMonth = () => {
  return (
    <>
      <label>
        <Field type="radio" name="picked" value="One" />
        EveryMonth
      </label>
    </>
  );
};
const EveryXMonth = () => {
  const months = [];
  const monthsNames = [];
  const mesesLista = [
    "January",
    "February",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  //numerar meses 1->12
  for (let i = 1; i < 13; i++) {
    months.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  //enlistar meses
  mesesLista.map((mes) => {
    monthsNames.push(
      <option key={mes} value={mes}>
        {mes}
      </option>
    );
  });
  return (
    <>
      <label>
        <Field type="radio" name="picked" value="Two" />
        every &nbsp;
        <Field as="select" name="month(s)">
          {months}
        </Field>
        &nbsp;month(s) starting at
        <Field as="select" name="monthsNames(s)">
          {monthsNames}
        </Field>
      </label>
    </>
  );
};
const SpecificMonth = () => {
  const monthsNames = [];
  const mesesLista = [
    "January",
    "February",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  mesesLista.map((mes) => {
    monthsNames.push(
      <label>
        <Field type="checkbox" name="checked" value={mes} key={mes} />
        {mes}
      </label>
    );
  });
  return (
    <>
      <label>
        <Field type="radio" name="picked" value="Tree" />
        {/* <div id="checkbox-group">Checked</div> */}
        {/* <div role="group" aria-labelledby="checkbox-group"> */} Specific
        month choose one or many
        <Divider />
        <>{monthsNames}</>
        {/* </div> */}
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

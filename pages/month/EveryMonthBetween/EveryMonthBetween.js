import { Field } from "formik";
const EveryMonthBetween = () => {
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
        <Field type="radio" name="picked" value="Four" />
        &nbsp;Every month between &nbsp;
        <Field as="select" name="montNameA">
          <option key="0" value="0"></option>
          {monthsNames}
        </Field>
        &nbsp;and month &nbsp;
        <Field as="select" name="montNameB">
          <option key="0" value="0"></option>
          {monthsNames}
        </Field>
      </label>
    </>
  );
};

export default EveryMonthBetween;

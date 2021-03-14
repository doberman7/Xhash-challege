import { Field } from "formik";
const EveryXMonth = () => {
  const months = [];
  const monthsNames = [];
  const mesesLista = [
    null,
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
        &nbsp;Every &nbsp;
        <Field as="select" name="every">
          <option key="0" value="0"></option>
          {months}
        </Field>
        &nbsp;month(s) starting at
        <Field as="select" name="monthStartingAt">
          {monthsNames}
        </Field>
      </label>
    </>
  );
};

export default EveryXMonth;

import { Field } from "formik";

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
      <label key={mes}>
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
        month (choose one or many)
        <br />
        {monthsNames}
        {/* </div> */}
      </label>
    </>
  );
};
export default SpecificMonth;

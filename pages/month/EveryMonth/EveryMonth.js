import { Field } from "formik";

const EveryMonth = () => {
  return (
    <>
      <label>
        <Field type="radio" name="picked" value="One" />
        &nbsp;EveryMonth
      </label>
    </>
  );
};

export default EveryMonth;

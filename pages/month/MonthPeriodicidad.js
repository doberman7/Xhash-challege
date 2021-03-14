import React from "react";
import { Formik, Form } from "formik";
import { Divider } from "antd";
import styles from "./months.module.css";
import Link from "next/link";
import "antd/dist/antd.css";
import EveryMonth from "./EveryMonth/EveryMonth";
import EveryXMonth from "./EveryXMonth/EveryXMonth";
import SpecificMonth from "./SpecificMonth/SpecificMonth";
import EveryMonthBetween from "./EveryMonthBetween/EveryMonthBetween";

const MonthPeriodicidad = () => (
  <>
    {" "}
    <div>
      <h1>Month</h1>
      <Formik
        initialValues={{
          picked: "",
        }}
        onSubmit={async (values) => {
          // await new Promise((r) => setTimeout(r, 500));
          // console.log(JSON.stringify(values, null, 2));

          console.log(JSON.stringify(values.picked, null, 2));
          //
          switch (values.picked) {
            case "One":
              console.log("every-month");
              break;
            case "Two":
              console.log("every", values.every);
              console.log("month(s) starting at", values.monthStartingAt);
              break;
            case "Tree":
              console.log("checked", values.checked);
              break;
            case "Four":
              console.log("Every month between", values.montNameA);
              console.log("and month", values.montNameB);

              break;

            default:
              break;
          }
        }}
      >
        {({ values }) => (
          <Form>
            {/* <div id="my-radio-group">Picked</div> */}
            <div role="group" aria-labelledby="my-radio-group">
              <ol>
                <li>
                  {" "}
                  <EveryMonth />
                </li>
                <li>
                  <EveryXMonth />
                </li>
                <li>
                  {" "}
                  <SpecificMonth />
                </li>
                <li>
                  {" "}
                  <EveryMonthBetween />
                </li>

                <Divider />
              </ol>

              <div>Picked: {values.picked}</div>
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
    <br />
    <div className={styles.backToHome}>
      <Link href="/">
        <a>← Back to home</a>
      </Link>
    </div>
  </>
);

export default MonthPeriodicidad;

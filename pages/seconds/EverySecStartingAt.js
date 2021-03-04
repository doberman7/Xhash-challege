import "antd/dist/antd.css";
import Every from "./Every";
import StartingAt from "./StartingAt";
const EverySecStartingAt = () => {
  return (
    <>
      <div
        style={{
          display: "inline-block",
          width: "auto",
        }}
      >
        {" "}
        <Every />
      </div>
      <StartingAt />
    </>
  );
};

export default EverySecStartingAt;

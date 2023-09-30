import { format } from "date-fns";

function ClockDisplay({ date, title, timezone, offset }) {
  const offsetHour = offset / 60;
  return (
    <>
      <h1>{title}</h1>
      <h2>{format(date, "yyyy-MM-dd hh:mm:ss aaaaa'm'")}</h2>
      <p>
        {timezone} |{" "}
        {offsetHour > 0
          ? `+${Math.abs(offsetHour)}`
          : `-${Math.abs(offsetHour)}`}
      </p>
    </>
  );
}

export default ClockDisplay;

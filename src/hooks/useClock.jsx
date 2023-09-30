import { useEffect, useState } from "react";
import { addMinutes } from "date-fns";
import { TIME_ZONE__OFFSET } from "../constants/index ";
function useClock(timeZone, offset) {
  const [LocalDate, setLocalDate] = useState(null);
  const [LocalTimezone, setLocalTimezone] = useState();
  const [LocalOffset, setLocalOffset] = useState(0);
  const [UTC, setUTC] = useState(null);

  useEffect(() => {
    let d = new Date();
    const Local_offset = d.getTimezoneOffset();
    console.log("iam d", d.getTime());
    d = addMinutes(d, Local_offset);
    setUTC(d);
    setLocalOffset(Local_offset);
  }, []);

  useEffect(() => {
    if (UTC !== null) {
      if (timeZone) {
        offset = TIME_ZONE__OFFSET[timeZone] ?? offset;
        const newUTC = addMinutes(UTC, offset);
        setLocalDate(newUTC);
      } else {
        const newUTC = addMinutes(UTC, -LocalOffset);
        const dateStrRrr = newUTC.toUTCString().split(" ");
        setLocalDate(newUTC);
        setLocalTimezone(dateStrRrr.pop());
      }
    }
  }, [UTC, timeZone, offset]);

  return {
    date: LocalDate,
    dateUTC: UTC,
    timeZone: timeZone || LocalTimezone,
    offset: offset || -LocalOffset,
  };
}

export default useClock;

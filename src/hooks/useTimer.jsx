import { addSeconds } from "date-fns";
import { useEffect, useState } from "react";

const useTimer = (date) => {
  const [Timer, setTimer] = useState(date);

  useEffect(() => {
    setTimer(date);
  }, [date]);

  let TimerId = null;

  useEffect(() => {
    if (!Timer || TimerId !== null) return;

    TimerId = setInterval(() => {
      setTimer(addSeconds(Timer, 1));
    }, 1000);

    return () => clearInterval(TimerId);
  }, [Timer]);

  return Timer;
};

export default useTimer;

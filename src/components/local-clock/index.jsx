import { useEffect } from "react";
import useClock from "../../hooks/useClock";
import useTimer from "../../hooks/useTimer";
import ClockAction from "../sheard/clock-action";
import ClockDisplay from "../sheard/ui/clock-display";

function Local_clock({ clock, updateClock, CreateClock }) {
  const { date, offset, timeZone } = useClock(clock.timeZone, clock.offset);
  const Timer = useTimer(date);
  console.log("udrhefuwffffyfy", Timer);
  useEffect(() => {
    updateClock({
      date,
      timeZone,
      offset,
    });
  }, [date]);

  return (
    <>
      {Timer && (
        <ClockDisplay
          date={Timer}
          title={clock.title}
          timezone={timeZone}
          offset={offset}
        />
      )}
      <ClockAction
        local={true}
        clock={clock}
        updateClock={updateClock}
        CreateClock={CreateClock}
      />
    </>
  );
}

export default Local_clock;

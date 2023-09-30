import { formatDistance } from "date-fns";
import React from "react";
import useClock from "../../hooks/useClock";
import useTimer from "../../hooks/useTimer";
import ClockAction from "../sheard/clock-action";
import ClockDisplay from "../sheard/ui/clock-display";

function ClockListItem({ clock, colockUpdeted, deleteClock, localClock }) {
  const { date } = useClock(clock.timeZone, clock.offset);
  const Timer = useTimer(date);
  if (!date || !Timer) return null;
  return (
    <>
      <ClockDisplay
        date={Timer}
        offset={clock.offset}
        timezone={clock.timeZone}
        title={clock.title}
      />
      <h2>{formatDistance(localClock, Timer)}</h2>
      <ClockAction
        clock={clock}
        updateClock={colockUpdeted}
        deleteClock={deleteClock}
      />
    </>
  );
}

export default ClockListItem;

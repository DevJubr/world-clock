import { useEffect, useState } from "react";
import { generate } from "shortid";
import "./App.css";
import Clock_List from "./components/click-list";
import Local_clock from "./components/local-clock";
import useEvents from "./hooks/useEvents";

const LOCAL_CLOCK_INIT = {
  title: "my clock",
  timeZone: "",
  offset: 0,
  date: null,
};

function App() {
  const [locaClock, setlocaClock] = useState({ ...LOCAL_CLOCK_INIT });
  const [Clocks, setClocks] = useState([]);
  const {
    events,
    addEvent,
    deleteEvent,
    deleteEventByCLOck,
    getEventByClockId,
    getEvents,
    updateEvents,
  } = useEvents();

  useEffect(() => {
    if (Object.keys(events).length === 0) {
      addEvent({ title: "add clcok", clockId: "clock__ide__123" });
    }
    console.log("all events", getEvents());
    console.log("all events in arry", getEvents(true));
  }, [events]);

  const updateClock = (data) => {
    setlocaClock({
      ...locaClock,
      ...data,
    });
  };

  const CreateClock = (clock) => {
    clock.id = generate();
    setClocks([...Clocks, clock]);
  };
  const colockUpdeted = (updetedClock) => {
    const updtelc = Clocks.map((clcok) => {
      if (clcok.id === updetedClock.id) return updetedClock;
      return clcok;
    });
    setClocks(updtelc);
  };
  const deleteClock = (id) => {
    const updeted = Clocks.filter((clk) => clk.id !== id);
    setClocks(updeted);
  };
  return (
    <div className="App">
      <Local_clock
        clock={locaClock}
        updateClock={updateClock}
        CreateClock={CreateClock}
      />
      <hr />
      <Clock_List
        localClock={locaClock.date}
        clocks={Clocks}
        colockUpdeted={colockUpdeted}
        deleteClock={deleteClock}
      />
    </div>
  );
}

export default App;

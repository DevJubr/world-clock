import { object } from "prop-types";
import React, { useState } from "react";
import { generate } from "shortid";

function useEvents() {
  const [State, setState] = useState({});
  const getEventByClockId = (clockId, isArray = false) => {
    return Object.keys(State).filter((item) => item.startsWith(clockId));
  };
  const getEvents = (isArray = false) => {
    if (!isArray) return State;
    return Object.values(State);
  };
  const addEvent = (event) => {
    event.id = generate();
    setState((prev) => ({
      ...prev,
      [`${event.clockId}|${event.id}`]: event,
    }));
  };
  const deleteEvent = (id) => {
    const event = { ...State };
    delete event[id];
    setState(event);
  };
  const deleteEventByCLOck = (clockId) => {
    const events = Object.keys(State).filter(
      (item) => !item.startsWith(clockId)
    );
    setState(events);
  };

  const updateEvents = (updated, id) => {
    let event = { ...State };
    event[id] = {
      ...event[id],
      ...updated,
    };
    setState(event);
  };

  return {
    events: State,
    getEventByClockId,
    getEvents,
    addEvent,
    deleteEvent,
    deleteEventByCLOck,
    updateEvents,
  };
}

export default useEvents;

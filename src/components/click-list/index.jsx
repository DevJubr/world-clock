import ClockListItem from "./Click-list-item";

function Clock_List({ clocks, colockUpdeted, deleteClock, localClock }) {
  return (
    <>
      <h3>ohter clocks</h3>
      <hr />
      <ul>
        {clocks.length === 0 ? (
          <p>there is no clock</p>
        ) : (
          <li>
            {clocks.map((cl) => (
              <li>
                <ClockListItem
                  clock={cl}
                  colockUpdeted={colockUpdeted}
                  deleteClock={deleteClock}
                  localClock={localClock}
                />
              </li>
            ))}
          </li>
        )}
      </ul>
    </>
  );
}

export default Clock_List;

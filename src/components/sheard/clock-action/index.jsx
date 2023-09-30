import React, { useState } from "react";
import ClockForm from "../clock-form";

function ClockAction({
  local = false,
  clock,
  updateClock,
  CreateClock,
  deleteClock,
}) {
  const [isEdit, setisEdit] = useState(false);
  const [isCreate, setisCreate] = useState(false);
  const hemndelCreate = (values) => {
    CreateClock(values);
  };
  return (
    <div>
      <button onClick={() => setisEdit(!isEdit)}>Edit</button>
      {local ? (
        <button onClick={() => setisCreate(!isCreate)}>create</button>
      ) : (
        <button onClick={() => deleteClock(clock.id)}>delete</button>
      )}
      {isEdit && (
        <>
          <h3>create edit</h3>
          <ClockForm
            values={clock}
            edit={true}
            title={!local}
            hendelClock={updateClock}
          />
        </>
      )}
      {isCreate && (
        <>
          <h3>create create</h3>
          <ClockForm hendelClock={hemndelCreate} />
        </>
      )}
    </div>
  );
}

export default ClockAction;
//
{
  /*  <div><input
type="text"
name="title"
value={clock.title}
onChange={hemdelChange}
/>
<select
name="timeZone"
id="timzo"
onChange={hemdelChange}
value={clock.timeZone}
>
<option value="GMT">GMT</option>
<option value="UTC">UTC</option>
<option value="PST">PST</option>
<option value="EST">EST</option>
<option value="EdT">EdT</option>
<option value="BST">BST</option>
</select>
{(clock.timeZone === "GMT" || clock.timeZone === "UTC") && (
<select
  name="offset"
  onChange={hemdelChange}
  value={clock.offset / 60}
>
  {defalteoffset.map((offf) => (
    <option key={offf} value={offf}>
      {offf}
    </option>
  ))}
</select>
)}
</div> */
}

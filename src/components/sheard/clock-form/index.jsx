import { useEffect, useState } from "react";
import { TIME_ZONE__OFFSET } from "../../../constants/index ";
import { getOffset } from "../../../utils/timezone";
const ClockForm = ({
  values = { title: "", timeZone: "GMT", offset: 0 },
  title = true,
  hendelClock,
  edit = false,
}) => {
  const [formValues, setformValues] = useState({ ...values });
  useEffect(() => {
    if (TIME_ZONE__OFFSET[formValues.timeZone]) {
      setformValues((prev) => ({
        ...prev,
        offset: TIME_ZONE__OFFSET[formValues.timeZone],
      }));
    }
  }, [formValues.timeZone]);
  const hendelChenge = (e) => {
    let { name, value } = e.target;
    if (name === "offset") {
      value = Number(value * 60);
    }
    setformValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const hendelSubit = (e) => {
  //   e.preventDefault();
  //
  // };
  const hendelSubmit = (e) => {
    e.preventDefault();
    hendelClock(formValues);
  };

  return (
    <form onSubmit={hendelSubmit}>
      <div>
        <label htmlFor="title">enter title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={hendelChenge}
          value={formValues.title}
          disabled={!title}
        />
      </div>
      <div>
        <label htmlFor="">enter timezone</label>
        <select
          name="timeZone"
          id=" timeZone"
          onChange={hendelChenge}
          value={formValues.timeZone}
        >
          <option value="GMT">GMT</option>
          <option value="UTC">UTC</option>
          <option value="PST">PST</option>
          <option value="EST">EST</option>
          <option value="EdT">EdT</option>
          <option value="BST">BST</option>
        </select>
      </div>

      {(formValues.timeZone === "GMT" || formValues.timeZone === "UTC") && (
        <div>
          <label htmlFor="offset">enter offset</label>
          <select
            id="offset"
            onChange={hendelChenge}
            name="offset"
            value={formValues.offset / 60}
          >
            {getOffset().map((offf) => (
              <option key={offf} value={offf}>
                {offf}
              </option>
            ))}
          </select>
        </div>
      )}

      <button type="submit">{edit ? "update" : "create"}</button>
    </form>
  );
};

export default ClockForm;

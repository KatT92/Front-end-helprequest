import React from "react";

function HelpInput({ getRequestsName, getRequestsDate }) {
  /* TO-DO - change these to states */
  let fname = "";
  let date = "";

  /* TO-DO - refactor - dropdown menu? */
  return (
    <div>
      <input
        className="inputField"
        type="text"
        placeholder="Please enter a name"
        onChange={(event) => {
          return (fname = event.target.value);
        }}
      />
      <button
        className="submitButton"
        type="submit"
        onClick={() => getRequestsName(fname)}
      >
        Submit
      </button>
      <br />
      <input
        className="inputField"
        type="date"
        placeholder="Please enter a date"
        onChange={(event) => {
          return (date = event.target.value);
        }}
      />
      <button
        className="submitButton"
        type="submit"
        onClick={() => getRequestsDate(date)}
      >
        Submit
      </button>
    </div>
  );
}

export default HelpInput;

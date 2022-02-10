import React, { useState } from "react";
import HelpDisplay from "./HelpDisplay";
import HelpInput from "./HelpInput";
import { makeKey } from "../App/App.js";
import { getUsers } from "../App/App.js";
import { herokuUrl } from "../App/App.js";

export default function Analysis() {
  /* TODO - add last name, word in problem, and time to complete request */
  // initialise (first) name and date array state
  const [getName, setGetName] = useState([]);
  const [getDate, setGetDate] = useState([]);

  const url = herokuUrl(); //url of back-end

  /* TODO - 
  1. back-end - send get request, but only return data back where name matches
  2. make getRequests and getRequestsDate into a single function?
    - On submit, see which box has been filled in 
    - Dropdown menu?
  3. Add a reset state function to getRequestDate, and getRequestName.
  */

  // fname - first name - given as an input from user
  async function getRequestsName(fname) {
    let allData = await getUsers(url); // sends GET request to back-end, returns all Data from database as an array
    let fnameArray = allData.rows.filter((item) => {
      return item.fname.toLowerCase() === fname.toLowerCase();
    }); // return all objects where fname matches, case insensitive

    // set filtered fname array, reset all other arrays
    setGetName([...fnameArray]);
    setGetDate([]);
  }

  // date given from an input box by user
  async function getRequestsDate(date) {
    // reformat (rf) date so it's the same form
    let rfDate = date.toString().split("-"); // (yyyy/mm/dd)
    date = rfDate[2] + "/" + rfDate[1] + "/" + rfDate[0]; // (dd/mm/yyyy)

    let allData = await getUsers(url);
    let dateArray = allData.rows.filter((item) => {
      return item.date === date;
    }); // returns all objects where the date matches

    // set filtered date array, reset all other arrays
    setGetDate([...dateArray]);
    setGetName([]);
  }

  // TODO - refactor
  return (
    <div>
      Analysis:
      <HelpInput
        getRequestsName={getRequestsName}
        getRequestsDate={getRequestsDate}
      />
      <br />
      History of requests:
      <hr />
      {getName.map((item, index) => {
        return (
          <div>
            <HelpDisplay
              key={makeKey()}
              index={index}
              date={item.date}
              fname={item.fname}
              lname={item.lname}
              problem={item.problem}
              tried={item.tried}
            />
            <hr />
          </div>
        );
      })}
      {getDate.map((item, index) => {
        return (
          <div>
            <HelpDisplay
              key={makeKey()}
              index={index}
              date={item.date}
              fname={item.fname}
              lname={item.lname}
              problem={item.problem}
              tried={item.tried}
            />
            <hr />
          </div>
        );
      })}
    </div>
  );
}

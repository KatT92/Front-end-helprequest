import React, { useState } from "react";
import FormInput from "./FormInput";
import FormDisplay from "./FormDisplay";
import { makeKey } from "../App/App.js";
import { herokuUrl } from "../App/App.js";

export function HelpRequest() {
  const url = herokuUrl();
  //list of data that you view
  const [arrayData, setArrayData] = useState([]);

  const [fname, setFname] = useState(""); //firstname
  const [lname, setLname] = useState(""); //lastname
  const [room, setRoom] = useState("");
  const [problem, setProblem] = useState("");
  const [tried, setTried] = useState("");
  // const [date, setDate] = useState("")

  //resets state
  function handleReset() {
    setFname("");
    setLname("");
    setRoom("");
    setProblem("");
    setTried("");
  }

  // changes the fname, lname, room, problem, tried, when you type in the input boxes
  //TODO- automate these to one function?
  function changeFname(fname) {
    setFname(fname);
  }

  function changeLname(lname) {
    setLname(lname);
  }

  function changeRname(room) {
    setRoom(room);
  }

  function changePname(problem) {
    setProblem(problem);
  }

  function changeTname(tried) {
    setTried(tried);
  }

  //sends a post request to back-end
  async function postReq(date, fname, lname, room, problem, tried) {
    let data = {
      date: date,
      fname: fname,
      lname: lname,
      room: room,
      problem: problem,
      tried: tried,
    };

    fetch(`${url}/users`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  function addItem(fname, lname, room, problem, tried) {
    if (
      //if user has added input to all fields
      fname.length > 1 &&
      lname.length > 1 &&
      room.length > 0 &&
      problem.length > 2 &&
      tried.length > 2
    ) {
      //creates a date from the current date in form dd/mm/yyyy
      let currentTime = new Date();
      let day = currentTime.getDate().toString();
      let month = (currentTime.getMonth() + 1).toString();
      if (month.length === 1) {
        month = "0" + month;
      }
      let year = currentTime.getFullYear().toString();
      let date = day + "/" + month + "/" + year;

      //adds to list that you view on screen
      setArrayData([
        ...arrayData,
        {
          date: date,
          fname: fname,
          lname: lname,
          room: room,
          problem: problem,
          tried: tried,
        },
      ]);

      postReq(url, date, fname, lname, room, problem, tried);
      handleReset(); //resets all input boxes
    } else {
      //keeps list the same
      setArrayData([...arrayData]);
      handleReset(); //resets all input boxes

      //TODO - add a way to tell user to add to all input boxes here
    }
  }
  // if a helper has been added, when you click completed, it removes the item from the list
  function deleteItem(helper, index) {
    if (helper.length > 1) {
      setArrayData([
        ...arrayData.slice(0, index),
        ...arrayData.slice(index + 1),
      ]);
    } else {
      setArrayData([...arrayData]);
    }
  }

  return (
    <div>
      Request help:
      <FormInput
        addItem={addItem}
        fname={fname}
        handleReset={handleReset}
        changeFname={changeFname}
        lname={lname}
        changeLname={changeLname}
        room={room}
        changeRname={changeRname}
        problem={problem}
        changePname={changePname}
        tried={tried}
        changeTname={changeTname}
      />
      <br />
      List of requests:
      <hr />
      {arrayData.map((item, index) => {
        return (
          <div>
            <FormDisplay
              deleteItem={deleteItem}
              date={item.date}
              index={index}
              key={makeKey()}
              fname={item.fname}
              lname={item.lname}
              room={item.room}
              problem={item.problem}
              tried={item.tried}
            ></FormDisplay>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

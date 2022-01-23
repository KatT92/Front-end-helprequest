import "./App.css";
import React from "react";
import Analysis from "../Help";
import { Routes, Route, Link } from "react-router-dom";
import { nanoid } from "nanoid";
import { HelpRequest } from "../Form";

// functions needed for both routes

// set URL
export function herokuUrl() {
  // 'localhost:5000/'
  return `https://node-postgres-work.herokuapp.com`;
}

// GET request to back-end, returns all data from DB
export async function getUsers(url) {
  let response = await fetch(`${url}/users`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": " application/json",
    },
  });
  let data = await response.json();
  let dataPayload = data.payload;
  return dataPayload;
}

//makes unique key for props
export function makeKey() {
  const key = nanoid();
  return key;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the help desk!</h1>
        <nav>
          <li>
            <Link to="/">Help page</Link>
          </li>
          <li>
            <Link to="/analysis">Analysis page</Link>
          </li>
        </nav>
        <Routes>
          <Route path="/" element={<HelpRequest />} />
          <Route path="/analysis" element={<Analysis />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

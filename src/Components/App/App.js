import { nanoid } from 'nanoid'
import './App.css';
import React, {useState} from 'react';
import FormDisplay from '../Form/FormDisplay/index.js';
import FormInput from '../Form/FormInput/index.js';
import HelpDisplay from '../Help/HelpDisplay/index.js';
import HelpInput from '../Help/HelpInput/index.js';
import {Routes, Route, Link} from 'react-router-dom';
import axios from 'axios';

function App() {

  // const API_URL = '/data'

  async function getUsers() {
    // const proxyUrl = `https://cors-anywhere.herokuapp.com/`
    // const url = `http://localhost:5000`
    const url = `https://node-postgres-work.herokuapp.com`
    let response = await fetch(`${url}/users`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': ' application/json',
              },
    });

    let data = await response.json()
    let datapl = data.payload
    return datapl
    }



const [getName, setGetName] = useState([])

async function getRequests(fname) {
  let newData = await getUsers()
  console.log(newData.rows)
  let newArray = newData.rows.filter((item)=>{return item.fname.toLowerCase() === fname.toLowerCase()})
  console.log(newArray)
  setGetName([...newArray])
  setGetDate([])
  return newArray
}

const [getDate, setGetDate] = useState([])

async function getRequestsDate(date) {
  console.log(date.toString())
  let datearray = date.toString().split("-")
  let newDate = datearray[2] + "/" + datearray[1] + "/" + datearray[0]
  
  let newData = await getUsers()
  let newArray = newData.filter((item)=>{return item.date === newDate})
  console.log(newArray)
  setGetDate([...newArray])
  setGetName([])
  return newArray
}

  const [arrayData, setArrayData] = useState([])

 
const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [room, setRoom] = useState("")
  const [problem, setProblem] = useState("")
  const [tried, setTried] = useState("")

  function handleReset() {
    setFname("")
    setLname("")
    setRoom("")
    setProblem("")
    setTried("")
  }

  function changeFname(fname) {
    setFname(fname)
  }

  function changeLname(lname) {
    setLname(lname)
  }

  function changeRname(room) {
    setRoom(room)
  }

  function changePname(problem) {
    setProblem(problem)
  }

  function changeTname(tried) {
    setTried(tried)
  }




  function addItem(fname, lname, room, problem, tried) {
    
    if (
      fname.length>1 &&
      lname.length>1 && 
      room.length>0 && 
      problem.length>2 && 
      tried.length>2
      ) {
    setArrayData([...arrayData, {
      fname:fname, lname:lname, room:room, problem:problem, tried:tried, 
    }])

      }
      else { 
        setArrayData([...arrayData])
        handleReset()
      }

      
  }

  function deleteItem(helper, index) {
    if (helper.length>1) {
    setArrayData([...arrayData.slice(0, index), ...arrayData.slice(index+1)])
    }
    else {
      setArrayData([...arrayData])
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      Welcome to the help desk!
    <nav>
      <li><Link to="/">Help page</Link></li>
      <li><Link to="/analysis">Analysis page</Link></li>
      </nav>
      <Routes>
      <Route path="/" element={
        <div>
        Request help:
      <FormInput addItem={addItem} 
      fname={fname} handleReset={handleReset} changeFname={changeFname} 
      lname={lname} changeLname={changeLname} 
      room={room} changeRname={changeRname} 
      problem={problem} changePname={changePname} 
      tried={tried} changeTname={changeTname} 
      />
      { arrayData.map((item, index)=> { return ( 
  <FormDisplay deleteItem={deleteItem} /*file={item.file}*/ index={index} key={index} fname={item.fname} lname={item.lname} room={item.room} problem={item.problem} tried={item.tried}  ></FormDisplay>
  )})} 
</div> }/>

<Route path="/analysis" element={
  <div>
  Analysis:
<HelpInput getRequests={getRequests} getRequestsDate={getRequestsDate} />
{ getName.map((item, index)=> { return ( 
<HelpDisplay key={index} index={index} date={item.date} fname={item.fname} lname={item.lname} problem={item.problem} tred={item.tried}/>
)})}
{ getDate.map((item, index)=> { return ( 
<HelpDisplay key={index} index={index} date={item.date} fname={item.fname} lname={item.lname} problem={item.problem} tred={item.tried}/>
)})}
</div>
}/>
</Routes>
      </header>
    </div>
  );
}

export default App;


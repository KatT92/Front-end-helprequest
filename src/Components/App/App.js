import { nanoid } from 'nanoid'
import './App.css';
import React, {useState} from 'react';
import FormDisplay from '../Form/FormDisplay/index.js';
import FormInput from '../Form/FormInput/index.js';
import HelpDisplay from '../Help/HelpDisplay/index.js'
import HelpInput from '../Help/HelpInput/index.js'
import {Routes, Route, Link} from 'react-router-dom'

function App() {

  // const API_URL = '/data'
  // const url = new URL(`http://localhost:5000`)

  async function getUsers() {
    let response = await fetch(`http://localhost:5000/helpData`);
    let data = await response.json()
    let datapl = data.payload
    return datapl
    }

const [getName, setGetName] = useState([])

async function getRequests(fname) {
  let newData = await getUsers()
  let newArray = newData.filter((item)=>{return item.fname === fname})
  console.log(newArray)
  setGetName([...getName, ...newArray])
  return newArray
}



  const [arrayData, setArrayData] = useState([])

  function addItem(fname, lname, room, problem, tried, file) {
    if (fname.length>1 && 
      lname.length>1 && 
      room.length>0 && 
      problem.length>2 && 
      tried.length>2
      ) {
    setArrayData([...arrayData, {fname:fname, lname:lname, room:room, problem:problem, tried:tried, 
      // file:file[0].name
    }])
      }
      else { 
        setArrayData([...arrayData])}
  }

  function deleteItem(helper, index) {
    if (helper.length>1) {
    setArrayData([...arrayData.slice(0, index), ...arrayData.slice(index+1)])
    }
    else {
      setArrayData([...arrayData])
    }
  }


  // post request front-end

  // function setHelper(helper) {
  //   if (helper.length>1){
  //   setArrayData([...arrayData, {helper:helper}])
  //   }
  //   else {
  //   setArrayData([...arrayData])
  //   }
  // }

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
      <FormInput addItem={addItem} />
      { arrayData.map((item, index)=> { return ( 
  <FormDisplay deleteItem={deleteItem} /*file={item.file}*/ index={index} key={nanoid} fname={item.fname} lname={item.lname} room={item.room} problem={item.problem} tried={item.tried}  ></FormDisplay>
  )})} 
</div> }/>

<Route path="/analysis" element={
  <div>
  Analysis:
<HelpInput getRequests={getRequests} />
{ getName.map((item, index)=> { return ( 
<HelpDisplay key={index} index={index} fname={item.fname} lname={item.lname} problem={item.problem} tred={item.tried}/>
)})}
</div>
}/>
</Routes>
      </header>
    </div>
  );
}

export default App;


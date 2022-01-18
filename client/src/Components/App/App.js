import { nanoid } from 'nanoid'
import './App.css';
import React, {useState} from 'react';
import FormDisplay from '../Form/FormDisplay/index.js';
import FormInput from '../Form/FormInput/index.js';

// Get front-end to fetch data from our API
// Get this to render API reponse in React

//constructor(props) {
//   super(props);
//   this.state = { apiResponse: "" };
// }

// async callAPI() {
//  let response= await fetch("http://localhost:9000/testAPI")
//       .then(res => res.text())
//       .then(res => this.setState({ apiResponse: res }));
// }

// componentWillMount() {
//   this.callAPI();
// }

// set key as nanoid
// set datestamp


function App() {

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
      Request help:
      <FormInput addItem={addItem} />

      { arrayData.map((item, index)=> { return ( 
  <FormDisplay deleteItem={deleteItem} /*file={item.file}*/ index={index} key={nanoid} fname={item.fname} lname={item.lname} room={item.room} problem={item.problem} tried={item.tried}  ></FormDisplay>
  )})}

      </header>
    </div>
  );
}

export default App;


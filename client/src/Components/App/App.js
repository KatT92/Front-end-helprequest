
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


function App() {

  const [arrayData, setArrayData] = useState([])

  function addItem(fname, lname, room, problem, tried) {
    setArrayData([...arrayData, {fname:fname, lname:lname, room:room, problem:problem, tried:tried}])
  }

  return (
    <div className="App">
      <header className="App-header">
      Request help:
      <FormInput addItem={addItem}/>
      { arrayData.map((item, index)=> { return (
  <FormDisplay key={index} fname={item.fname} lname={item.lname} room={item.room} problem={item.problem} tried={item.tried}  ></FormDisplay>
  )})}
      </header>
    </div>
  );
}

export default App;


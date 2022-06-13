import './App.css';
import {useState, useEffect} from "react";
import Axios from "axios";

function App() {
  const [allUsers, setallUsers] = useState([]);
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [country, setCountry] = useState("")

  useEffect(() => {
    Axios.get("http://localhost:4000/r").then((res) => {
      setallUsers(res.data);
    });
  }, []);

  const submit = () => {
    Axios.post("http://localhost:4000/s", {
      name,
      age,
      country,
    }).then((res) => {
      setallUsers([...allUsers,{
        name,
        age,
        country
      },]);
    }); 
  };

  return (
    <div className="App">
      <div className='usersInfo'>
        {allUsers.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>age: {user.age}</h1>
              <h1>Country: {user.country}</h1>
            </div>
          )
        })}
      </div>
      
      <div>
        <input type = "text" placeholder="Name" onChange={(event) => {setName(event.target.value);}}/>
        <input type = "number" placeholder="age" onChange={(event) => {setAge(event.target.value);}}/>
        <input type = "text" placeholder="Name" onChange={(event) => {setCountry(event.target.value);}}/>
        <button onClick={submit}> Submit </button>
      </div>

    </div>
  );
}

export default App;

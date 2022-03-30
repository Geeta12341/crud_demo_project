import axios from "axios";
import { useState } from "react"
const AddNewUser = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [moNumber  , setmoNumber] = useState("");

  const submitFormHandler = (e) => {
    // stop reloading the page
    e.preventDefault();

    //  alert ("submit new form");

    //  console.log(firstName,lastName,email,Password,moNumber)
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      moNumber :moNumber
    };
    console.log(data)
    axios.post("http://localhost:4000/users", data)
      .then(res => alert("data added successfully"))
      .catch(err => alert(err));
  }


  return (
    <div>
      <h1 className="text-center mt-3">ADD NEW USER</h1>
      <form onSubmit={submitFormHandler} >
        <div className="form-group">
          <label >First Name</label>
          <input type="text" className="form-control" placeholder="Enter First Name" required
            value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>

        <div className="form-group">
          <label >Last Name</label>
          <input type="text" className="form-control" placeholder="Enter Last Name" required
            value={lastName} onChange={(e) => setlastName(e.target.value)} />
        </div>

        <div className="form-group">
          <label >Email Address</label>
          <input type="email" className="form-control" placeholder="Enter Email" required
            value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-group">
          <label >  Password</label>
          <input type="password" className="form-control" placeholder="Enter Password" required
            value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="form-group">
    <label >Contact Number</label>
     <input type="number" className="form-control"  placeholder="Enter Mobile Number"required 
     value= {moNumber} onChange={(e) => setmoNumber (e.target.value)} />
    </div>
        <input type="Submit" value="ADD USER" className="btn  btn-success" />


      </form>
    </div>
  )
}

export default AddNewUser
import { useEffect, useState } from "react"
import axios from "axios";




const EditUser = () => {

    const [userData, setUserData] = useState({});

    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [moNumber, setmoNumber] = useState("");

    useEffect(() => {
        axios.get("http://localhost:4000/users/622b514b531b5cd28032b40f")
            .then(res => {
                
                setFirstName(res.data[0].firstName);

                setlastName(res.data[0].lastName);

                setEmail(res.data[0].email);

                setPassword(res.data[0].password);

                setmoNumber(res.data[0].moNumber);

            }).catch(err => alert(err));
    }, [])
//  to update delete data
    const updateUserFormHandler = (e) => {

        e.preventDefault();

        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            moNumber :moNumber
          };
          console.log(data)
          axios.put("http://localhost:4000/users/622b514b531b5cd28032b40f", data)
            .then(res => alert("User update Data successfully"))
            .catch(err => alert(err));
        // // }

        alert("updateUserFormHandler")
    }



    return (
        <div>
            <h1 className="text-center mt-3"> EdIT USER </h1>
            <form onSubmit={updateUserFormHandler} >
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
                    <label > Contact Number</label>
                    <input type="number" className="form-control" placeholder="Enter Mobile Number" required
                        value={moNumber} onChange={(e) => setmoNumber(e.target.value)} />
                </div>
                <input type="Submit" value="EDIT USER" className="btn  btn-success" />


            </form>
        </div>

    )
}

export default EditUser;
import React,{useState,useEffect} from "react"
import axios from "axios"
import TableRow from "../components/TableRow";
// import { Link } from "react-router-dom";

 const Home = ()=>{

    // const [firstName , setFirstName] = useState("Gayatri");
    // const [lastName  , setlastName] = useState("Pawar");
    // const [email , setEmail] = useState("gayatripawar11099@gamil.com");
    // const [Password  , setPassword] = useState("abc@1234");
    // const [mobNumber  , setmoNumber] = useState(8010383621);

    // to store user data from api
    const [userData ,setUserData] = useState([]);
    console.log(userData)

    useEffect(()=>{
      //  fetch("http://localhost:4000/users")
      //  .then (res =>res.json ())
      //  .then (data =>{
      //      console.log(data);
      //  } ) .catch(err => alert(err));

    axios.get("http://localhost:4000/users")
    .then(res => {
        // console.log(res.data);
        setUserData(res.data);
    } ).catch (err => alert(err));

    },[])

// first-> reloads whenever any state value getting updated
    // console.log("Home page is Running")

    // first-> reloads whenever any state value getting updated
    // useEffect(() =>{
    //    console.log("useEffect Running 1")
    // });

    // second -> this will runs only once
    // useEffect(() =>{
        // console.log("useEffect Running 2")
    //  },[]);

    // third -> it will run everytime when the "firstName"  state getting updated
    //  useEffect(() =>{
        // console.log("useEffect Running 3")
    //  },[firstName]);


    // let firstName = "Geeta";
    // let lastName = "Pawar";
    // let  email   = "geetapawar11099@gmail.com";
    // let Password = "pbn@1234";
    // let moNumber = 7745026317;

    // const changDetails= ()=>{
    //     alert("Welcome To Project  " +  firstName)

    //     setFirstName("Geeta")
    //     setlastName("Pawar")
    //     setEmail("geetapawar11099@gmail.com")
    //     setPassword("pbn@1234")
    //     setmoNumber(7745026317)


    //     setFirstName()

    // //     FirstName = "Gayatri";
    //    lastName = "Pawar";
    //   email   = "gayatripawar11099@gmail.com";
    //   Password = "abc@1234";
    //   moNumber = 8010383621;

    //   console.log(firstName,lastName,email,Password,moNumber)
    // }

    

    return(
        <>
        <h1 className='text-center '>
        REACT, NODE, EXPRESS JS & MONGO DB  CRUD APP </h1>
    
     <a href= "/add-user" className='btn btn-success float-right  mb-3 text-white' >Add User</a>
    
       <table className='table'>
         <thead>
           <tr>
             <th>FirstName</th>
             <th>LastName</th>
             <th>Email</th>
             <th>Password</th>
             <th>Mobile Number</th>
             <th>Edit</th>
             <th>Delete</th>
             </tr>
         </thead>
         <tbody>
           {
             userData.map((user) => {
              
           return(
            <TableRow key={user._id} user = {user}/>
                )
              })
           }
         
    
          </tbody>
    
        </table>
       </>
    )
       }

export default Home
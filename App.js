import React from 'react';
import Home from './Pages/Home';
import './App.css';
import AddNewUser from "./Pages/AddNewUser";
import EditUser from "./Pages/EditUser";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className='container'>
       {/* <BrowserRouter>
       <Routes>
         <Route path='/' element={<Home  />}/>
         <Route path='/add-user' element={<AddNewUser  />}/>
         <Route path='/edit-user/:userId' element={<EditUser  />}/>
         
       </Routes>
       </BrowserRouter>   */}
        
        <Home />
        <AddNewUser/>
        <EditUser />




    </div>
  )
}

export default App;

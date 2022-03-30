import axios from "axios"
// import { Link } from "react-router-dom"



const TableRow = ({ user }) => {

    const deleteUserHandler = () => {
        alert("delete User Info" + user._id)
        axios.delete (`http://localhost:4000/users/${user._id}`)
        .then (res => alert(" User deleted Successfully"))
        .catch (err => alert(err));
    }

    return (<tr>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td>{user.moNumber}</td>
        <td>
            <a herf="/edit-user" className='btn btn-primary'>Edit</a>
        </td>
        <td>
            <button className='btn btn-danger' onClick={deleteUserHandler}>Delete</button>
        </td>
    </tr>)
}

export default TableRow;
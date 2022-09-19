import axios from 'axios';
import React from 'react';

const UsersList = ({users, selectUser, getUser}) => {

    const deleteUser = (id) => {
        alert("eliminando")
        axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
        .then(() => getUser())
    }
    return (
        <div>
            <h1>List of Users</h1>
            <ul className='user-list'>
                {
                    users.map(user =>(

                

                    <li key={user.id}>
                        <i class="fa-solid fa-user"></i>
                        
                        <hr />
                        <div><b>Email: </b>{user.email}</div>
                        <br />
                        <div><b>Password:</b>{user.password}</div>
                        <br />
                        <div><b>First Name: </b>{user.first_name}</div>
                        <br />
                        <div><b>Last Name: </b>{user.last_name}</div>
                        <br />
                        <div><b>Birthday: </b>{user.birthday}</div>
                        <button onClick={() =>selectUser(user)}> <i class="fa-solid fa-pen-to-square"></i></button>
                        <button onClick={() =>deleteUser(user.id)}><i class="fa-solid fa-trash"></i></button>


                    </li>
                    
                )) 
                }
            </ul>
        </div>
    );
};

export default UsersList;
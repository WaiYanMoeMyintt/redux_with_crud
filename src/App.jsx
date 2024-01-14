import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, updateUser, deleteUser } from "./features/Users";

const App = () => {
  const userData = useSelector((state) => state.user.value);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [update,setUpdate]   = useState("");
  const dispatch = useDispatch();


  return (
    <div>
      <div className="addUser">
        <input onChange={(event) => setName(event.target.value)} type="text" placeholder='name' />
        <input onChange={(event) => setUsername(event.target.value)} type="text" placeholder="Username" />
        <button onClick={() => dispatch(addUser({ name: name, username: username }))}>Add User</button>
      </div>
      <div className="displayUser">
        {userData.map((item, index) => (
          <div className="users_list" key={index}>
            <h3>{item.name}</h3>
            <p>{item.username}</p>
            <input onChange={(event)=> setUpdate(event.target.value) } type='text' placeholder="UpdateUserName" />
            <button onClick={() => dispatch(updateUser({id:item.id, name: update}))}>Update</button>
            <button onClick={() => dispatch(deleteUser({id: item.id}))}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

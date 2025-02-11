import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const users = [
    { id: 1, name: "Cook", age: 26, skill: "MySQL", designation: "Web Developer", address: "Paris" },
    { id: 2, name: "David", age: 28, skill: "PHP", designation: "Web Developer", address: "London" },
    { id: 3, name: "Nathan", age: 28, skill: "PHP", designation: "Web Developer", address: "London" },
    { id: 4, name: "William", age: 23, skill: "MySQL", designation: "Web Developer", address: "Sydney" }
  ];
  const user1 = users.find(user => user.id === 1);
  const user2 = users.find(user => user.id === 2);
  const user3 = users.find(user => user.id === 3);
  const user4 = users.find(user => user.id === 4);
  // console.log(user);
  return (
    <>
      <div className="body">
      <div id="btn-outer">
      <button className="new-button">Add New</button>
      </div>
      <table className="table">
        <tr className='heading'>
          <th>Name</th>
          <th>Age</th>
          <th>skills</th>
          <th>Desgination</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
        <tr className='row'>
          <td>{user1.name}</td>
          <td>{user1.age}</td>
          <td>{user1.skill}</td>
          <td>{user1.designation}</td>
          <td>{user1.address}</td>
          <td className='btn'><button className='edit'>Edit</button>
          <button className='delete'>Delete</button></td>
        </tr>
        <tr className='row'>
        <td>{user2.name}</td>
          <td>{user2.age}</td>
          <td>{user2.skill}</td>
          <td>{user2.designation}</td>
          <td>{user2.address}</td>
          <td className='btn'><button className='edit'>Edit</button><button className='delete'>Delete</button></td>
        </tr>
        <tr className='row'>
        <td>{user3.name}</td>
          <td>{user3.age}</td>
          <td>{user3.skill}</td>
          <td>{user3.designation}</td>
          <td>{user3.address}</td>
          <td className='btn'><button className='edit'>Edit</button><button className='delete'>Delete</button></td>
        </tr>
        <tr className='row'>
          <td>{user4.name}</td>
          <td>{user4.age}</td>
          <td>{user4.skill}</td>
          <td>{user4.designation}</td>
          <td>{user4.address}</td>
          <td className='btn'><button className='edit'>Edit</button><button className='delete'>Delete</button></td>
        </tr>
      </table>
      </div>
    </>
  )
}

export default App

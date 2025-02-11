import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
          <td>Cook</td>
          <td>26</td>
          <td>MySQL</td>
          <td>Web Developer</td>
          <td>Paris</td>
          <td><button className='edit'>Edit</button><button className='delete'>Delete</button></td>
        </tr>
        <tr className='row'>
          <td>David</td>
          <td>28</td>
          <td>PHP</td>
          <td>Web Developer</td>
          <td>London</td>
          <td><button className='edit'>Edit</button><button className='delete'>Delete</button></td>
        </tr>
        <tr className='row'>
          <td>Nathan</td>
          <td>28</td>
          <td>PHP</td>
          <td>Web Developer</td>
          <td>London</td>
          <td><button className='edit'>Edit</button><button className='delete'>Delete</button></td>
        </tr>
        <tr className='row'>
          <td>William</td>
          <td>23</td>
          <td>MySQL</td>
          <td>Web Developer</td>
          <td>Sydney</td>
          <td><button className='edit'>Edit</button><button className='delete'>Delete</button></td>
        </tr>
      </table>
      </div>
    </>
  )
}

export default App

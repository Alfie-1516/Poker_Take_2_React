import React, {useEffect, useState} from 'react'

function App() {
  const [backendData, setBackendData] = useState(null)
useEffect(() => {
  fetch('http://localhost:5000/api') // if proxy is set
    .then(response => response.json())
    .then(data => setBackendData(data));
}, []);
  return (
    <div>
    {!backendData ? (
      <p className=''>Loading...</p>
    ) : (
      <div>
        <h1>Users:</h1>
        <ul>
          {backendData.users && backendData.users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
  )
}

export default App
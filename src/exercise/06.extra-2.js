// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState('')

  const handleChange = event => {
    const username = event.target.value

    if (username === username.toLowerCase()) {
      if (error !== '') {
        setError('')
      }
    } else {
      setError('Username must be lower case')
    }
  }

  const handleSubmit = event => {
    event.preventDefault()

    onSubmitUsername(event.target.elements.usernameInput.value)
  }

  let errorMessage
  if (error) {
    errorMessage = (
      <div role="alert" style={{color: 'red'}}>
        {error}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={'usernameInput'}>Username:</label>
        <input id="usernameInput" type="text" onChange={handleChange} />
        {errorMessage}
      </div>
      <button id="submitButton" type="submit" disabled={Boolean(error)}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App

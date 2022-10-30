import { useState } from 'react';

import '../styles/Header.css'

const Header = () => {
  const [accessToken, setAccessToken] = useState('');

  const handleChange = (event) => {
    setAccessToken(event.target.value)
    console.log('inside handlechange', event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('inside handleSubmit', accessToken)

    // storing access-token in browser local storage.
    localStorage.setItem('github-access-token', accessToken)

    // API call to fetch commits.
  }

  const handleRefresh = () => {
    console.log('refresh clicked');

    // API call to fetch commits.
  }

  return (
    <div className='header'>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="country_code">Enter Personal Access Token:</label>
          <input
            type='text'
            id='access-token'
            placeholder='access token'
            pattern='^[0-9a-zA-z]{40}$'
            onChange={handleChange}
            required
          />
          <input type='submit' value='Submit' />
        </form>
      </div>
      <div>
        <input type='button' value='Refresh' onClick={handleRefresh} />
      </div>
      <div>
        Counter placeholder
      </div>
    </div>
  )
}

export default Header
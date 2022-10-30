import { useState } from 'react'

const Form = (props) => {
  const { fetchCommits } = props
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
    fetchCommits(accessToken)
  }

  return (
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
  );
}

export default Form
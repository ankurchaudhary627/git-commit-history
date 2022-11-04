import { useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import GitCommitHistory from './components/GitCommitHistory'
import {
  GITHUB_API_BASE_URL,
  USERNAME,
  REPO_NAME,
  PER_PAGE
} from './utils/Constants'

import '../src/styles/App.css'

const App = () => {
  const [commitsData, setCommitsData] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false)

  const fetchCommits = (accessToken) => {
    console.log(accessToken)
    axios.get(`${GITHUB_API_BASE_URL}/repos/${USERNAME}/${REPO_NAME}/commits`,
      {
        per_page: PER_PAGE
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    ).then((res) => {
      console.log(res.data)
      setCommitsData(res.data)
      setDataLoaded(true)
    }).catch((err) => {
      console.log(err)
      setDataLoaded(true)
    })
  }
  return (
    <div className='center-align'>
      <Header fetchCommits={fetchCommits} dataLoaded={dataLoaded} />
      <GitCommitHistory commitsData={commitsData} />
    </div>
  )
}

export default App

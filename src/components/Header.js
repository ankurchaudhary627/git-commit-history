import { useState } from 'react';
import axios from 'axios';
import {
  Form,
  RefreshCommits,
  Counter
} from '../components'
import {
  GITHUB_API_BASE_URL,
  USERNAME,
  REPO_NAME,
  PER_PAGE
} from '../utils/Constants'

import '../styles/Header.css'

const Header = () => {
  const [test, setTest] = useState(false)

  const fetchCommits = (accessToken) => {
    console.log(accessToken);
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
      console.log(res.data);
      setTest(true)
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className='header'>
      <Form fetchCommits={fetchCommits} />
      <RefreshCommits fetchCommits={fetchCommits} />
      <Counter fetchCommits={fetchCommits} test={test} />
    </div>
  )
}

export default Header
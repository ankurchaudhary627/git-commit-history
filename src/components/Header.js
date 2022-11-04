import { useState } from 'react'
import {
  Form,
  RefreshCommits,
  Counter
} from '../components'

import '../styles/Header.css'

const Header = (props) => {
  const { fetchCommits, dataLoaded } = props
  const [resetCounter, setResetCounter] = useState(false)

  const counterReset = () => {
    setResetCounter(!resetCounter)
  }
  return (
    <div className='header'>
      <Form fetchCommits={fetchCommits} counterReset={counterReset} />
      <RefreshCommits fetchCommits={fetchCommits} counterReset={counterReset} />
      <Counter fetchCommits={fetchCommits} dataLoaded={dataLoaded} resetCounter={resetCounter} />
    </div>
  )
}

export default Header
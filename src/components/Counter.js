import { useEffect, useState } from 'react'

const Counter = (props) => {
  const { fetchCommits, test } = props
  const [timer, setTimer] = useState(30)

  useEffect(() => {
    if (localStorage.getItem('github-access-token') && test) {
      const counter = timer >= 0 && setInterval(() => setTimer(timer - 1), 1000)
      if (timer < 0) {
        fetchCommits(localStorage.getItem('github-access-token'))
        setTimer(30)
      }
      return () => clearInterval(counter)
    }
  }, [timer, test, fetchCommits])
  return (
    <div>
      Auto-refresh in:
      <p>{timer}</p>
    </div>
  )
}

export default Counter

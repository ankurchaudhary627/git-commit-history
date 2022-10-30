import Header from './components/Header'
import GitCommitHistory from './components/GitCommitHistory'

import '../src/styles/App.css'

const App = () => {
  return (
    <div className='center-align'>
      <Header />
      <GitCommitHistory />
    </div>
  )
}

export default App

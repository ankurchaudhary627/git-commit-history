import GitCommits from './GitCommits'

import '../styles/GitCommitHistory.css'

const GitCommitHistory = (props) => {
  const { commitsData } = props
  return (
    <div className='git-commit-history'>
      {
        commitsData.length ?
          commitsData.map((data) => {
            if (data
              && Object.keys(data).length !== 0
              && Object.getPrototypeOf(data) === Object.prototype) {
              const commitMessage = data.commit.message
              const timeStamp = data.commit.author.date
              const userName = data.author.login
              return (
                <div>
                  <GitCommits
                    commitMessage={commitMessage}
                    timeStamp={timeStamp}
                    userName={userName}
                  />
                </div>
              )
            } else {
              return null
            }
          })
          :
          <p>No data</p>
      }
    </div>
  )
}

export default GitCommitHistory
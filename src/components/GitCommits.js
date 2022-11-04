import { getCommitDetailString } from '../helpers/getCommitDetailString'

const GitCommits = (props) => {
  const { commitMessage, timeStamp, userName } = props
  return (
    <div id='container'>
      <div class='commit-card'>
        <div class='commit-card-details'>
          <div class='commit-card-message'>{commitMessage}</div>
          <p>{getCommitDetailString(timeStamp, userName)}</p>
        </div>
      </div>
    </div>
  )
}

export default GitCommits
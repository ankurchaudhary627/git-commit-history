const RefreshCommits = (props) => {
  const { fetchCommits, counterReset } = props
  const handleRefresh = () => {

    // API call to fetch commits.
    if (localStorage.getItem('github-access-token')) {
      fetchCommits(localStorage.getItem('github-access-token'))
      counterReset()
    }
  }
  return (
    <div>
      <input type='button' value='Refresh' onClick={handleRefresh} />
    </div>
  )
}

export default RefreshCommits

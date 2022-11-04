export const getCommitDetailString = (timeStamp, userName) => {
  const commitDate = new Date(timeStamp)
  var hours = commitDate.getHours()
  var minutes = commitDate.getMinutes()
  var ampm = hours >= 12 ? 'pm' : 'am'
  hours = hours % 12
  hours = hours ? hours : 12 // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes
  var strTime = hours + ':' + minutes + ' ' + ampm
  return `${commitDate.toLocaleString('default', { month: 'long' })} ${commitDate.getDate()}, ${strTime} by ${userName}`
}
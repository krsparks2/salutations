const apiData = {
  url:'https://random-d.uk/',
  type: 'api/randomimg?t=',
  id: '?format=json'
  }

apiUrl = `${apiData.url}${apiData.type}${apiData.id}`
console.log(apiUrl)

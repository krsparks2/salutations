const apiData = {
  url:'https://random-d.uk/',
  type: 'api/randomimg?t=',
  id: '?format=json'
  }

LBryant
apiUrl = `${apiData.url}${apiData.type}${apiData.id}`
console.log(apiUrl)

// $(function () {
//     $('#datepicker').datepicker({
//       changeMonth: true,
//       changeYear: true,
//     });
//   });


mobiscroll.datepicker('#demo-anchored', {
    controls: ['calendar'],
    display: 'anchored'
});
main

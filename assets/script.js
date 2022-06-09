const apiData = {
  url:'https://random-d.uk/',
  type: 'api/randomimg?t=',
  id: '?format=json'
  }

apiUrl = `${apiData.url}${apiData.type}${apiData.id}`
console.log(apiUrl)



//  fetch('https://random-d.uk/api/randomimg?t=?format=json', {
//   method: 'POST',
//   body: JSON.stringify({
//     title:name,
//     body:body,

//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   }
//   })
//   .then(function(response){ 
//   return response.json()})
//   .then(function(data)
//   {console.log(data)
//   title=document.getElementById("title")
//   body=document.getElementById("bd")
//   title.innerHTML = data.title
//   body.innerHTML = data.body  
// }).catch(error => console.error('Error:', error)); 









fetch('https://random-d.uk/', {
  Method: 'POST',
  Headers: {
    Accept: 'application.json',
    'Content-Type': 'application/json'
  },
  Body: 'body',
  Cache: 'default'
})

// GetImage().catch(error => {
//   console.error(error);
//   });

// async function GetImage(){
//    const response = await fetch('https://random-d.uk/api/randomimg?t=?format=json');
//    const blob = await response.blob();
//    document.getElementById('ducks').src=URL.createObjectURL(blob);
//    }


// const ducksDiv = document.getElementById("ducks");  
 //   cardDiv.innerHTML = html
// function displayDucks(data) {
//   const cocktail = data.drinks[0];
//   const cocktailDiv = document.getElementById("cocktail");  
// }   


// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));
{/* <div class="card">
                <div id="card-image">
                   <img src="">
                </div> */}


// const changeImage = function () {
//   const image = document.getElementById('image');
//   image.src = 'api/randomimg?t=' + new Date().getTime();
// };

// $.getJSON("https://random-d.uk/api?format=json",function(data) {
//     console.log (data)
// }
// );
about = document.getElementById('aboutus');
var about_title = document.createElement('span');
fetch('https://my-restaurant-101.herokuapp.com/data')
.then(response => response.json())
.then(json => {
      console.log(json)
      about_title.innerHTML=json[0].aboutus.A
      });
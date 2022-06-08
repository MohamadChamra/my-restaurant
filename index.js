fetch('https://my-restaurant-101.herokuapp.com/data')
      .then(response => response.json())
      .then(json => {          
            console.log(json)
            
          });
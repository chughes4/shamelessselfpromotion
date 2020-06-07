import React, {useState} from 'react';
import './App.css'

function App() {

  const [joke, setJoke] = useState('')

  function handleClick(e) {
    e.preventDefault()
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.icndb.com/jokes/random/1?limitTo=[nerdy]', true); //api.icndb.com/jokes/random?exclude=[nerdy,explicit]
    
    xhr.onload = function() {
      if(this.status === 200) {
        const response = JSON.parse(this.responseText); 
        
        let output = ''

        if(response.type === 'success') {
          response.value.forEach(function(joke) {
            output += `${joke.joke}`
          });
        } else {
          output ='Opps something went wrong'
        }
        const regex = /Chuck Norris/gi;
        return setJoke(output.replace(regex, 'Carlos Hughes').replace(/&quot;/g,'"').replace(/ChuckNorrisException/g, 'CHughesExeption')) //.replace(/&quot;/g,'"')
      }
    }

    xhr.send();
  }


  return (
    <div className="App">
      <header className="App-header">
      <h1 style={{fontSize:'50px'}}>Carlos J Hughes</h1>
      <h1 style={{fontSize:'30px', color: '#FFDD99'}}>Why should you work with Carlos?</h1>
      <button className="button" onClick={handleClick}>Click to find out</button>
        <p>{joke}</p>
        <img className="image" src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/81296033_10162863759680381_780491077755863040_n.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=LAP97sPxPwYAX-iYmbo&_nc_ht=scontent-atl3-1.xx&oh=7f3713c75a619b1c9b949f82acae0437&oe=5EFF2D32" />
      </header>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");

  function handleClick(e) {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.icndb.com/jokes/random/1?limitTo=[nerdy]", true); //api.icndb.com/jokes/random?exclude=[nerdy,explicit]

    xhr.onload = function () {
      if (this.status === 200) {
        const response = JSON.parse(this.responseText);

        let output = "";

        if (response.type === "success") {
          response.value.forEach(function (joke) {
            output += `${joke.joke}`;
          });
        } else {
          output = "Opps something went wrong";
        }
        const regex = /Chuck Norris/gi;
        return setJoke(
          output
            .replace(regex, "Carlos Hughes")
            .replace(/&quot;/g, '"')
            .replace(/ChuckNorrisException/g, "CHughesExeption")
        ); //.replace(/&quot;/g,'"')
      }
    };

    xhr.send();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ fontSize: "50px" }}>Carlos J Hughes</h1>
        <h1 style={{ fontSize: "30px", color: "#FFDD99" }}>Why should you work with Carlos?</h1>
        <button className="button" onClick={handleClick}>
          Click to find out
        </button>
        <p>{joke}</p>
        <img className="image" src="https://phtbucket321.s3.amazonaws.com/81296033_10162863759680381_780491077755863040_n+(1).jpg" />
      </header>
    </div>
  );
}

export default App;

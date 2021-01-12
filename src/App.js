import React from "react";

function Food({fav}){
// function Food(props){
    return(<h3>I like {fav}</h3>)
    // return(<h3>I like {props.fav}</h3>)
}

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
        <Food fav={"kimchi"} />
        <Food fav={"ramen"} />
        <Food fav={"삼겹살"} />
        <Food fav={"닭갈비"} />
    </div>
  );
}

export default App;

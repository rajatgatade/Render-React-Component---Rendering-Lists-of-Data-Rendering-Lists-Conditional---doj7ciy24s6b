import React from "react";
import ReactDOM from "react-dom";
import '../styles/App.css';

const App = () => {
  return (
    <div id="root">
      <p>I am learning React. My life is getting better.</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));

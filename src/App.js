import React from "react";

function App() {
  return (
    <div className="App">
      <h1>Inspiring quote</h1>
      <Quote text="Sorry, somethings go wrong!" author="Microsoft" />
    </div>
  );
}

const Quote = ({ text, author }) => {
  return (
    <blockquote>
      {text}
      <footer>{author}</footer>
    </blockquote>
  );
};

export default App;

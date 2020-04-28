import React from "react";
import { gql, useQuery } from "@apollo/client";

function App() {
  return (
    <div className="App">
      <h1>Inspiring quote</h1>
      <RandomQuote />
    </div>
  );
}

const RANDOM_QUOTE_QUERY = gql`
  query getRandomQuote {
    randomQuote {
      text
      author
    }
  }
`;

const RandomQuote = () => {
  const { data, loading } = useQuery(RANDOM_QUOTE_QUERY);

  if (loading) {
    return "Quote is loading...";
  }
  const randomQuote = data.randomQuote;

  return <Quote {...randomQuote} />;
};

const Quote = ({ text, author }) => {
  return (
    <blockquote>
      {text}
      <footer>{author}</footer>
    </blockquote>
  );
};

export default App;

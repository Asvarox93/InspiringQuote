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
      invalid
      text
      author
    }
  }
`;

const RandomQuote = () => {
  const { data, loading, error } = useQuery(RANDOM_QUOTE_QUERY, {
    onError: (error) => {
      console.log("error:", error);
      window.lastError = error;
    },
    errorPolicy: "all",
  });

  if (loading) {
    return "Quote is loading...";
  }
  if (error) {
    return "Could not load quote!";
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

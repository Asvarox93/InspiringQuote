import React from "react";
import { gql, useQuery } from "@apollo/client";

function App() {
  return (
    <div className="App">
      <h1>Inspiring quote</h1>
      <RandomQuote />
      <RandomQuote />
      <RandomQuote />
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
  const { data, loading, error, refetch } = useQuery(RANDOM_QUOTE_QUERY, {
    onError: (error) => {
      console.log("error:", error);
      window.lastError = error;
    },
    errorPolicy: "all",
    fetchPolicy: "no-cache",
  });

  if (loading) {
    return "Quote is loading...";
  }
  if (error) {
    return "Could not load quote!";
  }
  const randomQuote = data.randomQuote;

  return (
    <>
      <Quote {...randomQuote} />
      <button onClick={() => refetch()}>Get new quote</button>
    </>
  );
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

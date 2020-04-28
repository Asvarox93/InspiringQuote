import React from "react";
import { gql, useQuery } from "@apollo/client";
import Quote from "./Quote";

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

export default RandomQuote;

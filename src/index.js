import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  gql,
  ApolloProvider,
} from "@apollo/client";
import "./index.css";
import App from "./App";

const URL = "https://examples.devmastery.pl/random-stuff/graphql";
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: URL }),
});

const RANDOM_QUOTE_QUERY = gql`
  query getRandomQuote {
    randomQuote {
      text
      author
    }
  }
`;

client
  .query({ query: RANDOM_QUOTE_QUERY })
  .then((result) => console.log("query result:", result.data));

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

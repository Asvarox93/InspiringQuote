import React from "react";

const Quote = ({ text, author }) => {
  return (
    <blockquote>
      {text}
      <footer>{author}</footer>
    </blockquote>
  );
};

export default Quote;

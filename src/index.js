import React from "react";
import ReactDOM from "react-dom";

import { useNewsArticles } from "./api";

import "./styles.css";

function Headline(props) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}

function App() {
  const { loading, headlines, error } = useNewsArticles();

  if (loading) {
    return <p>loading..</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }
  return (
    <div className="App">
      {headlines.map(headline => (
        <Headline key={headline.url} title={headline.title} />
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

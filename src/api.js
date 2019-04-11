import { useState, useEffect } from "react";

const API_KEY = "308e432abf9848baa8ec43819853dc7e";

export function useNewsArticles() {
  const [loading, setLoading] = useState(true);
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getHeadlines()
      .then(headlines => {
        setHeadlines(headlines);
        setLoading(false);
      })
      .catch(e => {
        setError(e);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    headlines,
    error
  };
}

function getHeadlines() {
  const url =
    "https://newsapi.org/v2/everything?q=bitcoin&from=2019-03-11&sortBy=publishedAt&apiKey=308e432abf9848baa8ec43819853dc7e";
  return fetch(url)
    .then(res => res.json())
    .then(res => res.articles)
    .then(articles =>
      articles.map(article => ({
        title: article.title,
        url: article.url
      }))
    );
}

import { useState } from "react";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const [articles, setArticles] = useState(["texte", "noch einer"]); // maybe use local storage for "refresh"-persistence

  function addArticle(article) {
    setArticles((prevArticles) => [...prevArticles, article]);
  }

  return (
    <Component articles={articles} addArticle={addArticle} {...pageProps} />
  );
}

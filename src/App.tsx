import { Route, Routes } from "react-router-dom";
import ArticleList from "./components/Articles/ArticleList";
import ArticlePage from "./components/Articles/ArticlePage";
import Navbar from "./components/Common/Navbar";
import NotFound from "./components/Common/NotFound";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
        <Route path="/topics/:topic" element={<ArticleList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

import { Route, Routes } from "react-router-dom";
import ArticleList from "./components/Articles/ArticleList.tsx";
import ArticlePage from "./components/Articles/ArticlePage.tsx";
import Navbar from "./components/Common/Navbar.tsx";
import NotFound from "./components/Common/NotFound.tsx";

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

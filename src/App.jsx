import React from "react";
import MainLayout from "./components/layout/MainLayout";
import { Routes, Route } from "react-router-dom";
import BlogList from "./features/homepage/BlogList";
import BlogDetail from "./features/blogdetail/BlogDetail";
import CreateBlog from "./features/createblog/CreateBlog";
import { BlogProvider } from "./contexts/BlogContext";

function App() {
  return (
    <BlogProvider>
      <MainLayout>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/post" element={<CreateBlog />} />
          <Route path="/blogdetail/:id" element={<BlogDetail />} />
        </Routes>
      </MainLayout>
    </BlogProvider>
  );
}

export default App;

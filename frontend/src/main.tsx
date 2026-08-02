import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home'; // 根据实际路径调整
import { PostPage } from './pages/post-page'; // 原文件路径
import './index.css'; // 如果有

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostPage />} />
        {/* 添加其他路由 */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

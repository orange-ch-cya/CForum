import { mount } from '@/entries/bootstrap';
import { PostPage } from '@/pages/post-page';

// 添加错误捕获，以便在页面中看到具体错误
try {
  console.log('🔍 正在渲染帖子详情页...');
  mount('root', <PostPage />);
} catch (error: any) {
  console.error('❌ 渲染 PostPage 失败:', error);
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = `
      <div style="padding: 20px; color: red; background: #fee; border: 1px solid red; border-radius: 4px;">
        <h3>帖子页面加载失败</h3>
        <p>${error?.message || '未知错误'}</p>
        <p style="font-size: 12px; color: #666;">请检查浏览器控制台查看详细错误。</p>
      </div>
    `;
  }
}

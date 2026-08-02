import { marked } from 'marked';

export function renderMarkdownToHtml(markdown: string) {
  console.log('🔍 输入:', markdown);
  const result = marked.parse(markdown);
  console.log('📤 输出:', result);
  return result;
}

// highlightCodeBlocks 和 attachFancybox 暂时保留空实现
export function highlightCodeBlocks() {}
export function attachFancybox() { return () => {}; }

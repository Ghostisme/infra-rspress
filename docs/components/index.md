---
title: 组件总览
---

# 组件总览

这里是组件库的文档，包含了所有可用的组件。

---

<style>
.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  margin: 24px 0;
}

.component-card {
  position: relative;
  padding: 20px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  background: #fff;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  display: block;
  color: inherit;
}

.component-card:hover {
  border-color: #1677ff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.component-card-icon {
  font-size: 32px;
  margin-bottom: 12px;
  display: block;
}

.component-card-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: rgba(0, 0, 0, 0.88);
}

.component-card-desc {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
  line-height: 1.5;
  margin: 0;
}

.component-card-tag {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 2px 8px;
  font-size: 12px;
  border-radius: 4px;
  background: #f0f5ff;
  color: #1677ff;
}

.section-title {
  font-size: 20px;
  font-weight: 600;
  margin: 32px 0 16px;
  color: rgba(0, 0, 0, 0.88);
}

/* 暗色模式适配 */
@media (prefers-color-scheme: dark) {
  .component-card {
    background: #141414;
    border-color: #434343;
  }
  
  .component-card:hover {
    border-color: #1677ff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
  }
  
  .component-card-title {
    color: rgba(255, 255, 255, 0.85);
  }
  
  .component-card-desc {
    color: rgba(255, 255, 255, 0.65);
  }
}
</style>

<div class="section-title">📦 通用</div>

<div class="component-grid">
  <a href="/components/Button/" class="component-card">
    <span class="component-card-icon">🔘</span>
    <div class="component-card-title">Button 按钮</div>
    <p class="component-card-desc">用于触发一个操作或进行页面跳转，支持多种样式和尺寸。</p>
  </a>
</div>

<div class="section-title">📝 数据录入</div>

<div class="component-grid">
  <a href="/components/Input/" class="component-card">
    <span class="component-card-tag">待开发</span>
    <span class="component-card-icon">📝</span>
    <div class="component-card-title">Input 输入框</div>
    <p class="component-card-desc">通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
  </a>
  
  <a href="/components/Select/" class="component-card">
    <span class="component-card-tag">待开发</span>
    <span class="component-card-icon">📋</span>
    <div class="component-card-title">Select 选择器</div>
    <p class="component-card-desc">下拉选择器，用于在多个选项中进行选择。</p>
  </a>
</div>

<div class="section-title">📊 数据展示</div>

<div class="component-grid">
  <a href="/components/Table/" class="component-card">
    <span class="component-card-tag">待开发</span>
    <span class="component-card-icon">📊</span>
    <div class="component-card-title">Table 表格</div>
    <p class="component-card-desc">展示行列数据，支持排序、筛选、分页等功能。</p>
  </a>
  
  <a href="/components/Card/" class="component-card">
    <span class="component-card-tag">待开发</span>
    <span class="component-card-icon">🗂️</span>
    <div class="component-card-title">Card 卡片</div>
    <p class="component-card-desc">通用卡片容器，提供标准的内容容器。</p>
  </a>
</div>

<div class="section-title">💬 反馈</div>

<div class="component-grid">
  <a href="/components/Message/" class="component-card">
    <span class="component-card-tag">待开发</span>
    <span class="component-card-icon">💬</span>
    <div class="component-card-title">Message 全局提示</div>
    <p class="component-card-desc">全局展示操作反馈信息。</p>
  </a>
  
  <a href="/components/Modal/" class="component-card">
    <span class="component-card-tag">待开发</span>
    <span class="component-card-icon">🔲</span>
    <div class="component-card-title">Modal 对话框</div>
    <p class="component-card-desc">需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用对话框。</p>
  </a>
</div>

## 🎨 使用指南

### 安装

所有组件都可以直接引入使用，无需额外安装。

### 引入组件示例

```
import { Button } from '@/components/Button';

export default () => {
  return <Button variant="primary">点击按钮</Button>;
};
```

### 组件特性

- 🚀 **开箱即用** - 简单易用的 API 设计
- 🎨 **精美样式** - 现代化的视觉设计
- 📦 **按需加载** - 支持 Tree Shaking
- 🔧 **TypeScript** - 完整的类型定义
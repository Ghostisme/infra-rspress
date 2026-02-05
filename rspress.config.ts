import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Infra Repress',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  // 添加全局样式
  head: [
    '<link rel="stylesheet" href="/styles/global.css">',
  ],
  themeConfig: {
    sidebar: {
      '/components/': [
        {
          text: '概览',
          link: '/components/',
        },
        {
          text: '通用',
          collapsible: false,
          items: [
            {
              text: 'Button 按钮',
              link: '/components/Button/',
            },
          ],
        },
      ],
    },
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
  },
});

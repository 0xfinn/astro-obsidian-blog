# Be Good One

一个基于 [Astro](https://astro.build/) 构建的个人网站，用于记录生活中的片段。

## ✨ 特性

- 📝 **类型安全的 Markdown** - 完全的 TypeScript 支持
- ⚡ **超快性能** - 基于 Astro 的静态站点生成
- ♿ **无障碍访问** - 支持键盘导航和屏幕阅读器
- 📱 **响应式设计** - 从移动设备到桌面的完美适配
- 🔍 **SEO 友好** - 优化的搜索引擎表现
- 🌓 **明暗主题** - 支持亮色和暗色模式切换
- 🔎 **模糊搜索** - 基于 Pagefind 的快速搜索功能
- 📄 **草稿和分页** - 支持草稿文章和分页显示
- 🗺️ **站点地图和 RSS** - 自动生成站点地图和 RSS 订阅
- 🎨 **高度可定制** - 灵活的配置和样式定制
- 🖼️ **动态 OG 图片** - 自动生成博客文章的 OG 图片
- 📔 **碎碎念功能** - 记录日常生活的点点滴滴

## 🚀 项目结构

```
/
├── public/
│   ├── favicon.png
│   └── toggle-theme.js
├── src/
│   ├── assets/          # 静态资源
│   ├── components/      # Astro 组件
│   ├── data/
│   │   ├── blog/        # 博客文章
│   │   └── diary/       # 日常时间线
│   ├── layouts/         # 页面布局
│   ├── pages/           # 页面路由
│   ├── styles/          # 样式文件
│   ├── utils/           # 工具函数
│   ├── config.ts        # 网站配置
│   └── constants.ts     # 常量定义
├── astro.config.ts      # Astro 配置
└── package.json
```

## 🛠️ 技术栈

- **主框架**: [Astro](https://astro.build/)
- **类型检查**: [TypeScript](https://www.typescriptlang.org/)
- **样式**: [TailwindCSS](https://tailwindcss.com/)
- **UI 组件**: [React](https://react.dev/)
- **搜索**: [Pagefind](https://pagefind.app/)
- **图标**: [Lucide React](https://lucide.dev/)
- **代码格式化**: [Prettier](https://prettier.io/)
- **代码检查**: [ESLint](https://eslint.org/)
- **部署**: [Vercel](https://vercel.com/)

## 📦 安装和使用

### 环境要求

- Node.js 18+
- pnpm (推荐)

### 本地开发

```bash
# 克隆项目
git clone https://github.com/vsme/astro-obsidian-blog.git
cd astro-obsidian-blog

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

访问 `http://localhost:4321` 查看网站。

### 构建和部署

```bash
# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview
```

## ⚙️ 配置

网站的主要配置位于 `src/config.ts` 文件中，你可以修改以下设置：

- 网站基本信息（标题、描述、作者等）
- 社交媒体链接
- 主题设置
- 分页设置
- 功能开关

## 📝 添加内容

### 博客文章

在 `src/data/blog/` 目录下创建 Markdown 文件，文件需要包含以下 frontmatter：

```markdown
---
title: "文章标题"
pubDatetime: 2024-01-01T00:00:00Z
description: "文章描述"
tags: ["标签1", "标签2"]
---

文章内容...
```

### 碎碎念

在 `src/data/diary/` 目录下创建以日期命名的 Markdown 文件（如 `2024-01-01.md`），记录日常的点点滴滴。

## 🎨 自定义样式

项目使用 TailwindCSS 进行样式管理，你可以：

1. 修改 `src/styles/global.css` 中的全局样式
2. 在组件中使用 TailwindCSS 类名
3. 通过 CSS 变量自定义主题颜色

## 📄 许可证

本项目基于 MIT 许可证开源。

## 🙏 致谢

本项目基于 [satnaing/astro-paper](https://github.com/satnaing/astro-paper) 开发，感谢原作者 [Sat Naing](https://github.com/satnaing) 创建了这个优秀的 Astro 博客主题，为本项目提供了坚实的基础。

特别感谢：

- [Astro](https://astro.build/) - 现代化的静态站点生成器
- [TailwindCSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- [Pagefind](https://pagefind.app/) - 静态搜索解决方案

---

💝 用心记录生活中的每一个温暖瞬间

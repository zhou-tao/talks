---
theme: nord
background: false
title: OpenClaw 与 AI 实践
titleTemplate: '%s'
info: |
  ## OpenClaw 与 AI 实践分享
  前端开发者的 AI 提效指南
author: 阿虾的搭档
presenter: true
download: true
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: slide-left
mdc: true
colorSchema: dark
fonts:
  sans: Noto Sans SC
  serif: Noto Serif SC
monaco: true
layoutClass: no-sidebar
---

<style>
/* ===== 全局基础样式 ===== */
html, body {
  font-family: 'Noto Sans SC', sans-serif;
}

/* 隐藏右侧章节目录 / 侧边栏 / 大纲 */
.slidev-sidebar { display: none !important; }
.slidev-toc { display: none !important; }
.slidev-slide-nav { display: none !important; }
.slidev-page-count { bottom: 12px !important; right: 20px !important; font-size: 12px !important; opacity: 0.5; }
.slidev-layout { padding-left: 3.5rem !important; padding-right: 3.5rem !important; }

/* ===== 科技背景 ===== */
.slidev-layout {
  position: relative;
  background: linear-gradient(135deg, #2e3440 0%, #3b4252 40%, #2e3440 70%, #242933 100%) !important;
}

/* 北极光网格叠加层 */
.slidev-layout::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image:
    linear-gradient(rgba(136, 192, 208, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(136, 192, 208, 0.04) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
  z-index: 0;
}

/* 顶部北极光环境光 */
.slidev-layout::after {
  content: '';
  position: absolute;
  top: -200px; right: -200px;
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(136, 192, 208, 0.1) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

/* 确保内容在z-index上层 */
.slidev-layout > * { position: relative; z-index: 1; }

/* 底部光晕 */
.slidev-layout .bottom-glow {
  position: absolute;
  bottom: -150px; left: -150px;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(129, 161, 193, 0.08) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

/* ===== 标题装饰 ===== */
h1, h2 {
  background: linear-gradient(135deg, #88c0d0, #81a1c1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

h3 {
  color: #88c0d0;
}

/* 引用块美化 */
blockquote {
  border-left-color: #88c0d0 !important;
  background: linear-gradient(135deg, rgba(136, 192, 208, 0.08), rgba(129, 161, 193, 0.05));
  padding: 0.75rem 1.25rem !important;
  border-radius: 0 8px 8px 0;
}

/* 代码块 */
code {
  color: #a3be8c !important;
}

/* 表格 */
table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;
  border-radius: 12px;
}
thead th {
  background: linear-gradient(135deg, rgba(136, 192, 208, 0.25), rgba(129, 161, 193, 0.2));
  border: none !important;
  color: #88c0d0 !important;
  padding: 10px 14px !important;
}
tbody td {
  border: none !important;
  border-bottom: 1px solid rgba(255,255,255,0.05) !important;
  padding: 10px 14px !important;
}
tbody tr:hover td {
  background: rgba(136, 192, 208, 0.06);
}

/* 分割标题页码 */
.section-title h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.section-title h2 {
  font-size: 1.5rem;
  background: linear-gradient(135deg, #88c0d0, #b48ead);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 卡片悬浮效果 */
.grid > div, .grid-cols-2 > div, .grid-cols-3 > div, .grid-cols-4 > div {
  transition: transform 0.2s, box-shadow 0.2s;
}
.grid > div:hover, .grid-cols-2 > div:hover, .grid-cols-3 > div:hover, .grid-cols-4 > div:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(136, 192, 208, 0.15);
}

/* 页码指示器 */
.slidev-page-count {
  background: rgba(46, 52, 64, 0.7);
  backdrop-filter: blur(8px);
  padding: 4px 12px !important;
  border-radius: 20px;
  border: 1px solid rgba(136, 192, 208, 0.2);
}
</style>

<div class="bottom-glow"></div>

# OpenClaw 与 AI 实践

<p style="font-size:1.2rem;color:#94a3b8;margin-top:-0.5rem">
前端开发者的 AI 提效指南
</p>

<div class="pt-8">
  <span @click="$slidev.nav.next" class="px-6 py-3 rounded-full cursor-pointer text-sm"
    style="background:linear-gradient(135deg,#5e81ac,#81a1c1);color:white;display:inline-flex;align-items:center;gap:8px;box-shadow:0 4px 15px rgba(94,129,172,0.3)">
    开始探索
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
  </span>
</div>

<div class="abs-br m-6 flex gap-3">
  <a href="https://github.com/openclaw/openclaw" target="_blank"
    class="text-xl opacity-40 hover:opacity-80 transition-opacity !border-none !hover:text-white">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
  </a>
</div>

---
layout: center
---

<div class="section-title text-center">
  <div style="font-size:4rem;margin-bottom:0.5rem;opacity:0.3">✦</div>
  <h1>OpenClaw</h1>
  <h2>开源 AI 助手的「iPhone 时刻」</h2>
</div>

---
layout: image-right
image: /screenshots/ui首页.png
backgroundSize: contain
---

# OpenClaw 是什么？

一个**开源**、**可本地部署**的 AI 助手框架

> 相当于开源的 ChatGPT + 自动化引擎

<br>

### ✨ 核心特性

- 🧠 **多模型支持** — OpenAI / Claude / DeepSeek / 本地模型
- 🔌 **多平台接入** — QQ / Discord / Telegram / Signal / Web
- 🛠 **可编程 Agent** — Skills / Hooks / Sub-Agents
- 🔒 **本地优先** — 数据在自己手里
- 🎨 **可视化控制台** — 开箱即用的 Web UI

---
layout: two-cols
---

# 为什么这么火？

<div class="mt-4">

### 🔥 120 天登顶 GitHub Stars 历史第一

超过 Linux、Vue、React 等传奇项目

</div>

<div class="mt-6">

### 📈 增速恐怖

- 2025 年初发布
- 不到 4 个月拿下 **200k+ Stars**
- 社区活跃度空前

</div>

::right::

<div class="ml-4 mt-12">
  <div style="text-align:center;font-size:5rem;opacity:0.2">🚀</div>
  <p style="text-align:center;font-size:0.85rem;color:#64748b">"开源 AI 领域的超级明星"</p>

  <div class="mt-6 p-4 rounded-lg" style="background:linear-gradient(135deg,rgba(163,190,140,0.1),rgba(94,129,172,0.05));border:1px solid rgba(163,190,140,0.3)">
    <div style="font-weight:bold;color:#a3be8c;margin-bottom:0.5rem">为什么开发者疯狂追捧？</div>
    <ul style="font-size:0.85rem">
      <li>✅ ChatGPT 平替，但完全可控</li>
      <li>✅ 开发者体验极致</li>
      <li>✅ 插件生态爆发式增长</li>
      <li>✅ 社区驱动，透明度极高</li>
    </ul>
  </div>
</div>

---

# GitHub Stars 增长趋势

<div style="display:flex;justify-content:center;align-items:center;width:100%;margin-top:1rem">
<svg viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:740px">
  <defs>
    <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#5e81ac"/>
      <stop offset="100%" stop-color="#81a1c1"/>
    </linearGradient>
    <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="rgba(94,129,172,0.25)"/>
      <stop offset="100%" stop-color="rgba(94,129,172,0.01)"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <!-- 网格线 -->
  <line x1="80" y1="40" x2="80" y2="300" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
  <line x1="80" y1="105" x2="740" y2="105" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
  <line x1="80" y1="170" x2="740" y2="170" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
  <line x1="80" y1="235" x2="740" y2="235" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
  <line x1="80" y1="300" x2="740" y2="300" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>

  <!-- Y轴标签 -->
  <text x="72" y="44" fill="#64748b" font-size="11" text-anchor="end">250k</text>
  <text x="72" y="109" fill="#64748b" font-size="11" text-anchor="end">200k</text>
  <text x="72" y="174" fill="#64748b" font-size="11" text-anchor="end">150k</text>
  <text x="72" y="239" fill="#64748b" font-size="11" text-anchor="end">100k</text>
  <text x="72" y="304" fill="#64748b" font-size="11" text-anchor="end">50k</text>

  <!-- X轴标签 -->
  <text x="80" y="320" fill="#64748b" font-size="11" text-anchor="middle">1月</text>
  <text x="195" y="320" fill="#64748b" font-size="11" text-anchor="middle">2月</text>
  <text x="310" y="320" fill="#64748b" font-size="11" text-anchor="middle">3月</text>
  <text x="425" y="320" fill="#64748b" font-size="11" text-anchor="middle">4月</text>
  <text x="540" y="320" fill="#64748b" font-size="11" text-anchor="middle">5月</text>

  <!-- 面积填充 -->
  <path d="M80,300 L80,260 Q130,240 180,230 Q230,210 280,200 Q330,150 380,130 Q430,100 480,90 Q530,70 580,60 Q630,45 680,40 Q710,38 740,36 L740,300 Z"
        fill="url(#areaGrad)"/>

  <!-- 趋势线 -->
  <polyline points="80,260 130,240 180,230 230,210 280,200 330,150 380,130 430,100 480,90 530,70 580,60 630,45 680,40 710,38 740,36"
            fill="none" stroke="url(#lineGrad)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)"/>

  <!-- 数据点 -->
  <circle cx="80" cy="260" r="4" fill="#5e81ac" stroke="#0f172a" stroke-width="2"/>
  <circle cx="230" cy="210" r="4" fill="#5e81ac" stroke="#0f172a" stroke-width="2"/>
  <circle cx="380" cy="130" r="5" fill="#81a1c1" stroke="#0f172a" stroke-width="2"/>
  <circle cx="530" cy="70" r="5" fill="#81a1c1" stroke="#0f172a" stroke-width="2"/>
  <circle cx="740" cy="36" r="6" fill="#88c0d0" stroke="#0f172a" stroke-width="2"/>

  <!-- 里程碑标注 -->
  <text x="80" y="252" fill="#5e81ac" font-size="10">🚀 发布 30k</text>
  <text x="210" y="200" fill="#5e81ac" font-size="10">🔥 破 50k</text>
  <text x="350" y="118" fill="#81a1c1" font-size="10">⚡ 破 100k</text>
  <text x="500" y="58" fill="#81a1c1" font-size="10">💫 破 150k</text>
  <text x="660" y="24" fill="#88c0d0" font-size="11" font-weight="bold">⭐ 200k+</text>
</svg>
</div>

<div style="text-align:center;margin-top:1rem;font-size:0.85rem;color:#64748b">
  OpenClaw 仅用 120 天从 0 到 200k+ Stars，速度超越 Linux · Vue · React
</div>

---
layout: image-right
image: /screenshots/关注1-安装方式.png
backgroundSize: contain
---

# 怎么安装？

> 一句话：**一条命令搞定**

### 🪟 Windows
```bash
winget install openclaw
# 或
scoop install openclaw
```

### 🍎 macOS
```bash
brew install openclaw
```

### 🐧 Linux
```bash
curl -fsSL https://get.openclaw.ai | bash
```

### 📦 Docker
```bash
docker run -d --name openclaw openclaw/openclaw
```

---
layout: image-right
image: /screenshots/关注2-填写API key.png
backgroundSize: contain
---

# 配置与安全

### 🔑 添加 API Key
```bash
openclaw config set provider openai key sk-xxx
openclaw config set provider deepseek key sk-xxx
```

### ✅ 快速验证
```bash
openclaw --version      # 确认 CLI 可用
openclaw doctor         # 检查配置问题
openclaw gateway status # 确认服务运行
```

### 🔐 安全要点
- 所有数据**本地存储**
- 敏感信息支持 **SecretRef** 加密存储
- 支持 **OAuth** 认证
- 细粒度的权限控制

---
layout: image-right
image: /screenshots/关注3-频道.png
backgroundSize: contain
---

# 快速使用

### 🌐 控制台 UI
访问 [http://127.0.0.1:18789](http://127.0.0.1:18789)
- 由 Vite + Lit 构建的单页应用
- 直接在浏览器上对话
- 可视化配置管理

### 📱 连接外部平台
```bash
openclaw channels add --channel qqbot --token "***"
openclaw channels add --channel discord --token "***"
openclaw channels add --channel telegram --token "***"
```

### 🎯 一个 Agent，多端联动
> 写一次 Skill，QQ / Discord / Web 同步可用

---
layout: image-right
image: /screenshots/建议安装环境.png
backgroundSize: contain
---

# 建议环境配置

### 硬件推荐
| 配置项 | 最低要求 | 推荐配置 |
|--------|---------|---------|
| CPU | 4 核 | 8 核+ |
| 内存 | 8GB | 16GB+ |
| 存储 | 10GB | 50GB+ |

### 软件推荐
- **Node.js** ≥ 18.x（推荐 22.x LTS）
- **npm** / **pnpm** 包管理器
- **Git**（插件管理依赖）
- Docker（可选，容器化部署）

> 💡 纯 C2C（Chat to Code）模式，普通笔记本完全够用

---
layout: center
---

<div class="section-title text-center">
  <h1>典型应用场景</h1>
</div>

<div class="grid grid-cols-3 gap-5 mt-6">

<div class="p-5 rounded-xl text-center" style="background:linear-gradient(135deg,rgba(94,129,172,0.12),rgba(94,129,172,0.03));border:1px solid rgba(94,129,172,0.25)">
  <div style="font-size:2.5rem;margin-bottom:0.5rem">👨‍💻</div>
  <h4 style="color:#88c0d0;margin:0">队友编程</h4>
  <p style="font-size:0.85rem;margin-top:0.5rem;color:#94a3b8">日常编码辅助<br>Code Review<br>Debug 协作</p>
</div>

<div class="p-5 rounded-xl text-center" style="background:linear-gradient(135deg,rgba(180,142,173,0.12),rgba(180,142,173,0.03));border:1px solid rgba(180,142,173,0.25)">
  <div style="font-size:2.5rem;margin-bottom:0.5rem">📱</div>
  <h4 style="color:#b48ead;margin:0">AI 账号赛道</h4>
  <p style="font-size:0.85rem;margin-top:0.5rem;color:#94a3b8">公众号自动生成<br>小红书/知乎运营<br>B站脚本写作</p>
</div>

<div class="p-5 rounded-xl text-center" style="background:linear-gradient(135deg,rgba(208,135,112,0.12),rgba(208,135,112,0.03));border:1px solid rgba(208,135,112,0.25)">
  <div style="font-size:2.5rem;margin-bottom:0.5rem">🤖</div>
  <h4 style="color:#d08770;margin:0">自动化工作流</h4>
  <p style="font-size:0.85rem;margin-top:0.5rem;color:#94a3b8">定时任务<br>信息聚合<br>智能提醒</p>
</div>

</div>

<div class="mt-6 p-4 rounded-lg text-center" style="background:linear-gradient(135deg,rgba(235,203,139,0.1),rgba(235,203,139,0.03));border:1px solid rgba(235,203,139,0.25)">
  <strong style="color:#ebcb8b">🎯 OpenClaw 定位：</strong>不是 Chatbot，是你的 <strong style="color:#ebcb8b">AI 操作系统</strong>
</div>

---
layout: center
---

<div class="section-title text-center">
  <div style="font-size:4rem;margin-bottom:0.5rem;opacity:0.3">✦</div>
  <h1>Hermes</h1>
  <h2>让 Agent 拥有「手」和「眼睛」</h2>
</div>

---
layout: two-cols
---

# Hermes 是什么？

> **Agent 执行引擎** — 让 AI 不只「会说」，更能「会做」

### 核心能力

🧩 **工具调用** — 让 AI 调用 API、读文件、写代码

👀 **视觉识别** — 看懂截图、UI、流程图

🖐️ **浏览器操控** — AI 自动操作网页

📋 **文件系统** — 读写本地文件

💬 **多轮交互** — 复杂任务分步执行

::right::

<div class="ml-4 mt-12 p-6 rounded-xl" style="background:linear-gradient(135deg,rgba(136,192,208,0.15),rgba(136,192,208,0.04));border:1px solid rgba(136,192,208,0.3)">
  <h3 style="color:#88c0d0">⚡ 一句话总结</h3>
  <p style="margin-top:0.75rem">Hermes 是 OpenClaw 的 <strong>「操作系统」</strong></p>
  <p style="font-size:0.85rem;margin-top:0.5rem;color:#94a3b8">它把 AI 从聊天框里解放出来，<br>让 Agent 真正能 <strong>动手干活</strong></p>
</div>

<div class="ml-4 mt-6 p-4 rounded-lg" style="background:linear-gradient(135deg,rgba(100,116,139,0.1),rgba(100,116,139,0.03));border:1px solid rgba(100,116,139,0.25)">
  <p style="font-size:0.8rem;color:#64748b;margin:0">类比理解：</p>
  <p style="font-size:0.85rem;margin-top:0.3rem">ChatGPT → 只会说话的知识分子<br>
Hermes → 既能说话又能动手的工程师</p>
</div>

---

# Hermes 的典型能力

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded-lg" style="background:linear-gradient(135deg,rgba(163,190,140,0.12),rgba(163,190,140,0.03));border:1px solid rgba(163,190,140,0.25)">
  <h4 style="color:#a3be8c">🔧 代码执行</h4>
  <p style="font-size:0.85rem;margin-top:0.5rem;color:#94a3b8">在沙箱中运行 Python/Node.js，安装依赖，处理数据</p>
</div>

<div class="p-4 rounded-lg" style="background:linear-gradient(135deg,rgba(94,129,172,0.12),rgba(94,129,172,0.03));border:1px solid rgba(94,129,172,0.25)">
  <h4 style="color:#81a1c1">🌐 网页访问</h4>
  <p style="font-size:0.85rem;margin-top:0.5rem;color:#94a3b8">抓取网页内容，提交表单，API 调用，数据采集</p>
</div>

<div class="p-4 rounded-lg" style="background:linear-gradient(135deg,rgba(180,142,173,0.12),rgba(180,142,173,0.03));border:1px solid rgba(180,142,173,0.25)">
  <h4 style="color:#b48ead">📁 文件操作</h4>
  <p style="font-size:0.85rem;margin-top:0.5rem;color:#94a3b8">读写文件、搜索代码库、管理项目结构</p>
</div>

<div class="p-4 rounded-lg" style="background:linear-gradient(135deg,rgba(208,135,112,0.12),rgba(208,135,112,0.03));border:1px solid rgba(208,135,112,0.25)">
  <h4 style="color:#d08770">🖼️ 视觉理解</h4>
  <p style="font-size:0.85rem;margin-top:0.5rem;color:#94a3b8">分析 UI 截图、流程图、手绘图 → 生成代码</p>
</div>

</div>

<div class="mt-8 p-4 rounded-lg text-center" style="background:linear-gradient(135deg,rgba(143,188,187,0.1),rgba(143,188,187,0.05));border:1px solid rgba(143,188,187,0.25)">
  <h4 style="color:#8fbcbb">🔄 编排能力是关键</h4>
  <p style="font-size:0.85rem;margin-top:0.3rem;color:#94a3b8">复杂的任务需要多个工具协同完成，Hermes 的优势在于工具的编排组合</p>
</div>

---

# Hermes 使用场景

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="p-4 rounded-lg" style="background:linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01));border:1px solid rgba(255,255,255,0.06)">
  <div style="font-size:2rem;margin-bottom:0.25rem">🎨</div>
  <h4 style="color:#d8dee9;font-size:0.95rem">视觉稿还原</h4>
  <p style="font-size:0.8rem;color:#64748b;margin-top:0.3rem">截图给 Agent → 自动生成对应前端代码</p>
</div>

<div class="p-4 rounded-lg" style="background:linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01));border:1px solid rgba(255,255,255,0.06)">
  <div style="font-size:2rem;margin-bottom:0.25rem">🐛</div>
  <h4 style="color:#d8dee9;font-size:0.95rem">自动 Debug</h4>
  <p style="font-size:0.8rem;color:#64748b;margin-top:0.3rem">描述 bug → 搜代码 → 定位 → 修复</p>
</div>

<div class="p-4 rounded-lg" style="background:linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01));border:1px solid rgba(255,255,255,0.06)">
  <div style="font-size:2rem;margin-bottom:0.25rem">📊</div>
  <h4 style="color:#d8dee9;font-size:0.95rem">数据分析</h4>
  <p style="font-size:0.8rem;color:#64748b;margin-top:0.3rem">丢个 CSV → 自动分析 → 生成可视化图表</p>
</div>

<div class="p-4 rounded-lg" style="background:linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01));border:1px solid rgba(255,255,255,0.06)">
  <div style="font-size:2rem;margin-bottom:0.25rem">📝</div>
  <h4 style="color:#d8dee9;font-size:0.95rem">文档生成</h4>
  <p style="font-size:0.8rem;color:#64748b;margin-top:0.3rem">扫代码 → 自动生成 API 文档、README</p>
</div>

<div class="p-4 rounded-lg" style="background:linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01));border:1px solid rgba(255,255,255,0.06)">
  <div style="font-size:2rem;margin-bottom:0.25rem">🌙</div>
  <h4 style="color:#d8dee9;font-size:0.95rem">定时任务</h4>
  <p style="font-size:0.8rem;color:#64748b;margin-top:0.3rem">每天早上 9 点 → 汇总信息 → 推送到手机</p>
</div>

<div class="p-4 rounded-lg" style="background:linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01));border:1px solid rgba(255,255,255,0.06)">
  <div style="font-size:2rem;margin-bottom:0.25rem">🔗</div>
  <h4 style="color:#d8dee9;font-size:0.95rem">API 集成</h4>
  <p style="font-size:0.8rem;color:#64748b;margin-top:0.3rem">接入内部系统 → 自然语言运维操作</p>
</div>

</div>

---
layout: center
---

<div class="section-title text-center">
  <div style="font-size:4rem;margin-bottom:0.5rem;opacity:0.3">✦</div>
  <h1>Agent 工具</h1>
  <h2>横向对比</h2>
</div>

---

# 主流 AI Agent 工具对比

<div class="mt-6">
  <table>
    <thead>
      <tr>
        <th>工具</th>
        <th>定位</th>
        <th>核心能力</th>
        <th>价格</th>
        <th>适用场景</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="font-weight:bold;color:#a3be8c">OpenClaw</td>
        <td>全能 AI 框架</td>
        <td>多平台 + Agent + 自动化</td>
        <td>免费开源</td>
        <td>个人/团队全能助手</td>
      </tr>
      <tr>
        <td style="font-weight:bold;color:#81a1c1">Claude Code</td>
        <td>终端编程助手</td>
        <td>深度代码理解 + 自动编辑</td>
        <td>按 Token 付费</td>
        <td>专业编程</td>
      </tr>
      <tr>
        <td style="font-weight:bold;color:#b48ead">Codex</td>
        <td>IDE 插件</td>
        <td>代码补全 + 对话</td>
        <td>按月订阅</td>
        <td>日常编码辅助</td>
      </tr>
      <tr>
        <td style="font-weight:bold;color:#d08770">Cursor</td>
        <td>AI IDE</td>
        <td>原生 AI 编辑器</td>
        <td>按月订阅</td>
        <td>AI First 开发</td>
      </tr>
      <tr>
        <td style="font-weight:bold;color:#8fbcbb">Cline</td>
        <td>VS Code 插件</td>
        <td>终端 + 编辑器集成</td>
        <td>BYOK</td>
        <td>VS Code 增强</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="mt-6 p-4 rounded-lg" style="background:linear-gradient(135deg,rgba(235,203,139,0.1),rgba(235,203,139,0.03));border:1px solid rgba(235,203,139,0.25)">
  <h4 style="color:#ebcb8b">💡 选型建议</h4>
  <p style="font-size:0.85rem;margin-top:0.3rem">不是非此即彼！<strong>OpenClaw + Claude Code + Cursor</strong> 是很多开发者的黄金组合</p>
  <p style="font-size:0.8rem;margin-top:0.2rem;color:#94a3b8">OpenClaw 负责流程自动化，Claude Code 负责深度编码，Cursor 负责日常编写</p>
</div>

---

# 工具定位对比速览

<div class="grid grid-cols-4 gap-3 mt-6">

<div class="p-3 rounded-lg text-center" style="background:linear-gradient(135deg,rgba(163,190,140,0.12),rgba(163,190,140,0.03));border:1px solid rgba(163,190,140,0.3)">
  <div style="font-size:2rem">🏗️</div>
  <h4 style="color:#a3be8c;font-size:0.85rem;margin-top:0.25rem">OpenClaw</h4>
  <p style="font-size:0.75rem;color:#64748b;margin-top:0.2rem">AI 框架<br>自动化引擎</p>
</div>

<div class="p-3 rounded-lg text-center" style="background:linear-gradient(135deg,rgba(96,165,250,0.12),rgba(96,165,250,0.03));border:1px solid rgba(96,165,250,0.3)">
  <div style="font-size:2rem">⌨️</div>
  <h4 style="color:#81a1c1;font-size:0.85rem;margin-top:0.25rem">Claude Code</h4>
  <p style="font-size:0.75rem;color:#64748b;margin-top:0.2rem">终端编程<br>深度 Agent</p>
</div>

<div class="p-3 rounded-lg text-center" style="background:linear-gradient(135deg,rgba(192,132,252,0.12),rgba(192,132,252,0.03));border:1px solid rgba(192,132,252,0.3)">
  <div style="font-size:2rem">📝</div>
  <h4 style="color:#b48ead;font-size:0.85rem;margin-top:0.25rem">Codex</h4>
  <p style="font-size:0.75rem;color:#64748b;margin-top:0.2rem">补全增强<br>轻量助手</p>
</div>

<div class="p-3 rounded-lg text-center" style="background:linear-gradient(135deg,rgba(208,135,112,0.12),rgba(208,135,112,0.03));border:1px solid rgba(208,135,112,0.3)">
  <div style="font-size:2rem">🖥️</div>
  <h4 style="color:#d08770;font-size:0.85rem;margin-top:0.25rem">Cursor</h4>
  <p style="font-size:0.75rem;color:#64748b;margin-top:0.2rem">AI 原生 IDE<br>极致体验</p>
</div>

</div>

<div class="mt-8 p-4 rounded-lg" style="background:linear-gradient(135deg,rgba(94,129,172,0.1),rgba(94,129,172,0.03));border:1px solid rgba(94,129,172,0.25)">
  <h4 style="color:#88c0d0">🔍 关键区别</h4>
  <div class="grid grid-cols-2 gap-4 mt-2" style="font-size:0.85rem">
    <div>
      <p><strong>OpenClaw</strong> 能做 Agent 无法做的事：</p>
      <ul style="font-size:0.8rem;color:#94a3b8;margin-top:0.3rem">
        <li>✓ QQ、Discord 等多平台收发</li>
        <li>✓ 定时自动执行任务</li>
        <li>✓ 跨平台消息联动</li>
        <li>✓ 自己的 AI 机器人</li>
      </ul>
    </div>
    <div>
      <p><strong>编程 Agent</strong> 专注代码场景：</p>
      <ul style="font-size:0.8rem;color:#94a3b8;margin-top:0.3rem">
        <li>✓ 深度代码理解</li>
        <li>✓ 编辑器深度集成</li>
        <li>✓ 项目级重构</li>
        <li>✓ Terminal 原生体验</li>
      </ul>
    </div>
  </div>
</div>

---
layout: center
---

<div class="section-title text-center">
  <div style="font-size:4rem;margin-bottom:0.5rem;opacity:0.3">✦</div>
  <h1>Claude Code</h1>
  <h2 style="font-size:1.1rem;color:#94a3b8">目前公司可用 · 最主流的 AI 编程 Agent</h2>
</div>

---

# Claude Code 是什么？

> Anthropic 推出的 **终端 AI 编程 Agent**，直接在你的命令行里工作

<br>

<div class="grid grid-cols-2 gap-6">

<div class="p-4 rounded-lg" style="background:linear-gradient(135deg,rgba(94,129,172,0.12),rgba(94,129,172,0.03));border:1px solid rgba(94,129,172,0.25)">
  <h4 style="color:#88c0d0">✨ 核心能力</h4>
  <ul style="font-size:0.85rem;margin-top:0.5rem" class="space-y-2">
    <li>📖 <strong>全项目理解</strong> — 扫描整个代码库，理解架构</li>
    <li>✏️ <strong>自动编辑</strong> — 直接修改文件、创建新文件</li>
    <li>🔄 <strong>多文件重构</strong> — 跨文件的重构和修改</li>
    <li>🔍 <strong>代码搜索</strong> — 语义搜索、正则搜索</li>
    <li>🧪 <strong>测试生成</strong> — 自动补测试</li>
  </ul>
</div>

<div class="p-4 rounded-lg" style="background:linear-gradient(135deg,rgba(163,190,140,0.12),rgba(163,190,140,0.03));border:1px solid rgba(163,190,140,0.25)">
  <h4 style="color:#a3be8c">🎯 为什么推荐给前端团队？</h4>
  <ul style="font-size:0.85rem;margin-top:0.5rem" class="space-y-2">
    <li>✅ 公司内部**目前可用**</li>
    <li>✅ 指令式编程体验流畅</li>
    <li>✅ 熟悉代码库速度极快</li>
    <li>✅ 多人协作场景友好</li>
    <li>✅ 结合 OpenClaw 效果翻倍</li>
  </ul>
</div>

</div>

---

# Claude Code 核心三件套

### Skills · Hooks · Sub-Agents

<div class="grid grid-cols-3 gap-6 mt-6">

<div class="p-5 rounded-xl" style="background:linear-gradient(180deg,rgba(180,142,173,0.18),rgba(180,142,173,0.04));border:1px solid rgba(180,142,173,0.3)">
  <div style="font-size:2.5rem;margin-bottom:0.5rem">🧩</div>
  <h3 style="color:#b48ead">Skills</h3>
  <p style="font-size:0.85rem;margin-top:0.5rem;color:#94a3b8">可复用的能力模块</p>
  <ul style="font-size:0.8rem;margin-top:0.5rem;color:#94a3b8">
    <li>封装特定技能</li>
    <li>一次编写，处处使用</li>
    <li>可共享、可版本管理</li>
  </ul>
  <div class="mt-4 p-2 rounded" style="background:rgba(180,142,173,0.08);font-size:0.75rem;font-family:monospace;color:#88c0d0">
    → "帮我写个 React 组件"
  </div>
</div>

<div class="p-5 rounded-xl" style="background:linear-gradient(180deg,rgba(143,188,187,0.18),rgba(143,188,187,0.04));border:1px solid rgba(34,211,238,0.3)">
  <div style="font-size:2.5rem;margin-bottom:0.5rem">🪝</div>
  <h3 style="color:#8fbcbb">Hooks</h3>
  <p style="font-size:0.85rem;margin-top:0.5rem;color:#94a3b8">事件触发机制</p>
  <ul style="font-size:0.8rem;margin-top:0.5rem;color:#94a3b8">
    <li>在关键节点插入逻辑</li>
    <li>自动预处理/后处理</li>
    <li>构建工作流流水线</li>
  </ul>
  <div class="mt-4 p-2 rounded" style="background:rgba(143,188,187,0.08);font-size:0.75rem;font-family:monospace;color:#8fbcbb">
    → "提交前自动检查 lint"
  </div>
</div>

<div class="p-5 rounded-xl" style="background:linear-gradient(180deg,rgba(235,203,139,0.18),rgba(235,203,139,0.04));border:1px solid rgba(251,191,36,0.3)">
  <div style="font-size:2.5rem;margin-bottom:0.5rem">👥</div>
  <h3 style="color:#ebcb8b">Sub-Agents</h3>
  <p style="font-size:0.85rem;margin-top:0.5rem;color:#94a3b8">子任务代理</p>
  <ul style="font-size:0.8rem;margin-top:0.5rem;color:#94a3b8">
    <li>拆分复杂任务</li>
    <li>并行执行子任务</li>
    <li>独立上下文互不干扰</li>
  </ul>
  <div class="mt-4 p-2 rounded" style="background:rgba(235,203,139,0.08);font-size:0.75rem;font-family:monospace;color:#ebcb8b">
    → "Agent A 写前端，Agent B 写后端"
  </div>
</div>

</div>

---

# Skills 深度解析

> **Skills = AI 的「可编程能力」**，让 Agent 掌握特定领域的专业知识

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded-lg" style="border:1px solid rgba(180,142,173,0.25)">
  <h4 style="color:#b48ead">📦 Skill 是什么？</h4>
  <p style="font-size:0.85rem;margin-top:0.5rem">一个 Skill 是一个 <strong>可复用的指令模块</strong></p>
  <ul style="font-size:0.8rem;margin-top:0.3rem;color:#94a3b8">
    <li>包含：提示词 + 工具定义 + 约束条件</li>
    <li>可以是单个 prompt，也可以是一套完整的工作流</li>
    <li>支持参数化输入</li>
  </ul>
</div>

<div class="p-4 rounded-lg" style="border:1px solid rgba(180,142,173,0.25)">
  <h4 style="color:#b48ead">🎯 前端常用 Skill 示例</h4>
  <ul style="font-size:0.8rem;margin-top:0.5rem;color:#94a3b8" class="space-y-2">
    <li><code style="color:#88c0d0">react-component-gen</code> — 根据需求生成 React 组件</li>
    <li><code style="color:#88c0d0">css-to-tailwind</code> — 普通 CSS 转 Tailwind 类名</li>
    <li><code style="color:#88c0d0">api-doc-gen</code> — 从代码生成 API 文档</li>
    <li><code style="color:#88c0d0">unit-test-gen</code> — 自动生成单元测试</li>
    <li><code style="color:#88c0d0">code-review</code> — 代码审查模板</li>
  </ul>
</div>

</div>

<div class="mt-6 p-4 rounded-lg" style="background:linear-gradient(135deg,rgba(180,142,173,0.1),rgba(180,142,173,0.03));border:1px solid rgba(180,142,173,0.25)">
  <h4 style="color:#b48ead">💡 最佳实践</h4>
  <p style="font-size:0.85rem;margin-top:0.3rem">把团队常用的编码模式、项目规范写成 Skill，新人上手速度翻倍</p>
</div>

---

# Hooks 深度解析

> **Hooks = AI 的「事件监听器」**，在关键环节插入自动化逻辑

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded-lg" style="border:1px solid rgba(143,188,187,0.25)">
  <h4 style="color:#8fbcbb">🪝 Hook 执行流程</h4>
  <div class="mt-3">
    <pre style="font-size:0.8rem;background:rgba(0,0,0,0.3);padding:0.75rem;border-radius:8px;color:#94a3b8">
用户请求 → pre-hook → AI 处理 → post-hook → 返回结果</pre>
  </div>
  <ul style="font-size:0.8rem;margin-top:0.5rem;color:#94a3b8">
    <li><strong style="color:#8fbcbb">pre-hook:</strong> 请求预处理（验证、增强、过滤）</li>
    <li><strong style="color:#8fbcbb">post-hook:</strong> 结果后处理（格式化、存储、通知）</li>
  </ul>
</div>

<div class="p-4 rounded-lg" style="border:1px solid rgba(143,188,187,0.25)">
  <h4 style="color:#8fbcbb">🎯 前端实用 Hook 场景</h4>
  <ul style="font-size:0.8rem;margin-top:0.5rem;color:#94a3b8" class="space-y-2">
    <li><strong style="color:#8fbcbb">pre-commit hook</strong> — 提交前 AI Review 代码</li>
    <li><strong style="color:#8fbcbb">request hook</strong> — 自动补充项目上下文</li>
    <li><strong style="color:#8fbcbb">response hook</strong> — 代码结果自动格式化</li>
    <li><strong style="color:#8fbcbb">error hook</strong> — 出错时自动重试/降级</li>
  </ul>
</div>

</div>

---

# Sub-Agents 深度解析

> **Sub-Agents = AI 的「团队分工」**，复杂任务拆解并行执行

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded-lg" style="border:1px solid rgba(235,203,139,0.25)">
  <h4 style="color:#ebcb8b">👥 多 Agent 协作模式</h4>
  <div class="mt-3 p-3 rounded" style="background:rgba(0,0,0,0.3);font-size:0.75rem;font-family:monospace;color:#94a3b8">
<pre>
主 Agent（架构师）
├── Sub-Agent A（前端开发）
│   ├── 组件实现
│   └── 样式编写
├── Sub-Agent B（后端开发）
│   ├── API 实现
│   └── 数据库操作
└── Sub-Agent C（测试）
    ├── 单元测试
    └── E2E 测试</pre>
  </div>
</div>

<div class="p-4 rounded-lg" style="border:1px solid rgba(235,203,139,0.25)">
  <h4 style="color:#ebcb8b">🎯 什么时候用？</h4>
  <ul style="font-size:0.8rem;margin-top:0.5rem;color:#94a3b8" class="space-y-2">
    <li>📐 <strong>大型重构</strong> — 不同模块并发处理</li>
    <li>🔍 <strong>多维度审查</strong> — 安全 + 性能 + 样式同时审查</li>
    <li>🏗️ <strong>全栈开发</strong> — 前端后端测试三条线并行</li>
    <li>📊 <strong>批量任务</strong> — 多个独立任务同时处理</li>
  </ul>
  <div class="mt-4 p-3 rounded" style="background:rgba(235,203,139,0.06);font-size:0.8rem;color:#ebcb8b">
    <strong>效果：</strong>原本需要 10 步串行的任务，拆成 4 个并行 → 耗时减少 60%
  </div>
</div>

</div>

---
layout: center
---

<div class="section-title text-center">
  <div style="font-size:4rem;margin-bottom:0.5rem;opacity:0.3">✦</div>
  <h1>开发实操技巧</h1>
  <h2>用好 AI 的「长板」，避开 AI 的「短板」</h2>
</div>

---

# AI 的短板：视觉稿还原

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded-lg" style="background:linear-gradient(135deg,rgba(191,97,106,0.1),rgba(191,97,106,0.03));border:1px solid rgba(191,97,106,0.25)">
  <h4 style="color:#bf616a">🎨 视觉稿 → 代码</h4>
  <p style="font-size:0.85rem;margin-top:0.5rem;color:#94a3b8">AI 目前最大的弱项之一</p>
  <ul style="font-size:0.8rem;margin-top:0.5rem;color:#94a3b8">
    <li>❌ 像素级还原困难</li>
    <li>❌ 多图层动效理解差</li>
    <li>❌ 设计规范难保持</li>
    <li>❌ 交互逻辑理解有限</li>
  </ul>
</div>

<div class="p-5 rounded-lg" style="border:1px solid rgba(100,116,139,0.25)">
  <h4 style="color:#94a3b8">🔍 现有方案对比</h4>
  <ul style="font-size:0.8rem;margin-top:0.5rem;color:#94a3b8" class="space-y-2">
    <li><strong style="color:#cbd5e1">MaaS 应用</strong> — 简单截图生成代码，但精度有限</li>
    <li><strong style="color:#cbd5e1">Pixso</strong> — Figma 替代品，设计稿转代码（Dev Mode）</li>
    <li><strong style="color:#cbd5e1">视觉大模型</strong> — GPT-4V 等理解 UI，但细节丢失</li>
    <li><strong style="color:#cbd5e1">专门工具</strong> — Workbuddy、马维斯等</li>
  </ul>
</div>

</div>

<div class="mt-4 p-4 rounded-lg" style="background:linear-gradient(135deg,rgba(235,203,139,0.1),rgba(235,203,139,0.03));border:1px solid rgba(235,203,139,0.25)">
  <h4 style="color:#ebcb8b">💡 当前最优实践</h4>
  <p style="font-size:0.85rem;margin-top:0.3rem">截图 + 结构描述 + 组件化拆分 → AI 辅助生成<strong>组件骨架</strong>，人工微调样式细节</p>
</div>

---

# AI 的短板：内部 API 集成

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded-lg" style="background:linear-gradient(135deg,rgba(191,97,106,0.1),rgba(191,97,106,0.03));border:1px solid rgba(191,97,106,0.25)">
  <h4 style="color:#bf616a">为什么难？</h4>
  <ul style="font-size:0.8rem;margin-top:0.5rem;color:#94a3b8" class="space-y-2">
    <li>🔒 公司内网，AI 模型不可达</li>
    <li>📚 内部 API 文档不为 AI 所知</li>
    <li>🔐 需要认证鉴权</li>
    <li>🔄 调用链路复杂</li>
  </ul>
</div>

<div class="p-5 rounded-lg" style="background:linear-gradient(135deg,rgba(163,190,140,0.1),rgba(163,190,140,0.03));border:1px solid rgba(163,190,140,0.25)">
  <h4 style="color:#a3be8c">✅ 解决方案：Skill 封装</h4>
  <ul style="font-size:0.8rem;margin-top:0.5rem;color:#94a3b8" class="space-y-2">
    <li>写一个 <strong>API Skill</strong>，封装调用逻辑</li>
    <li>定义清晰的输入输出 Schema</li>
    <li>配置鉴权方式</li>
    <li>注册为 Agent 可用工具</li>
  </ul>
  <div class="mt-3 p-2 rounded" style="background:rgba(0,0,0,0.3);font-size:0.75rem;font-family:monospace;color:#94a3b8">
    → "帮我调一下 HUI 系统的用户数据"<br>
    → Agent 自动使用 Skill 完成调用
  </div>
</div>

</div>

---

# AI 的强项：逻辑性功能

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded-lg" style="background:linear-gradient(135deg,rgba(163,190,140,0.1),rgba(163,190,140,0.03));border:1px solid rgba(163,190,140,0.25)">
  <h4 style="color:#a3be8c">📌 场景 A：确定方案</h4>
  <p style="font-size:0.85rem;margin-top:0.3rem;font-weight:bold;color:#d8dee9">直接告知 AI 执行即可</p>
  <ul style="font-size:0.8rem;margin-top:0.5rem;color:#94a3b8" class="space-y-2">
    <li>✅ "用 ref 实现..."、"写一个..."、"改成..."</li>
    <li>✅ 前端已确定的技术选型</li>
    <li>✅ 有明确规范的标准操作</li>
    <li>✅ 已有类似代码可参考</li>
  </ul>
  <div class="mt-3 p-2 rounded" style="background:rgba(0,0,0,0.3);font-size:0.75rem;font-family:monospace;color:#a3be8c">
    → "把这个表格改成虚拟滚动，用 react-virtualized"
  </div>
</div>

<div class="p-5 rounded-lg" style="background:linear-gradient(135deg,rgba(94,129,172,0.1),rgba(94,129,172,0.03));border:1px solid rgba(94,129,172,0.25)">
  <h4 style="color:#81a1c1">📌 场景 B：不确定方案</h4>
  <p style="font-size:0.85rem;margin-top:0.3rem;font-weight:bold;color:#d8dee9">分两轮完成 🎯</p>
  <ul style="font-size:0.8rem;margin-top:0.5rem;color:#94a3b8" class="space-y-2">
    <li><strong>第 1 轮：</strong>描述问题，让 AI 推荐实现方案</li>
    <li style="margin-left:1rem;color:#64748b">→ 评估各方案的优缺点</li>
    <li><strong>第 2 轮：</strong>选定方案，让 AI 执行</li>
    <li style="margin-left:1rem;color:#64748b">→ 带着明确指令干活</li>
  </ul>
  <div class="mt-3 p-2 rounded" style="background:rgba(0,0,0,0.3);font-size:0.75rem;font-family:monospace;color:#81a1c1">
    → "我想实现一个实时协作编辑功能，有什么方案？"<br>
    → "选 OT 方案，帮我实现基础框架"
  </div>
</div>

</div>

---

# 多角色协作模式

参考：<a href="https://github.com/msitarzewski/agency-agents" target="_blank" style="color:#81a1c1">agency-agents</a>

<div class="grid grid-cols-3 gap-6 mt-6">

<div class="p-4 rounded-lg text-center" style="border:1px solid rgba(94,129,172,0.3)">
  <div style="font-size:2.5rem;margin-bottom:0.25rem">🧑‍💼</div>
  <h4 style="color:#81a1c1">PM Agent</h4>
  <p style="font-size:0.8rem;margin-top:0.3rem;color:#94a3b8">需求分析<br>任务拆分<br>验收标准</p>
</div>

<div class="p-4 rounded-lg text-center" style="border:1px solid rgba(163,190,140,0.3)">
  <div style="font-size:2.5rem;margin-bottom:0.25rem">👨‍💻</div>
  <h4 style="color:#a3be8c">Dev Agent</h4>
  <p style="font-size:0.8rem;margin-top:0.3rem;color:#94a3b8">编码实现<br>单元测试<br>Code Review</p>
</div>

<div class="p-4 rounded-lg text-center" style="border:1px solid rgba(180,142,173,0.3)">
  <div style="font-size:2.5rem;margin-bottom:0.25rem">🧪</div>
  <h4 style="color:#b48ead">QA Agent</h4>
  <p style="font-size:0.8rem;margin-top:0.3rem;color:#94a3b8">测试用例<br>E2E 测试<br>回归验证</p>
</div>

</div>

<div class="mt-8 p-4 rounded-lg" style="background:linear-gradient(135deg,rgba(94,129,172,0.08),rgba(180,142,173,0.08),rgba(163,190,140,0.08));border:1px solid rgba(100,116,139,0.25)">
  <h4 style="color:#d8dee9">🔥 工作流示例：</h4>
  <ol style="font-size:0.85rem;margin-top:0.5rem;color:#94a3b8" class="space-y-1">
    <li>1. PM Agent 将需求拆成可执行的 Task</li>
    <li>2. Dev Agent 领取 Task 进行编码</li>
    <li>3. 提交后自动触发 QA Agent 测试</li>
    <li>4. 测试通过 → 通知人类 Review</li>
    <li>5. Review 通过 → 自动合并</li>
  </ol>
</div>

---
layout: center
---

<div class="section-title text-center">
  <div style="font-size:4rem;margin-bottom:0.5rem;opacity:0.3">✦</div>
  <h1>AI 视觉生成能力</h1>
</div>

---

# AI 视觉生成工作流

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded-lg" style="border:1px solid rgba(180,142,173,0.3)">
  <h4 style="color:#b48ead">1️⃣ 需求生成示意图</h4>
  <p style="font-size:0.85rem;margin-top:0.5rem">用 AI 快速生成产品示意图、流程图</p>
  <ul style="font-size:0.8rem;margin-top:0.5rem;color:#94a3b8" class="space-y-1">
    <li>📊 架构图 → Mermaid / Excalidraw</li>
    <li>🖼️ 组件示意图 → AI 生成 SVG</li>
    <li>📋 用户流程图 → 自动绘制</li>
  </ul>
</div>

<div class="p-5 rounded-lg" style="border:1px solid rgba(180,142,173,0.3)">
  <h4 style="color:#b48ead">2️⃣ 视觉稿（图片）还原</h4>
  <p style="font-size:0.85rem;margin-top:0.5rem">从设计图到代码的工具链</p>
  <ul style="font-size:0.8rem;margin-top:0.5rem;color:#94a3b8" class="space-y-1">
    <li>🤖 <strong>视觉大模型</strong> — GPT-4V / Claude Vision</li>
    <li>🎨 <strong>Figma 插件</strong> — Pixso Dev Mode</li>
    <li>🔧 <strong>Workbuddy</strong> — 设计稿转代码</li>
    <li>📐 <strong>马维斯</strong> — 设计规范检查</li>
  </ul>
</div>

</div>

<div class="mt-6 p-4 rounded-lg" style="background:linear-gradient(135deg,rgba(100,116,139,0.1),rgba(100,116,139,0.03));border:1px solid rgba(100,116,139,0.25)">
  <h4 style="color:#94a3b8">现实 vs 期望</h4>
  <div class="grid grid-cols-2 gap-4 mt-2" style="font-size:0.8rem">
    <div class="p-2 rounded" style="background:rgba(191,97,106,0.06)">
      <strong style="color:#bf616a">现实：</strong>AI 很难做到像素级还原
    </div>
    <div class="p-2 rounded" style="background:rgba(163,190,140,0.06)">
      <strong style="color:#a3be8c">期望：</strong>未来 AI 直接看图生成完整前端
    </div>
  </div>
</div>

---
layout: center
class: text-center
---

# 总结

<div class="grid grid-cols-3 gap-6 mt-8">

<div>
  <div style="font-size:4rem;margin-bottom:0.5rem">🦐</div>
  <h4 style="color:#d8dee9">OpenClaw</h4>
  <p style="font-size:0.85rem;color:#94a3b8;margin-top:0.3rem">你的 AI 操作系统<br>多平台 + 自动化</p>
</div>

<div>
  <div style="font-size:4rem;margin-bottom:0.5rem">⚡</div>
  <h4 style="color:#d8dee9">AI Agent</h4>
  <p style="font-size:0.85rem;color:#94a3b8;margin-top:0.3rem">编程提效<br>Claude Code + Cursor</p>
</div>

<div>
  <div style="font-size:4rem;margin-bottom:0.5rem">🎯</div>
  <h4 style="color:#d8dee9">最佳实践</h4>
  <p style="font-size:0.85rem;color:#94a3b8;margin-top:0.3rem">扬长避短<br>场景决定用法</p>
</div>

</div>

<div class="mt-10 p-5 rounded-xl" style="background:linear-gradient(135deg,rgba(163,190,140,0.1),rgba(94,129,172,0.08));border:1px solid rgba(100,116,139,0.25)">
  <h3 style="color:#d8dee9;text-align:left">🚀 立刻行动</h3>
  <div class="grid grid-cols-2 gap-4 mt-3" style="font-size:0.85rem">
    <div>
      <p><strong style="color:#a3be8c">今天就能做：</strong></p>
      <ul style="font-size:0.8rem;color:#94a3b8;margin-top:0.3rem" class="space-y-1">
        <li>1️⃣ 安装 OpenClaw（5 分钟）</li>
        <li>2️⃣ 接入 QQ / Discord</li>
        <li>3️⃣ 体验 Agent 能力</li>
        <li>4️⃣ 写第一个 Skill</li>
      </ul>
    </div>
    <div>
      <p><strong style="color:#81a1c1">未来可探索：</strong></p>
      <ul style="font-size:0.8rem;color:#94a3b8;margin-top:0.3rem" class="space-y-1">
        <li>🔮 多 Agent 协作流水线</li>
        <li>🔮 定时自动化任务</li>
        <li>🔮 团队知识库集成</li>
        <li>🔮 接入私有 MCP 服务</li>
      </ul>
    </div>
  </div>
</div>

---
layout: center
class: text-center
---

<h1 style="font-size:3rem">谢谢聆听 🦐</h1>
<p style="font-size:1.2rem;color:#94a3b8;margin-top:0.5rem">欢迎交流 & 一起探索</p>

<br><br>

<div style="display:flex;justify-content:center;gap:2rem;flex-wrap:wrap">
  <a href="https://docs.openclaw.ai" target="_blank" style="color:#81a1c1;font-size:0.9rem">📖 OpenClaw 文档</a>
  <a href="https://github.com/openclaw/openclaw" target="_blank" style="color:#81a1c1;font-size:0.9rem">⭐ GitHub</a>
  <a href="https://github.com/msitarzewski/agency-agents" target="_blank" style="color:#81a1c1;font-size:0.9rem">👥 Agency Agents</a>
</div>

---
layout: end
---

# Q&A

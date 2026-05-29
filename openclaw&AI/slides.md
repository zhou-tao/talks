---
theme: default
background: false
title: OpenClaw 与 AI 实践
titleTemplate: '%s'
info: |
  ## OpenClaw 与 AI 实践
  小组培训 · 前端开发者的 AI 提效指南
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
---

<style>
.autocomplete-list { display: none !important; }
</style>


# OpenClaw 与 AI 编程实践

<p style="font-size:1.2rem;color:#94a3b8;margin-top:-0.5rem">
主讲人：周涛
</p>

---
layout: center
---

# 演讲目录

<div class="grid grid-cols-3 gap-8 mt-10">

<div class="p-5 rounded-xl text-center" style="background:linear-gradient(135deg,rgba(163,190,140,0.15),rgba(163,190,140,0.04));border:1px solid rgba(163,190,140,0.3)">
  <div style="font-size:2rem;margin-bottom:0.3rem">🦐</div>
  <h3 style="color:#a3be8c">Part 1</h3>
  <p style="font-size:0.85rem;margin-top:0.3rem;color:#d8dee9">OpenClaw · Hermes · Agent</p>
  <ul style="font-size:0.75rem;margin-top:0.5rem;color:#94a3b8;text-align:left">
    <li>OpenClaw 介绍与安装</li>
    <li>Hermes 执行引擎</li>
    <li>Agent 概念与工具对比</li>
  </ul>
</div>

<div class="p-5 rounded-xl text-center" style="background:linear-gradient(135deg,rgba(94,129,172,0.15),rgba(94,129,172,0.04));border:1px solid rgba(94,129,172,0.3)">
  <div style="font-size:2rem;margin-bottom:0.3rem">⌨️</div>
  <h3 style="color:#81a1c1">Part 2</h3>
  <p style="font-size:0.85rem;margin-top:0.3rem;color:#d8dee9">Claude Code 深度讲解</p>
  <ul style="font-size:0.75rem;margin-top:0.5rem;color:#94a3b8;text-align:left">
    <li>认知纠偏与核心能力</li>
    <li>Skills · Rules · Hooks</li>
    <li>Sub-Agents · Workflows · Memory</li>
    <li>实操技巧总结</li>
  </ul>
</div>

<div class="p-5 rounded-xl text-center" style="background:linear-gradient(135deg,rgba(235,203,139,0.15),rgba(235,203,139,0.04));border:1px solid rgba(235,203,139,0.3)">
  <div style="font-size:2rem;margin-bottom:0.3rem">💬</div>
  <h3 style="color:#ebcb8b">Part 3</h3>
  <p style="font-size:0.85rem;margin-top:0.3rem;color:#d8dee9">Q&A</p>
  <ul style="font-size:0.75rem;margin-top:0.5rem;color:#94a3b8;text-align:left">
    <li>问题答疑</li>
    <li>使用经验分享</li>
  </ul>
</div>

</div>

---
layout: center
---

<div class="section-title text-center">
  <div style="font-size:4rem;margin-bottom:0.5rem;opacity:0.3">🦐</div>
  <h1 style="font-size:2.5rem">Part 1</h1>
  <h2 style="font-size:1.3rem;color:#94a3b8;margin-top:0.3rem">OpenClaw · Hermes · Agent 概念</h2>
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
- 🔌 **多平台接入** — QQ / Discord / Telegram / Web
- 🛠 **可编程 Agent** — Skills / Hooks / Sub-Agents
- 🔒 **本地优先** — 数据在自己手里

---

# OpenClaw 安装与配置

<br>

官网地址：https://openclaw.ai

- 系统要求

  - Node 24（推荐）或 Node 22.16+ - 安装脚本会自动处理这一点
  - macOS、Linux 或 Windows - 支持原生 Windows 和 WSL2

- 安装

```sh
npm install -g openclaw@latest
openclaw onboard --install-daemon
```

<br>

- 验证

```bash
openclaw --version      # 确认 CLI 可用
openclaw doctor         # 检查配置问题
```


---

# OpenClaw 部署环境推荐

<div class="mt-6">
  <table style="font-size:0.8rem;width:100%">
    <thead>
      <tr>
        <th style="text-align:left">部署方式</th>
        <th style="text-align:center">安全性</th>
        <th style="text-align:left">适用场景</th>
        <th style="text-align:center">操作门槛</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="color:#a3be8c;font-weight:bold">✅ 用闲置旧电脑</td>
        <td style="text-align:center;color:#a3be8c">高</td>
        <td>手边有退役电脑</td>
        <td style="text-align:center">低</td>
      </tr>
      <tr>
        <td style="color:#88c0d0;font-weight:bold">✅ 虚拟机隔离（VMware/VirtualBox）</td>
        <td style="text-align:center;color:#88c0d0">高</td>
        <td>日常电脑，愿意装虚拟机</td>
        <td style="text-align:center">中</td>
      </tr>
      <tr>
        <td style="color:#8fbcbb;font-weight:bold">✅ 云服务器部署（阿里云、华为云）</td>
        <td style="text-align:center;color:#8fbcbb">最高</td>
        <td>需要24小时在线，愿意付费</td>
        <td style="text-align:center">中</td>
      </tr>
      <tr>
        <td style="color:#ebcb8b;font-weight:bold">✅ Docker 容器隔离</td>
        <td style="text-align:center;color:#ebcb8b">较高</td>
        <td>熟悉容器技术</td>
        <td style="text-align:center">中高</td>
      </tr>
      <tr>
        <td style="color:#bf616a;font-weight:bold">❌ 直接装在日常电脑上</td>
        <td style="text-align:center;color:#bf616a">低</td>
        <td style="color:#bf616a">不推荐</td>
        <td style="text-align:center">低</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="mt-6 p-4 rounded-lg" style="background:linear-gradient(135deg,rgba(191,97,106,0.1),rgba(191,97,106,0.03));border:1px solid rgba(191,97,106,0.25)">
  <h4 style="color:#bf616a">⚠️ 为什么不推荐直接装在日常电脑？</h4>
  <p style="font-size:0.85rem;margin-top:0.3rem;color:#94a3b8">OpenClaw 需要常驻运行，直接装在日常电脑会占用系统资源、增加安全风险，且重启后需要手动恢复服务</p>
</div>

---

# OpenClaw 多 Agent

> 多个 Agent 协同工作，每个 Agent 专注一个领域

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded-lg" style="background:linear-gradient(135deg,rgba(94,129,172,0.12),rgba(94,129,172,0.03));border:1px solid rgba(94,129,172,0.25)">
  <h4 style="color:#88c0d0">🤖 工作模式</h4>
  <div class="mt-3 p-3 rounded" style="background:rgba(0,0,0,0.3);font-size:0.75rem;font-family:monospace;color:#94a3b8">
<pre>
用户指令
    ↓
主 Agent（调度中心）
    ├── Agent A（需求分析）→ 输出需求文档
    ├── Agent B（代码编写）→ 输出代码实现
    └── Agent C（运维监控）→ 输出运行报告
    ↓
结果汇总 → 推送到 QQ / Discord / Web</pre>
  </div>
  <p style="font-size:0.8rem;margin-top:0.3rem;color:#94a3b8">写一次 Skill，多端同步可用</p>
</div>

<div class="p-4 rounded-lg" style="background:linear-gradient(135deg,rgba(163,190,140,0.12),rgba(163,190,140,0.03));border:1px solid rgba(163,190,140,0.25)">
  <h4 style="color:#a3be8c">✨ 核心优势</h4>
  <ul style="font-size:0.85rem;margin-top:0.5rem;color:#94a3b8" class="space-y-2">
    <li>**分工协作** — 每个 Agent 专注擅长的领域</li>
    <li>**并行执行** — 多个任务同时处理</li>
    <li>**多端联动** — QQ / Discord / Web 同步响应</li>
    <li>**定时触发** — 自动执行周期性任务</li>
  </ul>
  <div class="mt-3 p-2 rounded" style="background:rgba(0,0,0,0.3);font-size:0.75rem;font-family:monospace;color:#88c0d0">
    视频演示 → https://www.bilibili.com/video/BV1HxQSBgEvC
  </div>
</div>

</div>

---

# OpenClaw 使用场景

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded-lg" style="background:linear-gradient(135deg,rgba(94,129,172,0.12),rgba(94,129,172,0.03));border:1px solid rgba(94,129,172,0.25)">
  <h4 style="color:#88c0d0">👨‍💻 项目开发</h4>
  <p style="font-size:0.85rem;margin-top:0.3rem;color:#94a3b8">多 Agent 协作，覆盖开发全流程</p>
  <div class="mt-3">
    <div class="flex items-center gap-2" style="font-size:0.8rem;color:#94a3b8">
      <span class="px-2 py-1 rounded" style="background:rgba(94,129,172,0.15);color:#88c0d0;font-size:0.7rem">Agent 1</span>
      <span>需求分析 — 理解需求、拆分任务</span>
    </div>
    <div class="mt-2 flex items-center gap-2" style="font-size:0.8rem;color:#94a3b8">
      <span class="px-2 py-1 rounded" style="background:rgba(163,190,140,0.15);color:#a3be8c;font-size:0.7rem">Agent 2</span>
      <span>代码编写 — 实现功能、编写测试</span>
    </div>
    <div class="mt-2 flex items-center gap-2" style="font-size:0.8rem;color:#94a3b8">
      <span class="px-2 py-1 rounded" style="background:rgba(180,142,173,0.15);color:#b48ead;font-size:0.7rem">Agent 3</span>
      <span>运维监控 — 日志分析、故障排查</span>
    </div>
  </div>
</div>

<div class="p-5 rounded-lg" style="background:linear-gradient(135deg,rgba(163,190,140,0.12),rgba(163,190,140,0.03));border:1px solid rgba(163,190,140,0.25)">
  <h4 style="color:#a3be8c">📱 自动化工作</h4>
  <p style="font-size:0.85rem;margin-top:0.3rem;color:#94a3b8">定时账号运营助手，7×24 自动运转</p>
  <div class="mt-3">
    <div class="flex items-center gap-2" style="font-size:0.8rem;color:#94a3b8">
      <span class="px-2 py-1 rounded" style="background:rgba(235,203,139,0.15);color:#ebcb8b;font-size:0.7rem">采集</span>
      <span>定时抓取热点信息、行业动态</span>
    </div>
    <div class="mt-2 flex items-center gap-2" style="font-size:0.8rem;color:#94a3b8">
      <span class="px-2 py-1 rounded" style="background:rgba(208,135,112,0.15);color:#d08770;font-size:0.7rem">发布</span>
      <span>自动生成内容、定时推送到各平台</span>
    </div>
    <div class="mt-2 flex items-center gap-2" style="font-size:0.8rem;color:#94a3b8">
      <span class="px-2 py-1 rounded" style="background:rgba(143,188,187,0.15);color:#8fbcbb;font-size:0.7rem">维护</span>
      <span>活跃度维护、评论互动、数据统计</span>
    </div>
  </div>
</div>

</div>

<div class="mt-4 p-3 rounded-lg text-center" style="background:linear-gradient(135deg,rgba(235,203,139,0.1),rgba(235,203,139,0.03));border:1px solid rgba(235,203,139,0.25)">
  <strong style="color:#ebcb8b">🎯 定位：</strong>不是 Chatbot，是你的 <strong style="color:#ebcb8b">AI 操作系统</strong>
</div>

---
layout: two-cols
---

# Hermes

> 让 AI 从「会说」到「会做」

<br>

### 核心能力

🧩 **工具调用** — 调用 API、读文件、写代码

👀 **视觉识别** — 看懂截图、UI、流程图

🖐️ **浏览器操控** — AI 自动操作网页

📋 **文件系统** — 读写本地文件

::right::

<div class="ml-4 mt-6">

<div class="p-4 rounded-xl" style="background:linear-gradient(135deg,rgba(136,192,208,0.15),rgba(136,192,208,0.04));border:1px solid rgba(136,192,208,0.3)">
  <h4 style="color:#88c0d0">⚡ vs OpenClaw</h4>
  <p style="font-size:0.85rem;margin-top:0.5rem">OpenClaw = <strong>框架/操作系统</strong><br>Hermes = <strong>执行引擎</strong></p>
  <p style="font-size:0.8rem;margin-top:0.3rem;color:#94a3b8">OpenClaw 负责调度，Hermes 负责执行</p>
</div>

<div class="mt-4 p-4 rounded-lg" style="background:linear-gradient(135deg,rgba(163,190,140,0.1),rgba(163,190,140,0.03));border:1px solid rgba(163,190,140,0.25)">
  <h4 style="color:#a3be8c">🦐 养虾 + 养马</h4>
  <p style="font-size:0.85rem;margin-top:0.3rem;color:#94a3b8">互相驱动、辅助<br>自主进化（自动沉淀 skill）</p>
</div>

</div>

---

# Agent 概念与工具对比

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="p-4 rounded-lg" style="background:linear-gradient(135deg,rgba(94,129,172,0.12),rgba(94,129,172,0.03));border:1px solid rgba(94,129,172,0.25)">
  <h4 style="color:#88c0d0">🤖 Agent 是什么？</h4>
  <p style="font-size:0.85rem;margin-top:0.5rem;color:#94a3b8">感知 → 决策 → 执行 → 反馈</p>
  <div class="mt-3 p-2 rounded" style="background:rgba(0,0,0,0.3);font-size:0.75rem;font-family:monospace;color:#94a3b8">
    Workflow = 固定路径（流水线）<br>
    Agent = 自主决策（智能体）
  </div>
</div>

<div class="p-4 rounded-lg" style="border:1px solid rgba(100,116,139,0.25)">
  <h4 style="color:#94a3b8">🔍 工具横向对比</h4>
  <table style="font-size:0.75rem;margin-top:0.5rem;width:100%">
    <thead>
      <tr><th>工具</th><th>定位</th></tr>
    </thead>
    <tbody>
      <tr><td style="color:#a3be8c;font-weight:bold">OpenClaw</td><td>调度agent</td></tr>
      <tr><td style="color:#81a1c1;font-weight:bold">Claude Code</td><td>终端编程</td></tr>
      <tr><td style="color:#b48ead;font-weight:bold">Codex</td><td>IDE插件</td></tr>
      <tr><td style="color:#d08770;font-weight:bold">Cursor</td><td>AI IDE</td></tr>
      <tr><td style="color:#8fbcbb;font-weight:bold">Cline</td><td>VS Code</td></tr>
    </tbody>
  </table>
</div>

</div>

<div class="mt-4 p-3 rounded-lg" style="background:linear-gradient(135deg,rgba(235,203,139,0.1),rgba(235,203,139,0.03));border:1px solid rgba(235,203,139,0.25)">
  <strong style="color:#ebcb8b">💡 选型建议：</strong>独立项目开发、运营 — <strong>OpenClaw</strong>（自动化）+ <strong>Claude Code</strong>（深度编码）
</div>

---
layout: center
---

<div class="section-title text-center">
  <div style="font-size:4rem;margin-bottom:0.5rem;opacity:0.3">✦</div>
  <h1 style="font-size:2.5rem">Part 2</h1>
  <h2 style="font-size:1.3rem;color:#94a3b8;margin-top:0.3rem">Claude Code 深度讲解</h2>
  </div>

---

# Claude Code ≠ Claude 模型

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded-lg" style="background:linear-gradient(135deg,rgba(191,97,106,0.1),rgba(191,97,106,0.03));border:1px solid rgba(191,97,106,0.25)">
  <h4 style="color:#bf616a">❌ 常见误区</h4>
  <p style="font-size:0.85rem;margin-top:0.5rem;color:#94a3b8">很多人以为 Claude Code 就是 Claude 模型的聊天界面</p>
  <div class="mt-3 p-3 rounded" style="background:rgba(0,0,0,0.3);font-size:0.8rem;color:#bf616a">
    "Claude Code = 用 Claude 聊天？" → <strong>错！</strong>
  </div>
</div>

<div class="p-5 rounded-lg" style="background:linear-gradient(135deg,rgba(163,190,140,0.1),rgba(163,190,140,0.03));border:1px solid rgba(163,190,140,0.25)">
  <h4 style="color:#a3be8c">✅ 正确理解</h4>
  <div class="mt-3">
    <div class="p-3 rounded" style="background:rgba(0,0,0,0.2);font-size:0.85rem">
      <p><strong style="color:#88c0d0">Claude 模型</strong> = 大语言模型（对话能力）</p>
      <p style="color:#64748b;font-size:0.8rem;margin-top:0.2rem">→ 只有「大脑」，能思考但无法行动</p>
    </div>
    <div class="mt-2 p-3 rounded" style="background:rgba(0,0,0,0.2);font-size:0.85rem">
      <p><strong style="color:#a3be8c">Claude Code</strong> = 终端 AI 编程 Agent（行动能力）</p>
      <p style="color:#64748b;font-size:0.8rem;margin-top:0.2rem">→ 大脑 + 手脚，能思考还能动手干活</p>
    </div>
  </div>
</div>

</div>

<div class="mt-4 p-3 rounded-lg text-center" style="background:linear-gradient(135deg,rgba(235,203,139,0.1),rgba(235,203,139,0.03));border:1px solid rgba(235,203,139,0.25)">
  <strong style="color:#ebcb8b">类比：</strong>Claude 模型 = 只会说话的知识分子 · Claude Code = 既能说话又能动手的工程师
</div>

---

# Claude Code 核心能力

> Anthropic 推出的 **终端 AI 编程 Agent**，直接在你的命令行里工作

<div class="grid grid-cols-2 gap-6 mt-6">

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
    <li>✅ Skills/Hooks/Rules 可定制</li>
  </ul>
</div>

</div>

<div class="mt-4 p-3 rounded-lg text-center" style="background:rgba(0,0,0,0.2)">
  <span style="font-size:0.85rem;color:#64748b">介绍视频 → </span>
  <span style="font-size:0.85rem;color:#88c0d0">https://www.bilibili.com/video/BV1kX546QEjG</span>
</div>

---

# Claude Code 核心四件套

### Skills · Rules · Hooks · Sub-Agents

<div class="grid grid-cols-4 gap-4 mt-6">

<div class="p-4 rounded-xl" style="background:linear-gradient(180deg,rgba(180,142,173,0.18),rgba(180,142,173,0.04));border:1px solid rgba(180,142,173,0.3)">
  <div style="font-size:2rem;margin-bottom:0.3rem">🧩</div>
  <h3 style="color:#b48ead;font-size:1rem">Skills</h3>
  <p style="font-size:0.75rem;margin-top:0.3rem;color:#94a3b8">可复用的能力模块<br>按需调用</p>
  <div class="mt-3 p-2 rounded" style="background:rgba(180,142,173,0.08);font-size:0.7rem;font-family:monospace;color:#88c0d0">
    → 工具箱（按需取用）
  </div>
</div>

<div class="p-4 rounded-xl" style="background:linear-gradient(180deg,rgba(235,203,139,0.18),rgba(235,203,139,0.04));border:1px solid rgba(251,191,36,0.3)">
  <div style="font-size:2rem;margin-bottom:0.3rem">📋</div>
  <h3 style="color:#ebcb8b;font-size:1rem">Rules</h3>
  <p style="font-size:0.75rem;margin-top:0.3rem;color:#94a3b8">持久化规则<br>始终生效</p>
  <div class="mt-3 p-2 rounded" style="background:rgba(235,203,139,0.08);font-size:0.7rem;font-family:monospace;color:#ebcb8b">
    → 公司制度（自动遵守）
  </div>
</div>

<div class="p-4 rounded-xl" style="background:linear-gradient(180deg,rgba(143,188,187,0.18),rgba(143,188,187,0.04));border:1px solid rgba(34,211,238,0.3)">
  <div style="font-size:2rem;margin-bottom:0.3rem">🧲</div>
  <h3 style="color:#8fbcbb;font-size:1rem">Hooks</h3>
  <p style="font-size:0.75rem;margin-top:0.3rem;color:#94a3b8">事件触发机制<br>自动预处理</p>
  <div class="mt-3 p-2 rounded" style="background:rgba(143,188,187,0.08);font-size:0.7rem;font-family:monospace;color:#8fbcbb">
    → 事件监听器
  </div>
</div>

<div class="p-4 rounded-xl" style="background:linear-gradient(180deg,rgba(208,135,112,0.18),rgba(208,135,112,0.04));border:1px solid rgba(208,135,112,0.3)">
  <div style="font-size:2rem;margin-bottom:0.3rem">👥</div>
  <h3 style="color:#d08770;font-size:1rem">Sub-Agents</h3>
  <p style="font-size:0.75rem;margin-top:0.3rem;color:#94a3b8">子任务代理<br>并行执行</p>
  <div class="mt-3 p-2 rounded" style="background:rgba(208,135,112,0.08);font-size:0.7rem;font-family:monospace;color:#d08770">
    → 团队分工
  </div>
</div>

</div>

<div class="mt-6 p-4 rounded-lg" style="background:linear-gradient(135deg,rgba(94,129,172,0.08),rgba(180,142,173,0.08),rgba(143,188,187,0.08),rgba(235,203,139,0.08));border:1px solid rgba(100,116,139,0.25)">
  <p style="font-size:0.85rem;color:#d8dee9;text-align:center">
    <strong style="color:#b48ead">Skills</strong> 按需调用 · <strong style="color:#ebcb8b">Rules</strong> 自动遵守 · <strong style="color:#8fbcbb">Hooks</strong> 事件触发 · <strong style="color:#d08770">Sub-Agents</strong> 并行分工
  </p>
</div>

---
layout: center
---

<div class="section-title text-center">
  <div style="font-size:3rem;margin-bottom:0.3rem;opacity:0.3">🧩</div>
  <h1 style="font-size:2rem">Skills 深度解析</h1>
  <h2 style="font-size:1rem;color:#94a3b8;margin-top:0.3rem">AI 的「可编程能力」</h2>
</div>

---

# Skills 是什么？

> **Skills = AI 的「可复用指令模块」**，类比 npm 包

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded-lg" style="border:1px solid rgba(180,142,173,0.25)">
  <h4 style="color:#b48ead">📦 Skill 组成</h4>
  <ul style="font-size:0.85rem;margin-top:0.5rem;color:#94a3b8" class="space-y-2">
    <li><strong>提示词</strong> — 核心指令和上下文</li>
    <li><strong>工具定义</strong> — 可调用的外部能力</li>
    <li><strong>约束条件</strong> — 输入输出规范</li>
  </ul>
  <div class="mt-3 p-2 rounded" style="background:rgba(0,0,0,0.3);font-size:0.75rem;font-family:monospace;color:#94a3b8">
    一次编写 → 处处使用 → 可共享 → 可版本管理
  </div>
</div>

<div class="p-4 rounded-lg" style="border:1px solid rgba(180,142,173,0.25)">
  <h4 style="color:#b48ead">🎯 前端常用 Skill 示例</h4>
  <ul style="font-size:0.85rem;margin-top:0.5rem;color:#94a3b8" class="space-y-2">
    <li><code style="color:#88c0d0">react-component-gen</code> — 生成 React 组件</li>
    <li><code style="color:#88c0d0">css-to-tailwind</code> — CSS 转 Tailwind</li>
    <li><code style="color:#88c0d0">unit-test-gen</code> — 自动生成单元测试</li>
    <li><code style="color:#88c0d0">code-review</code> — 代码审查模板</li>
    <li><code style="color:#88c0d0">hui</code> — HUI 组件库规范（公司内部）</li>
  </ul>
</div>

</div>

---

# SkillHub — Skill 的管理平台

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded-lg" style="background:linear-gradient(135deg,rgba(191,97,106,0.1),rgba(191,97,106,0.03));border:1px solid rgba(191,97,106,0.25)">
  <h4 style="color:#bf616a">🌐 外网 SkillHub</h4>
  <p style="font-size:0.85rem;margin-top:0.5rem;color:#94a3b8">https://www.skillhub.club/</p>
  <div class="mt-3 p-3 rounded" style="background:rgba(191,97,106,0.08);font-size:0.8rem;color:#bf616a">
    ⚠️ 注意隐私泄露安全！不要上传包含内部信息的 Skill
  </div>
</div>

<div class="p-5 rounded-lg" style="background:linear-gradient(135deg,rgba(163,190,140,0.1),rgba(163,190,140,0.03));border:1px solid rgba(163,190,140,0.25)">
  <h4 style="color:#a3be8c">🏢 公司内部 SkillHub</h4>
  <ul style="font-size:0.85rem;margin-top:0.5rem;color:#94a3b8" class="space-y-2">
    <li>部门内：http://10.19.157.15:18080/</li>
    <li>MaaS：https://maas.hikvision.com.cn/maas/#/apply/Skillhub</li>
  </ul>
  <div class="mt-3 p-3 rounded" style="background:rgba(163,190,140,0.08);font-size:0.8rem;color:#a3be8c">
    ✅ 内部 Skill 安全可控，推荐优先使用
  </div>
</div>

</div>

---

# Skill 制作方法

<div class="grid grid-cols-3 gap-5 mt-6">

<div class="p-5 rounded-xl" style="background:linear-gradient(135deg,rgba(94,129,172,0.12),rgba(94,129,172,0.03));border:1px solid rgba(94,129,172,0.25)">
  <div style="font-size:2rem;margin-bottom:0.3rem">💬</div>
  <h4 style="color:#88c0d0">方式一</h4>
  <p style="font-size:0.9rem;margin-top:0.3rem;color:#d8dee9;font-weight:bold">让 Claude Code 帮你制作</p>
  <p style="font-size:0.8rem;margin-top:0.3rem;color:#94a3b8">日常开发中遇到重复模式，直接让 CC 封装成 Skill</p>
  <div class="mt-3 p-2 rounded" style="background:rgba(0,0,0,0.3);font-size:0.7rem;font-family:monospace;color:#88c0d0">
    "帮我把这个组件生成逻辑封装成 skill"
  </div>
</div>

<div class="p-5 rounded-xl" style="background:linear-gradient(135deg,rgba(163,190,140,0.12),rgba(163,190,140,0.03));border:1px solid rgba(163,190,140,0.25)">
  <div style="font-size:2rem;margin-bottom:0.3rem">📄</div>
  <h4 style="color:#a3be8c">方式二</h4>
  <p style="font-size:0.9rem;margin-top:0.3rem;color:#d8dee9;font-weight:bold">从已有文档制作</p>
  <p style="font-size:0.8rem;margin-top:0.3rem;color:#94a3b8">把团队积累的规范文档、编码模式直接转为 Skill</p>
  <div class="mt-3 p-2 rounded" style="background:rgba(0,0,0,0.3);font-size:0.7rem;font-family:monospace;color:#a3be8c">
    HUI 规范 → hui skill
  </div>
</div>

<div class="p-5 rounded-xl" style="background:linear-gradient(135deg,rgba(180,142,173,0.12),rgba(180,142,173,0.03));border:1px solid rgba(180,142,173,0.25)">
  <div style="font-size:2rem;margin-bottom:0.3rem">🔧</div>
  <h4 style="color:#b48ead">方式三</h4>
  <p style="font-size:0.9rem;margin-top:0.3rem;color:#d8dee9;font-weight:bold">skill-creator 制作</p>
  <p style="font-size:0.8rem;margin-top:0.3rem;color:#94a3b8">使用 skill-creator skill，专业化的创建流程</p>
  <div class="mt-3 p-2 rounded" style="background:rgba(0,0,0,0.3);font-size:0.7rem;font-family:monospace;color:#b48ead">
    /skill-creator → 交互式引导
  </div>
</div>

</div>

---

# Skill 发布

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded-lg" style="border:1px solid rgba(180,142,173,0.25)">
  <h4 style="color:#b48ead">📦 发布流程</h4>
  <div class="mt-3">
    <div style="font-size:0.85rem;color:#94a3b8" class="space-y-3">
      <div class="flex items-center gap-3">
        <span class="px-2 py-1 rounded text-sm" style="background:rgba(180,142,173,0.15);color:#b48ead">1</span>
        <span>本地测试 — 确保 Skill 正常工作</span>
      </div>
      <div class="flex items-center gap-3">
        <span class="px-2 py-1 rounded text-sm" style="background:rgba(180,142,173,0.15);color:#b48ead">2</span>
        <span>打包 — 生成可分发格式</span>
      </div>
      <div class="flex items-center gap-3">
        <span class="px-2 py-1 rounded text-sm" style="background:rgba(180,142,173,0.15);color:#b48ead">3</span>
        <span>发布到 SkillHub — 团队共享</span>
      </div>
    </div>
  </div>
</div>

</div>

---
layout: center
---

<div class="section-title text-center">
  <div style="font-size:3rem;margin-bottom:0.3rem;opacity:0.3">📋</div>
  <h1 style="font-size:2rem">Rules 深度解析</h1>
  <h2 style="font-size:1rem;color:#94a3b8;margin-top:0.3rem">AI 的「持久化规则」</h2>
</div>

---

# Rules — 持久化规则

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded-lg" style="background:linear-gradient(135deg,rgba(235,203,139,0.12),rgba(235,203,139,0.03));border:1px solid rgba(235,203,139,0.25)">
  <h4 style="color:#ebcb8b">📋 Rules 是什么？</h4>
  <p style="font-size:0.85rem;margin-top:0.5rem;color:#94a3b8">项目级/全局级的<strong>持久化规则</strong>，始终生效</p>
  <ul style="font-size:0.8rem;margin-top:0.5rem;color:#94a3b8" class="space-y-2">
    <li>放在 <code style="color:#88c0d0">.claude/rules/</code> 目录下</li>
    <li>每次对话自动加载，无需手动触发</li>
    <li>约束 Agent 的行为边界</li>
  </ul>
</div>

<div class="p-5 rounded-lg" style="background:linear-gradient(135deg,rgba(180,142,173,0.12),rgba(180,142,173,0.03));border:1px solid rgba(180,142,173,0.25)">
  <h4 style="color:#b48ead">🧩 Rules vs Skills 区别</h4>
  <div class="mt-3" style="font-size:0.85rem">
    <div class="p-3 rounded" style="background:rgba(235,203,139,0.08)">
      <strong style="color:#ebcb8b">Rules</strong> = 公司制度（自动遵守）
      <p style="font-size:0.8rem;color:#94a3b8;margin-top:0.2rem">→ 不需要你提醒，Agent 自动遵循</p>
    </div>
    <div class="mt-2 p-3 rounded" style="background:rgba(180,142,173,0.08)">
      <strong style="color:#b48ead">Skills</strong> = 工具箱（按需取用）
      <p style="font-size:0.8rem;color:#94a3b8;margin-top:0.2rem">→ 需要你主动调用才会触发</p>
    </div>
  </div>
</div>

</div>

---

# Rules 实用示例

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded-lg" style="border:1px solid rgba(235,203,139,0.25)">
  <h4 style="color:#ebcb8b">📝 常见 Rules 示例</h4>
  <ul style="font-size:0.85rem;margin-top:0.5rem;color:#94a3b8" class="space-y-2">
    <li><strong style="color:#ebcb8b">HUI 组件使用规范</strong> — 强制使用 HUI 而非 Element UI</li>
    <li><strong style="color:#ebcb8b">代码风格规范</strong> — ESLint 规则、命名约定</li>
    <li><strong style="color:#ebcb8b">Git 提交规范</strong> — commit message 格式</li>
    <li><strong style="color:#ebcb8b">项目架构约束</strong> — 目录结构、模块划分</li>
  </ul>
</div>

<div class="p-4 rounded-lg" style="background:linear-gradient(135deg,rgba(163,190,140,0.1),rgba(163,190,140,0.03));border:1px solid rgba(163,190,140,0.25)">
  <h4 style="color:#a3be8c">🎯 现场演示</h4>
  <p style="font-size:0.85rem;margin-top:0.5rem;color:#94a3b8">添加一条 Rule → 观察 Claude Code 行为变化</p>
  <div class="mt-3 p-3 rounded" style="background:rgba(0,0,0,0.3);font-size:0.75rem;font-family:monospace;color:#a3be8c">
    Demo: 添加 "必须使用 HUI 组件" rule<br>
    → 让 CC 生成表单 → 观察是否自动使用 el-* (HUI)
  </div>
</div>

</div>

<div class="mt-4 p-3 rounded-lg" style="background:linear-gradient(135deg,rgba(235,203,139,0.1),rgba(235,203,139,0.03));border:1px solid rgba(235,203,139,0.25)">
  <strong style="color:#ebcb8b">💡 最佳实践：</strong>把团队编码规范写成 Rules，新人上手即遵守，无需口头提醒
</div>

---
layout: center
---

<div class="section-title text-center">
  <div style="font-size:3rem;margin-bottom:0.3rem;opacity:0.3">🧲</div>
  <h1 style="font-size:2rem">Hooks 深度解析</h1>
  <h2 style="font-size:1rem;color:#94a3b8;margin-top:0.3rem">AI 的「事件监听器」</h2>
</div>

---

# Hooks — 事件触发机制

> **Hooks = AI 的「事件监听器」**，在关键环节插入自动化逻辑

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded-lg" style="border:1px solid rgba(143,188,187,0.25)">
  <h4 style="color:#8fbcbb">🧲 Hook 执行流程</h4>
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

# Hooks 实战案例

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded-lg" style="background:linear-gradient(135deg,rgba(143,188,187,0.12),rgba(143,188,187,0.03));border:1px solid rgba(143,188,187,0.25)">
  <h4 style="color:#8fbcbb">✅ 案例：ESLint Hook</h4>
  <p style="font-size:0.85rem;margin-top:0.5rem;color:#94a3b8">提交前自动 lint 检查，不合格则拦截</p>
  <div class="mt-3 p-3 rounded" style="background:rgba(0,0,0,0.3);font-size:0.75rem;font-family:monospace;color:#8fbcbb">
    配置 pre-commit hook<br>
    → CC 写完代码 → 自动 eslint → 不通过则提示修复
  </div>
  <div class="mt-2 p-2 rounded" style="background:rgba(143,188,187,0.08);font-size:0.75rem;color:#8fbcbb">
    效果：代码质量自动保障，无需人工检查
  </div>
</div>

<div class="p-5 rounded-lg" style="background:linear-gradient(135deg,rgba(208,135,112,0.12),rgba(208,135,112,0.03));border:1px solid rgba(208,135,112,0.25)">
  <h4 style="color:#d08770">✅ 案例：跑马灯 Hook</h4>
  <p style="font-size:0.85rem;margin-top:0.5rem;color:#94a3b8">有趣的自动化演示</p>
  <div class="mt-3 p-3 rounded" style="background:rgba(0,0,0,0.3);font-size:0.75rem;font-family:monospace;color:#d08770">
    现场演示：配置一个 hook<br>
    → 触发 → 看效果
  </div>
  <div class="mt-2 p-2 rounded" style="background:rgba(208,135,112,0.08);font-size:0.75rem;color:#d08770">
    感受 Hooks 的自动化能力
  </div>
</div>

</div>

---
layout: center
---

<div class="section-title text-center">
  <div style="font-size:3rem;margin-bottom:0.3rem;opacity:0.3">👥</div>
  <h1 style="font-size:2rem">高级使用</h1>
  <h2 style="font-size:1rem;color:#94a3b8;margin-top:0.3rem">Sub-Agents · Workflows · Memory</h2>
</div>

---

# Sub-Agents — 团队分工

> **Sub-Agents = AI 的「团队分工」**，复杂任务拆解并行执行

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-4 rounded-lg" style="border:1px solid rgba(208,135,112,0.25)">
  <h4 style="color:#d08770">👥 多 Agent 协作模式</h4>
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

<div class="p-4 rounded-lg" style="border:1px solid rgba(208,135,112,0.25)">
  <h4 style="color:#d08770">🎯 什么时候用？</h4>
  <ul style="font-size:0.8rem;margin-top:0.5rem;color:#94a3b8" class="space-y-2">
    <li>📐 <strong>大型重构</strong> — 不同模块并发处理</li>
    <li>🔍 <strong>多维度审查</strong> — 安全 + 性能 + 样式同时审查</li>
    <li>🏗️ <strong>全栈开发</strong> — 前端后端测试三条线并行</li>
    <li>📊 <strong>批量任务</strong> — 多个独立任务同时处理</li>
  </ul>
  <div class="mt-4 p-3 rounded" style="background:rgba(208,135,112,0.06);font-size:0.8rem;color:#d08770">
    <strong>效果：</strong>串行 10 步 → 并行 4 路，耗时减少 60%
  </div>
</div>

</div>

---

# Workflows — 企业 SOP 流程落地

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded-lg" style="background:linear-gradient(135deg,rgba(94,129,172,0.12),rgba(94,129,172,0.03));border:1px solid rgba(94,129,172,0.25)">
  <h4 style="color:#88c0d0">🔄 Workflow 是什么？</h4>
  <p style="font-size:0.85rem;margin-top:0.5rem;color:#94a3b8">将团队 SOP（标准操作流程）固化为自动化 Workflow</p>
  <div class="mt-3 p-3 rounded" style="background:rgba(0,0,0,0.3);font-size:0.75rem;font-family:monospace;color:#88c0d0">
    需求 → 开发 → 测试 → Review → 合并
  </div>
  <p style="font-size:0.8rem;margin-top:0.3rem;color:#94a3b8">与 Hooks + Skills 组合使用，构建完整流水线</p>
</div>

<div class="p-5 rounded-lg" style="background:linear-gradient(135deg,rgba(163,190,140,0.1),rgba(163,190,140,0.03));border:1px solid rgba(163,190,140,0.25)">
  <h4 style="color:#a3be8c">🎯 实际案例</h4>
  <ul style="font-size:0.8rem;margin-top:0.5rem;color:#94a3b8" class="space-y-2">
    <li><strong style="color:#a3be8c">Code Review 流程</strong></li>
    <li style="margin-left:1rem;color:#64748b">→ 提交代码 → 自动 review → 生成报告</li>
    <li><strong style="color:#a3be8c">发布流程</strong></li>
    <li style="margin-left:1rem;color:#64748b">→ 打包 → 测试 → 部署 → 通知</li>
    <li><strong style="color:#a3be8c">新人入职流程</strong></li>
    <li style="margin-left:1rem;color:#64748b">→ 环境配置 → 项目熟悉 → 首个任务</li>
  </ul>
</div>

</div>

---

# Memory — 持久化记忆系统

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="p-5 rounded-lg" style="background:linear-gradient(135deg,rgba(180,142,173,0.12),rgba(180,142,173,0.03));border:1px solid rgba(180,142,173,0.25)">
  <h4 style="color:#b48ead">🧠 Memory 是什么？</h4>
  <p style="font-size:0.85rem;margin-top:0.5rem;color:#94a3b8">Claude Code 的持久化记忆能力</p>
  <ul style="font-size:0.8rem;margin-top:0.5rem;color:#94a3b8" class="space-y-2">
    <li>跨对话记忆 — 下次对话还记得</li>
    <li>项目级记忆 — 针对当前项目</li>
    <li>用户级记忆 — 个人偏好和习惯</li>
  </ul>
  <div class="mt-3 p-2 rounded" style="background:rgba(0,0,0,0.3);font-size:0.75rem;font-family:monospace;color:#b48ead">
    让 Agent 越用越懂你
  </div>
</div>

<div class="p-5 rounded-lg" style="background:linear-gradient(135deg,rgba(163,190,140,0.1),rgba(163,190,140,0.03));border:1px solid rgba(163,190,140,0.25)">
  <h4 style="color:#a3be8c">🎯 Memory 类型</h4>
  <div class="mt-3" style="font-size:0.85rem">
    <div class="p-3 rounded" style="background:rgba(94,129,172,0.08)">
      <strong style="color:#88c0d0">user</strong> — 用户角色、偏好、知识背景
      <p style="font-size:0.8rem;color:#94a3b8;margin-top:0.2rem">→ 定制化回答风格</p>
    </div>
    <div class="mt-2 p-3 rounded" style="background:rgba(163,190,140,0.08)">
      <strong style="color:#a3be8c">project</strong> — 项目目标、进度、决策
      <p style="font-size:0.8rem;color:#94a3b8;margin-top:0.2rem">→ 理解项目上下文</p>
    </div>
    <div class="mt-2 p-3 rounded" style="background:rgba(180,142,173,0.08)">
      <strong style="color:#b48ead">feedback</strong> — 纠正和验证的行为模式
      <p style="font-size:0.8rem;color:#94a3b8;margin-top:0.2rem">→ 避免重复犯错</p>
    </div>
  </div>
</div>

</div>

---
layout: center
---

<div class="section-title text-center">
  <div style="font-size:3rem;margin-bottom:0.3rem;opacity:0.3">🎯</div>
  <h1 style="font-size:2rem">实操技巧总结</h1>
  <h2 style="font-size:1rem;color:#94a3b8;margin-top:0.3rem">用好 AI 的「长板」，避开 AI 的「短板」</h2>
</div>

---

# AI 的强项与短板

<div class="grid grid-cols-3 gap-5 mt-6">

<div class="p-4 rounded-lg" style="background:linear-gradient(135deg,rgba(163,190,140,0.12),rgba(163,190,140,0.03));border:1px solid rgba(163,190,140,0.25)">
  <h4 style="color:#a3be8c;font-size:0.9rem">✅ 强项：逻辑功能</h4>
  <ul style="font-size:0.8rem;margin-top:0.5rem;color:#94a3b8" class="space-y-1">
    <li>确定方案 → 直接告知执行</li>
    <li>不确定 → 分两轮完成</li>
    <li style="color:#64748b;font-size:0.75rem">① 推荐方案 ② 选定执行</li>
  </ul>
  <div class="mt-2 p-2 rounded" style="background:rgba(0,0,0,0.3);font-size:0.7rem;font-family:monospace;color:#a3be8c">
    "用 react-virtualized 改表格"
  </div>
</div>

<div class="p-4 rounded-lg" style="background:linear-gradient(135deg,rgba(191,97,106,0.12),rgba(191,97,106,0.03));border:1px solid rgba(191,97,106,0.25)">
  <h4 style="color:#bf616a;font-size:0.9rem">❌ 短板：视觉还原</h4>
  <ul style="font-size:0.8rem;margin-top:0.5rem;color:#94a3b8" class="space-y-1">
    <li>像素级还原困难</li>
    <li>设计规范难保持</li>
  </ul>
  <div class="mt-2 p-2 rounded" style="background:rgba(163,190,140,0.08);font-size:0.7rem;color:#a3be8c">
    💡 拆分策略：功能逻辑 vs UI 开发
  </div>
</div>

<div class="p-4 rounded-lg" style="background:linear-gradient(135deg,rgba(191,97,106,0.12),rgba(191,97,106,0.03));border:1px solid rgba(191,97,106,0.25)">
  <h4 style="color:#bf616a;font-size:0.9rem">❌ 短板：内部 API</h4>
  <ul style="font-size:0.8rem;margin-top:0.5rem;color:#94a3b8" class="space-y-1">
    <li>内网不可达</li>
    <li>文档不为 AI 所知</li>
  </ul>
  <div class="mt-2 p-2 rounded" style="background:rgba(163,190,140,0.08);font-size:0.7rem;color:#a3be8c">
    💡 Skill 封装：调用逻辑 + Schema + 鉴权
  </div>
</div>

</div>

<div class="mt-4 p-3 rounded-lg text-center" style="background:linear-gradient(135deg,rgba(235,203,139,0.1),rgba(235,203,139,0.03));border:1px solid rgba(235,203,139,0.25)">
  <strong style="color:#ebcb8b">核心策略：</strong>扬长避短 · 场景决定用法 · 拆分任务降低复杂度
</div>

---

# 课后任务

<div class="mt-8 p-6 rounded-xl text-center" style="background:linear-gradient(135deg,rgba(163,190,140,0.1),rgba(94,129,172,0.08));border:1px solid rgba(100,116,139,0.25)">
  <h3 style="color:#d8dee9;font-size:1.3rem">📝 每人制作一个 Skill，发布到部门 SkillHub</h3>
  <div class="mt-4 grid grid-cols-3 gap-4" style="font-size:0.85rem">
    <div class="p-3 rounded" style="background:rgba(180,142,173,0.08)">
      <strong style="color:#b48ead">方向一</strong>
      <p style="font-size:0.8rem;color:#94a3b8;margin-top:0.2rem">团队常用编码模式</p>
    </div>
    <div class="p-3 rounded" style="background:rgba(235,203,139,0.08)">
      <strong style="color:#ebcb8b">方向二</strong>
      <p style="font-size:0.8rem;color:#94a3b8;margin-top:0.2rem">项目规范封装</p>
    </div>
    <div class="p-3 rounded" style="background:rgba(163,190,140,0.08)">
      <strong style="color:#a3be8c">方向三</strong>
      <p style="font-size:0.8rem;color:#94a3b8;margin-top:0.2rem">内部 API 封装</p>
    </div>
  </div>
</div>

---
layout: center
---

<div class="section-title text-center">
  <div style="font-size:4rem;margin-bottom:0.5rem;opacity:0.3">✦</div>
  <h1 style="font-size:2.5rem">Part 3</h1>
  <h2 style="font-size:1.3rem;color:#94a3b8;margin-top:0.3rem">Q&A</h2>
  </div>

---

# Q&A

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="p-5 rounded-lg" style="background:linear-gradient(135deg,rgba(94,129,172,0.12),rgba(94,129,172,0.03));border:1px solid rgba(94,129,172,0.25)">
  <h4 style="color:#88c0d0">💬 问题答疑</h4>
  <p style="font-size:0.85rem;margin-top:0.5rem;color:#94a3b8">关于 Claude Code、Skills、Hooks、Rules 的任何问题</p>
  <ul style="font-size:0.8rem;margin-top:0.5rem;color:#94a3b8" class="space-y-2">
    <li>安装配置问题</li>
    <li>使用场景讨论</li>
    <li>与其他工具对比</li>
    <li>团队落地方案</li>
  </ul>
</div>

<div class="p-5 rounded-lg" style="background:linear-gradient(135deg,rgba(163,190,140,0.12),rgba(163,190,140,0.03));border:1px solid rgba(163,190,140,0.25)">
  <h4 style="color:#a3be8c">📊 使用经验分享</h4>
  <p style="font-size:0.85rem;margin-top:0.5rem;color:#94a3b8">每人分享自己的使用体验：</p>
  <div class="mt-3 p-3 rounded" style="background:rgba(0,0,0,0.2);font-size:0.85rem">
    <ul style="color:#94a3b8" class="space-y-2">
      <li>✦ 打分 0-10</li>
      <li>✦ 用的什么模型</li>
      <li>✦ 使用技巧</li>
    </ul>
  </div>
  <div class="mt-3 p-2 rounded" style="background:rgba(235,203,139,0.08);font-size:0.8rem;color:#ebcb8b">
    💡 我的技巧：视觉还原 → 拆分任务（功能逻辑 vs UI）
  </div>
</div>

</div>

---
layout: center
class: text-center
---

<h1 style="font-size:3rem">参考文档</h1>

<br><br>

<div style="display:flex;justify-content:center;gap:2rem;flex-wrap:wrap">
  <a href="https://docs.openclaw.ai" target="_blank" style="color:#81a1c1;font-size:0.9rem">📖 OpenClaw 文档</a>
  <a href="https://github.com/openclaw/openclaw" target="_blank" style="color:#81a1c1;font-size:0.9rem">⭐ GitHub</a>
  <a href="https://www.skillhub.club/" target="_blank" style="color:#81a1c1;font-size:0.9rem">🧩 SkillHub</a>
</div>

---
layout: end
---

# Thanks
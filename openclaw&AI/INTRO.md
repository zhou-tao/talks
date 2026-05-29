# OpenClaw 与 AI 实践 — 小组培训大纲

> 总时长：2h | OpenClaw/Hermes/Agent ~30min | Claude Code ~1h | Q&A ~30min

---

## 一、OpenClaw（~10min）

- 是什么（配图）
  - 开源、可本地部署的 AI 助手框架
  - 类比：开源版 ChatGPT + 自动化引擎

- 安装与配置（快速过，不展开）
  - 一条命令安装：`winget/brew/curl/docker`
  - API Key 配置 + 安全要点（本地存储、SecretRef）

- 多 Agent 架构
  - 示意图
  - 视频演示：https://www.bilibili.com/video/BV1HxQSBgEvC/

- 使用场景（简要列举）
  - 编程辅助（需求分析、代码编写、运维）
  - 内容运营（公众号、小红书、知乎）
  - 自动化工作流（定时任务、信息聚合）

---

## 二、Hermes（~8min）

- 是什么？Agent 执行引擎 — 让 AI 从「会说」到「会做」
  - 介绍（配图）
  - 核心能力：工具调用、视觉识别、浏览器操控、文件系统、多轮交互

- vs OpenClaw
  - OpenClaw = AI 框架/操作系统，Hermes = 执行引擎
  - 特点：自主进化（自动沉淀 skill）

- & OpenClaw（养虾+养马）
  - 互相驱动、辅助，OpenClaw 负责调度，Hermes 负责执行

---

## 三、Agent 概念与工具对比（~12min）

- Agent 是什么？
  - 原理示意：感知 → 决策 → 执行 → 反馈
  - 与 Workflow 区别：Workflow 固定路径，Agent 自主决策

- 常见 Agent 工具横向对比（表格速览）
  - OpenClaw / Claude Code / Codex / Cursor / Cline
  - 定位、核心能力、价格、适用场景

- 选型建议
  - 不是非此即彼，黄金组合：OpenClaw + Claude Code + Cursor
  - 过渡到 Claude Code 深度讲解

---

## 四、Claude Code 深度讲解（~60min）⭐ 重点

### 4.1 认知纠偏（~5min）

- 常见误区：Claude Code ≠ Claude 模型
  - Claude 模型 = 大语言模型（对话能力）
  - Claude Code = 终端 AI 编程 Agent（行动能力）
  - 类比：大脑 vs 大脑+手脚

- 介绍视频：https://www.bilibili.com/video/BV1kX546QEjG/

- 核心能力速览
  - 全项目理解、自动编辑、多文件重构、代码搜索、测试生成
  - 为什么推荐给前端团队：公司目前可用、指令式体验流畅

### 4.2 Skills（~20min）

- 是什么、作用
  - Skill = 可复用的指令模块（类比 npm 包）
  - 包含：提示词 + 工具定义 + 约束条件
  - 一次编写，处处使用，可共享、可版本管理

- SkillHub（管理 skill 的网站）
  - 外网：https://www.skillhub.club/（注意隐私泄露安全）
  - 公司内部：
    - 部门内：http://10.19.157.15:18080/
    - maas：https://maas.hikvision.com.cn/maas/#/apply/Skillhub

- 制作方法（重点展开）
  - 方式一：日常开发场景下，让 Claude Code 帮你制作（现场演示）
  - 方式二：使用已积累的文档/规范制作
  - 方式三：使用 skill-creator skill 制作

- 发布流程
  - 本地测试 → 打包 → 发布到 SkillHub

- 常用 Skills 介绍
  - find-skills 、 skill-creator 、 web code-review
  - HUI 组件库 skill（公司内部场景）
  - 现场 Live Demo：安装一个 skill → 使用 → 看效果

### 4.3 Rules（~8min）

- 是什么？与 Skills 区别
  - Rules = 项目级/全局级的持久化规则（始终生效）
  - Skills = 按需调用的能力模块（主动触发）
  - 类比：Rules = 公司制度（自动遵守），Skills = 工具箱（按需取用）

- 编码规范 Rules
  - .claude/rules 目录下的规则文件
  - 示例：HUI 组件使用规范、代码风格规范、Git 提交规范
  - 现场演示：添加一条 rule → 观察 Claude Code 行为变化

### 4.4 Hooks（~10min）

- 作用？事件触发机制 = AI 的「事件监听器」
  - 执行流程：用户请求 → pre-hook → AI 处理 → post-hook → 返回结果
  - pre-hook：请求预处理（验证、增强、过滤）
  - post-hook：结果后处理（格式化、存储、通知）

- 案例：eslint hook
  - 提交前自动 lint 检查，不合格则拦截

- 案例：跑马灯 hook（或其他有趣案例）
  - 现场演示：配置一个 hook → 触发 → 看效果

- 其他实用 Hook 场景
  - request hook — 自动补充项目上下文
  - response hook — 代码结果自动格式化
  - error hook — 出错时自动重试/降级

### 4.5 高级使用（~12min）

- Sub-Agents & Agent Teams
  - 复杂任务拆解并行执行
  - 示意：主 Agent（架构师）→ Sub-Agent A（前端）→ Sub-Agent B（后端）→ Sub-Agent C（测试）
  - 效果：串行 10 步 → 并行 4 路，耗时减少 60%
  - 现场演示或视频展示

- Workflows — 企业标准 SOP 流程落地
  - 将团队 SOP（如 Code Review 流程、发布流程）固化为 Workflow
  - 自动化执行：需求 → 开发 → 测试 → Review → 合并
  - 与 Hooks + Skills 组合使用

- Memory 系统
  - Claude Code 的持久化记忆能力
  - 项目级记忆 vs 用户级记忆
  - 让 Agent 越用越懂你

### 4.6 实操技巧总结（~5min）

- AI 的强项：逻辑性功能
  - 确定方案 → 直接告知执行
  - 不确定方案 → 分两轮（先推荐方案，再选定执行）

- AI 的短板：视觉稿还原
  - 拆分策略：功能逻辑与 UI 开发分离
  - 截图 + 结构描述 + 组件化拆分 → AI 生成骨架，人工微调

- AI 的短板：内部 API 集成
  - Skill 封装方案：封装调用逻辑、定义 Schema、配置鉴权

---

## 五、课后任务（~2min）

- 每人制作一个 Skill，发布到部门 SkillHub
- 建议方向：团队常用编码模式、项目规范、内部 API 封装

---

## 六、Q&A（~30min）

- 问题答疑
- 使用经验分享
  - 打分 0-10 — 用的什么模型 - 使用技巧
  - 我的技巧分享：视觉还原不擅长时，拆分任务（功能逻辑 vs UI 开发）
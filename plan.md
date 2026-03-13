# AgentFlow-Web-App 重构计划（Rethink）

## 1. 项目定位重构
- 旧定位：一人公司品牌官网（展示能力）
- 新定位：AgentFlow 官网 && 智能代理资产证券化交易平台（可交易能力市场）
- 核心价值：把“服务交付”升级为“可定价、可撮合、可托管、可自动交付”的数字资产交易

## 2. 业务对象与交易单元
- 卖家：技能开发者、Agent 开发团队、自动化方案提供方
- 买家：个人工作室、企业运营团队、增长/研发部门
- 交易单元（Asset Unit）：
  - 技能包元数据（能力描述、输入输出、依赖、版本）
  - Agent 代码包（签名、哈希、SBOM）
  - SLA 与授权条款（可用时长、并发、组织规模）

## 3. 核心业务流程（MVP）
1. 卖家上架资产并设置 Ask 价格、最小成交条件
2. 买家公开提交 Bid 价格和购买条款
3. 订单簿撮合：Bid >= Ask 时进入成交态
4. 托管结算：锁定资金 + 生成交易会话
5. 交付网关：买方 Agent 下载加密包、验签、安装
6. 回执与放款：安装成功回执后释放资金
7. 失败回滚：安装失败触发自动回滚与争议流程

## 4. 平台能力模块
- Asset Registry：资产注册、版本管理、上架审核
- OrderBook & Matching：公开订单簿、撮合规则、成交日志
- Escrow & Settlement：托管账户、阶段性放款、手续费模型
- Delivery Gateway：下载授权、签名校验、设备绑定、限次策略
- Risk & Governance：恶意代码扫描、依赖漏洞检查、信誉评分
- Audit & Compliance：全链路日志、对账报表、监管导出

## 5. Web 前端改造方案（已落地）
- Hero：明确“资产证券化交易平台”定位
- Engine：展示证券化交易引擎能力
- Market：公开叫价市场（买卖价、撮合状态、成交后下载触发）
- Flow/Governance：成交与交付流程、风控治理机制
- Contact：分阶段里程碑（M1-M4）+ 接入咨询入口

## 6. 技术架构建议（下一阶段）
- 前端：React + TypeScript + Vite（当前）
- 后端：Node.js/Go 任一，拆成 registry / orderbook / settlement / delivery 四个服务
- 数据：PostgreSQL（交易与账务）+ Redis（订单簿缓存与撮合队列）
- 对象存储：R2/S3（代码包）+ KMS（加密密钥）
- 安全：签名校验、SBOM、恶意样本扫描、OPA 鉴权策略

## 7. 部署策略结论
- 当前阶段（静态站 + 产品验证）：**优先 GitHub Pages**
  - 成本最低、接入最快、适合现在的官网 + MVP 交互演示
- 何时切 Cloudflare：
  - 需要自定义域名 + 边缘安全策略（WAF、Bot 管理）
  - 需要 Workers/Pages Functions 承载 API 与下载鉴权
  - 需要 R2 做代码包分发并降低带宽成本

## 8. GitHub.io 部署执行清单（本次）
1. 初始化本目录 Git 仓库
2. 配置 GitHub Pages Actions 工作流（构建 app/ 并发布）
3. 设置 Vite base 为 `/AgentFlow-Web-App/`
4. 推送到 `https://github.com/aresbit/AgentFlow-Web-App`
5. 在仓库 Settings -> Pages 选择 `GitHub Actions`

## 9. 里程碑计划
1. Week 1: 静态站重构 + 公开叫价交互原型
2. Week 2: 资产注册 API + 订单簿 API + SQLite/Postgres 原型
3. Week 3: 托管结算与交付网关 PoC
4. Week 4: 签名校验、回滚机制、审计面板

# AgentFlow Web App

一人公司官网重构版，定位为**智能代理资产证券化交易平台**（Agent Asset Securitization Marketplace）。

## 项目目标

- 让卖家公开挂出技能包与 Agent 代码能力
- 让买家公开叫价并完成撮合
- 价格达成后触发托管结算与代码包交付
- 买方 Agent 自动下载增强包并完成能力升级

## 当前实现

- 前端：React + TypeScript + Vite + Tailwind
- 页面模块：
  - 平台定位（Hero）
  - 证券化交易引擎能力（Engine）
  - 公开叫价市场（Market）
  - 交易交付流程与治理（Flow/Governance）
  - 接入路线图与咨询入口（Contact）
- 产品规划文档：`plan.md`

## 本地开发

```bash
cd app
npm ci
npm run dev
```

## 本地构建

```bash
cd app
npm run build
```

构建产物输出到 `app/dist`。

## GitHub Pages 部署

已配置工作流：`.github/workflows/deploy-pages.yml`

- 推送 `main` 分支后自动构建并发布
- 访问地址：
  - <https://aresbit.github.io/AgentFlow-Web-App/>

如首次未生效，请在仓库设置中确认：

- `Settings -> Pages -> Source = GitHub Actions`

## 下一步建议

1. 增加后端服务：资产注册、订单簿、托管结算、交付网关
2. 引入签名验证与 SBOM 扫描
3. 增加真实成交回执与争议仲裁流程


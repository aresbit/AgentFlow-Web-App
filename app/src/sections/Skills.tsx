import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { ArrowDownCircle, ArrowUpCircle, CheckCircle2, Download, Package, Wallet } from 'lucide-react';

type Asset = {
  id: string;
  name: string;
  seller: string;
  version: string;
  ask: number;
  bestBid: number;
  tokens: string[];
};

const assets: Asset[] = [
  {
    id: 'skill-001',
    name: 'B2B线索挖掘代理包',
    seller: 'Ares Studio',
    version: 'v1.4.2',
    ask: 1400,
    bestBid: 1260,
    tokens: ['销售自动化', 'CRM', '检索增强'],
  },
  {
    id: 'skill-002',
    name: '代码审查与修复代理包',
    seller: 'CodeSmith Lab',
    version: 'v2.1.0',
    ask: 2600,
    bestBid: 2700,
    tokens: ['静态分析', 'Patch 生成', '回归测试'],
  },
  {
    id: 'skill-003',
    name: '跨境电商客服代理包',
    seller: 'Orbit Ops',
    version: 'v0.9.8',
    ask: 1800,
    bestBid: 1760,
    tokens: ['多语言', '工单编排', 'FAQ 微调'],
  },
];

export function Skills() {
  const [selectedId, setSelectedId] = useState(assets[0].id);

  const selected = useMemo(() => assets.find((asset) => asset.id === selectedId) ?? assets[0], [selectedId]);
  const canMatch = selected.bestBid >= selected.ask;

  return (
    <section id="market" className="relative py-24 sm:py-32 px-4">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-4">公开叫价市场</h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            卖家挂出技能资产和要价，买家提交出价。出价达到要价时自动进入托管成交与代码包交付流程。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm"
          >
            <h3 className="text-xl text-white mb-6 flex items-center gap-2">
              <Package className="w-5 h-5 text-orange-400" />
              市场资产池
            </h3>

            <div className="space-y-3">
              {assets.map((asset) => {
                const isActive = asset.id === selected.id;
                return (
                  <button
                    type="button"
                    key={asset.id}
                    onClick={() => setSelectedId(asset.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                      isActive
                        ? 'border-orange-400/60 bg-orange-500/10'
                        : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-white font-medium">{asset.name}</span>
                      <span className="text-xs text-white/45">{asset.version}</span>
                    </div>
                    <div className="text-sm text-white/55 mb-2">卖家: {asset.seller}</div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-white/80">要价: ${asset.ask}</span>
                      <span className="text-green-300">最高买价: ${asset.bestBid}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm"
          >
            <h3 className="text-xl text-white mb-6 flex items-center gap-2">
              <Wallet className="w-5 h-5 text-orange-400" />
              挂单详情与撮合状态
            </h3>

            <div className="mb-5">
              <div className="text-white text-lg font-medium">{selected.name}</div>
              <div className="text-white/55 text-sm mt-1">资产ID: {selected.id}</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              <div className="rounded-lg bg-white/[0.03] border border-white/10 p-4">
                <div className="text-white/50 text-xs mb-2 flex items-center gap-1">
                  <ArrowUpCircle className="w-4 h-4 text-orange-400" />
                  卖家要价
                </div>
                <div className="text-2xl text-white font-display">${selected.ask}</div>
              </div>
              <div className="rounded-lg bg-white/[0.03] border border-white/10 p-4">
                <div className="text-white/50 text-xs mb-2 flex items-center gap-1">
                  <ArrowDownCircle className="w-4 h-4 text-green-300" />
                  买家最高出价
                </div>
                <div className="text-2xl text-green-300 font-display">${selected.bestBid}</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {selected.tokens.map((token) => (
                <span
                  key={token}
                  className="text-xs text-white/70 px-3 py-1 rounded-full border border-white/20 bg-white/[0.03]"
                >
                  {token}
                </span>
              ))}
            </div>

            <div
              className={`rounded-xl border p-4 mb-6 ${
                canMatch ? 'border-green-400/40 bg-green-500/10' : 'border-yellow-400/40 bg-yellow-500/10'
              }`}
            >
              <div className="text-sm text-white/90 flex items-center gap-2">
                <CheckCircle2 className={`w-5 h-5 ${canMatch ? 'text-green-300' : 'text-yellow-300'}`} />
                {canMatch
                  ? '价格已匹配，自动进入托管结算与加密代码包交付。'
                  : '尚未匹配，继续等待买家提价或卖家调价。'}
              </div>
            </div>

            <button
              type="button"
              className={`w-full px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                canMatch
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white'
                  : 'bg-white/10 text-white/40 cursor-not-allowed'
              }`}
              disabled={!canMatch}
            >
              <span className="inline-flex items-center gap-2">
                <Download className="w-4 h-4" />
                成交后触发 Agent 下载增强包
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

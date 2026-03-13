import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, FileCheck2, GanttChartSquare, Lock, ShieldAlert, WalletCards } from 'lucide-react';

const flowSteps = [
  {
    title: '1. 上架资产',
    detail: '卖家提交技能包元数据、版本说明、依赖清单与验签公钥。',
    icon: FileCheck2,
  },
  {
    title: '2. 公开叫价',
    detail: '买卖双方在订单簿持续报单，平台实时显示最优买卖价。',
    icon: WalletCards,
  },
  {
    title: '3. 托管成交',
    detail: '满足成交条件后自动锁定资金并生成交易会话。',
    icon: Lock,
  },
  {
    title: '4. Agent 下载',
    detail: '买方 Agent 拉取加密包并验证签名，安装后回执结果。',
    icon: BadgeCheck,
  },
];

const governance = [
  {
    icon: ShieldAlert,
    title: '包级安全扫描',
    desc: '静态恶意代码扫描 + 依赖漏洞扫描，未通过不可上架。',
  },
  {
    icon: GanttChartSquare,
    title: '分阶段结算',
    desc: '支持“下载成功/运行稳定/效果验收”三段式释放资金。',
  },
  {
    icon: ArrowRight,
    title: '可回滚升级',
    desc: '增强包安装失败时自动回滚旧版本并出具审计记录。',
  },
];

export function Cases() {
  return (
    <section id="flow" className="relative py-24 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-4">交易与交付流程</h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            不是“买下载链接”，而是“买可验证能力升级”：报价、成交、交付、回执全链路闭环。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mb-16">
          {flowSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="p-5 rounded-xl border border-white/10 bg-white/[0.03]"
            >
              <step.icon className="w-6 h-6 text-orange-400 mb-3" />
              <div className="text-white font-medium mb-2">{step.title}</div>
              <div className="text-sm text-white/55 leading-relaxed">{step.detail}</div>
            </motion.div>
          ))}
        </div>

        <div id="governance" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {governance.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.08 }}
              className="group relative p-6 rounded-2xl border border-white/10
                         bg-gradient-to-b from-white/[0.06] to-white/[0.02]
                         backdrop-blur-sm overflow-hidden hover:border-white/20 transition-all duration-500"
            >
              <item.icon className="w-6 h-6 text-orange-400 mb-4" />
              <h3 className="text-white font-medium mb-2">{item.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100
                            transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 100%, rgba(255, 107, 53, 0.1), transparent 60%)',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

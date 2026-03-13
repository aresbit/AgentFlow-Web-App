import { motion } from 'framer-motion';
import {
  Layers,
  ShieldCheck,
  Scale,
  KeyRound,
  ReceiptText,
  Download,
  Landmark,
  Cpu,
} from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: '资产标准化',
    description: '技能描述、版本、依赖、验证报告统一成可交易资产单元。',
  },
  {
    icon: Scale,
    title: '公开叫价簿',
    description: '买卖双方公开报价、时间戳与最小成交条件，形成透明市场。',
  },
  {
    icon: Landmark,
    title: '托管与结算',
    description: '成交后触发托管流程，支持分阶段放款与争议回滚。',
  },
  {
    icon: Download,
    title: '自动交付',
    description: '买方 Agent 拉取加密代码包，自动完成校验、安装与能力增强。',
  },
  {
    icon: ShieldCheck,
    title: '供应链风控',
    description: '签名校验、SBOM、沙箱执行、行为审计，降低恶意包风险。',
  },
  {
    icon: KeyRound,
    title: '权限与授权',
    description: '按组织、角色、设备维度控制下载和运行授权。',
  },
  {
    icon: ReceiptText,
    title: '可追溯审计',
    description: '所有挂单、议价、成交与下载行为都可追踪可对账。',
  },
  {
    icon: Cpu,
    title: 'Agent 自增益',
    description: '成交完成后通过升级脚本把新技能注入既有智能体能力栈。',
  },
];

export function Features() {
  return (
    <section id="engine" className="relative py-24 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-4">
            证券化交易引擎
          </h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            从“技能展示”升级为“可定价、可成交、可交付、可审计”的完整资产化闭环。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.06, ease: 'easeOut' }}
              className="group relative p-6 rounded-xl border border-white/10 bg-white/[0.02]
                         backdrop-blur-sm transition-all duration-300
                         hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/10
                              flex items-center justify-center mb-4
                              group-hover:from-orange-500/30 group-hover:to-orange-600/20
                              transition-all duration-300">
                <feature.icon className="w-6 h-6 text-orange-400" />
              </div>

              <h3 className="text-white text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>

              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
                              transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 0%, rgba(255, 107, 53, 0.1), transparent 70%)',
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

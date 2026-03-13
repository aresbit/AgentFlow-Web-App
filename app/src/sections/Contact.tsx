import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, Rocket, SquareTerminal } from 'lucide-react';
import { useState } from 'react';

const milestones = [
  { phase: 'M1', title: '资产标准定义', desc: '统一技能包元数据、签名策略、版本规则。' },
  { phase: 'M2', title: '订单簿与撮合', desc: '支持公开挂单、竞价、成交回执和手续费结算。' },
  { phase: 'M3', title: '自动交付网关', desc: '成交后 Agent 拉取包、验签、安装、回传结果。' },
  { phase: 'M4', title: '风控与治理', desc: '争议仲裁、风控评分、卖家信誉和链路审计。' },
];

export function Contact() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 2500);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[780px] h-[780px] bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-4">接入计划与路线图</h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            可先从静态展示站升级到交易 MVP，再迭代到真实托管结算和自动化代码交付网络。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-7 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm"
          >
            <h3 className="text-xl text-white mb-5 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-orange-400" />
              分阶段交付
            </h3>

            <div className="space-y-3">
              {milestones.map((item) => (
                <div key={item.phase} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-orange-300 text-xs mb-1">{item.phase}</div>
                  <div className="text-white font-medium mb-1">{item.title}</div>
                  <div className="text-white/55 text-sm">{item.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="p-7 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm"
          >
            <h3 className="text-xl text-white mb-5 flex items-center gap-2">
              <SquareTerminal className="w-5 h-5 text-orange-400" />
              预约接入咨询
            </h3>

            <form onSubmit={handleSubmit} className="mb-8">
              <label className="block text-white/60 text-sm mb-3">输入你的工作邮箱</label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30
                            focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.08] transition-all duration-300"
                />
                <button
                  type="submit"
                  disabled={submitted}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600
                             text-white text-sm font-medium flex items-center justify-center gap-2
                             hover:from-orange-400 hover:to-orange-500 transition-all duration-300
                             disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitted ? '已记录' : '预约'}
                  {!submitted && <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </form>

            <div className="space-y-4 border-t border-white/10 pt-6">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-orange-400" />
                <span className="text-white/65">bd@agentflow.exchange</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-orange-400" />
                <span className="text-white/65">+86 400-000-2048</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

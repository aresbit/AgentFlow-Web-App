import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const metrics = [
  { label: '可交易技能资产', value: '128+' },
  { label: '日均撮合请求', value: '3.6K' },
  { label: '平均成交周期', value: '18 min' },
];

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const planetSrc = `${import.meta.env.BASE_URL}planet.jpg`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      <div className="relative z-10 text-center max-w-6xl mx-auto pt-28 sm:pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight"
        >
          AgentFlow 官网
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="text-lg sm:text-xl md:text-2xl text-white/90 mb-5 font-light"
        >
          智能代理资产证券化交易平台
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
          className="text-sm sm:text-base text-white/65 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          卖家公开挂出技能包与 Agent 代码能力，买家公开叫价；当价格与条款达成后，
          由平台触发安全交付链路，让买家 Agent 自动下载增强包并完成能力升级。
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10"
        >
          {[
            { label: '进入公开市场', href: '#market' },
            { label: '查看撮合机制', href: '#flow' },
            { label: '风控与治理', href: '#governance' },
            { label: '预约集成咨询', href: '#contact' },
          ].map((button, index) => (
            <motion.a
              key={button.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 + index * 0.08, ease: 'easeOut' }}
              href={button.href}
              className="group relative px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-white/20
                         bg-white/5 backdrop-blur-sm text-white text-sm sm:text-base
                         transition-all duration-300 ease-out
                         hover:bg-white/15 hover:border-white/50 hover:scale-[1.02]
                         btn-glow"
            >
              <span className="relative z-10">{button.label}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-white/10 bg-white/[0.04] px-6 py-4 text-left"
            >
              <div className="text-2xl sm:text-3xl text-orange-400 font-display">{metric.value}</div>
              <div className="text-white/55 text-sm mt-1">{metric.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, delay: 0.4, ease: 'easeOut' }}
        className="absolute bottom-[-48px] sm:bottom-[-28px] left-1/2 -translate-x-1/2 w-[120vw] sm:w-full max-w-5xl pointer-events-none opacity-95"
        style={{
          transform: `translate(-50%, ${mousePosition.y}px)`,
        }}
      >
        <div className="relative">
          <div
            className="absolute inset-0 planet-glow rounded-full"
            style={{
              transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.3}px)`,
            }}
          />
          <img
            src={planetSrc}
            alt="Agent token globe"
            className="w-full h-auto object-cover drop-shadow-[0_0_80px_rgba(255,107,53,0.35)]"
          />
        </div>
      </motion.div>
    </section>
  );
}

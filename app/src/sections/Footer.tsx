import { Github, Linkedin, Twitter, Workflow } from 'lucide-react';

const footerLinks = {
  product: [
    { label: '交易引擎', href: '#engine' },
    { label: '公开市场', href: '#market' },
    { label: '交付流程', href: '#flow' },
    { label: '风控治理', href: '#governance' },
  ],
  build: [
    { label: '资产标准', href: '#contact' },
    { label: '撮合策略', href: '#contact' },
    { label: '托管方案', href: '#contact' },
    { label: '升级网关', href: '#contact' },
  ],
  legal: [
    { label: '隐私政策', href: '#' },
    { label: '服务条款', href: '#' },
    { label: '风险披露', href: '#' },
  ],
};

const socialLinks = [
  { icon: Github, href: 'https://github.com/aresbit/AgentFlow-Web-App', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="relative py-16 sm:py-20 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <Workflow className="w-5 h-5 text-orange-400" />
              </div>
              <span className="text-white text-lg font-medium">AgentFlow Exchange</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-sm">
              让技能、Agent 能力与代码包从“交付服务”升级为“可公开定价并自动结算交付的数字资产”。
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center
                             text-white/40 hover:text-white hover:bg-white/10
                             transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium text-sm mb-4">产品</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/40 text-sm hover:text-white transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium text-sm mb-4">建设模块</h4>
            <ul className="space-y-3">
              {footerLinks.build.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/40 text-sm hover:text-white transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium text-sm mb-4">法律</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/40 text-sm hover:text-white transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">© 2026 AgentFlow Exchange. All rights reserved.</p>
          <p className="text-white/30 text-sm">Built for agent asset securitization marketplace.</p>
        </div>
      </div>
    </footer>
  );
}

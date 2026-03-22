'use client';

import { useState } from 'react';
import {
  ExternalLink,
  CreditCard,
  Smartphone,
  Receipt,
  Shield,
  Lock,
} from 'lucide-react';

export default function Component() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const links = [
    {
      name: 'الدفع السريع',
      description: 'دفع آمن وسريع لجميع الخدمات',
      href: 'https://shorturl.at/UoXK7',
      color: 'from-blue-600 to-sky-500',
      hoverColor: 'from-blue-700 to-cyan-600',
      icon: CreditCard,
    },
    {
      name: 'شحن رصيد eeZee',
      description: 'شحن فوري لرصيد eeZee',
      href: 'https://shorturl.at/UoXK7',
      color: 'from-sky-500 to-indigo-500',
      hoverColor: 'from-blue-700 to-indigo-700',
      icon: Smartphone,
    },
    {
      name: 'دفع الفواتير',
      description: 'ادفع فواتيرك بسهولة وأمان',
      href: 'https://shorturl.at/UoXK7',
      color: 'from-cyan-500 to-blue-600',
      hoverColor: 'from-blue-700 to-sky-700',
      icon: Receipt,
    },
  ];

  const rules = [
    {
      title: 'الخصوصية',
      text: 'نحن نحترم خصوصيتك. لا يتم مشاركة بياناتك الشخصية مع أي طرف ثالث إلا عند الحاجة لإتمام الخدمة بشكل آمن.',
      icon: Lock,
    },
    {
      title: 'الأمان',
      text: 'جميع عمليات الدفع والروابط تتم عبر قنوات آمنة ومشفرة. يرجى التأكد من عدم مشاركة رمز التحقق أو بيانات بطاقتك مع أي شخص.',
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center p-2 sm:p-4 lg:p-6" dir="rtl">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-base sm:text-lg lg:text-2xl font-semibold text-blue-100 max-w-xl mx-auto leading-relaxed px-4">
            اشحن خطك وتصفح آخر العروض
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 lg:mb-16">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <div
                key={link.name}
                className="group animate-fade-in-up w-full"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <a
                  href={link.href}
                  className="block relative w-full"
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <div
                    className={`
                      relative bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-6 shadow-lg
                      border border-blue-100/60 transition-all duration-500 ease-out w-full
                      hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2
                      ${hoveredLink === link.name ? 'shadow-2xl -translate-y-1 sm:-translate-y-2' : ''}
                    `}
                  >
                    {/* Background Gradient Overlay */}
                    <div
                      className={`
                        absolute inset-0 rounded-2xl sm:rounded-3xl transition-opacity duration-500
                        bg-gradient-to-br ${link.hoverColor}
                        ${hoveredLink === link.name ? 'opacity-10' : 'opacity-0'}
                      `}
                    />

                    {/* Icon */}
                    <div
                      className={`
                        relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full mb-3 sm:mb-4 lg:mb-6
                        flex items-center justify-center bg-gradient-to-br ${link.color} shadow-lg
                        transition-all duration-500
                        ${hoveredLink === link.name ? 'scale-110 shadow-xl' : ''}
                      `}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
                        <ExternalLink
                          className={`
                            w-4 h-4 sm:w-5 sm:h-5 text-slate-400 transition-all duration-300 flex-shrink-0
                            ${hoveredLink === link.name ? 'text-blue-700 rotate-45 scale-110' : ''}
                          `}
                        />
                        <div className="flex-1 min-w-0 text-right">
                          <h3 className="text-sm sm:text-base lg:text-lg font-bold text-slate-800 mb-1 sm:mb-2 truncate">
                            {link.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                            {link.description}
                          </p>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-0.5 sm:h-1 bg-slate-100 rounded-full overflow-hidden mb-2 sm:mb-4">
                        <div
                          className={`
                            h-full rounded-full transition-all duration-700 ease-out
                            bg-gradient-to-r ${link.hoverColor}
                            ${hoveredLink === link.name ? 'w-full' : 'w-0'}
                          `}
                        />
                      </div>

                      {/* Call to Action */}
                      <div className="hidden sm:block">
                        <div
                          className={`
                            inline-flex items-center text-xs sm:text-sm font-medium transition-all duration-300 gap-2
                            ${hoveredLink === link.name ? 'text-blue-700' : 'text-slate-500'}
                          `}
                        >
                          <div
                            className={`
                              w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 flex items-center justify-center
                              ${hoveredLink === link.name ? 'bg-cyan-200' : 'bg-slate-100'}
                            `}
                          >
                            <div
                              className={`
                                w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300
                                ${hoveredLink === link.name ? 'bg-blue-600' : 'bg-slate-300'}
                              `}
                            />
                          </div>
                          <span>اضغط للاستكشاف</span>
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl pointer-events-none">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`
                            absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-1000
                            ${hoveredLink === link.name ? 'opacity-60 animate-float' : 'opacity-0'}
                          `}
                          style={{
                            left: `${20 + i * 25}%`,
                            top: `${20 + i * 15}%`,
                            animationDelay: `${i * 200}ms`,
                            background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>

        {/* Privacy & Security Rules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 sm:mb-12">
          {rules.map((rule, index) => {
            const RuleIcon = rule.icon;
            return (
              <div
                key={rule.title}
                className="animate-fade-in-up rounded-3xl bg-white/95 backdrop-blur-sm border border-blue-100/60 shadow-lg p-5 sm:p-6"
                style={{ animationDelay: `${450 + index * 150}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-md flex-shrink-0">
                    <RuleIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-right">
                    <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-2">{rule.title}</h4>
                    <p className="text-sm text-slate-600 leading-7">{rule.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center px-4">
          <div className="inline-flex items-center gap-1 text-slate-400 mb-2 sm:mb-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-300 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              />
            ))}
          </div>
          <p className="text-xs sm:text-sm text-blue-200">خدمة آمنة وموثوقة • متاحة 24/7</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(180deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (max-width: 640px) {
          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out forwards;
          }
        }
      `}</style>
    </div>
  );
}

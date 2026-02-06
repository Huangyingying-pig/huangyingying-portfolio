import { useEffect, useRef } from 'react';
import { TrendingUp, Users, Zap, Target } from 'lucide-react';

interface ExperienceData {
  company: string;
  role: string;
  period: string;
  description: string;
  metrics: { label: string; value: string; icon: React.ReactNode }[];
  highlights: string[];
}

const experiences: ExperienceData[] = [
  {
    company: '字节跳动',
    role: '本地生活-到店业务 营销策划',
    period: '2023.11 - 2024.04',
    description: '聚焦本地生活到店业务GMV增长与品牌渗透，核心考核热点UV达成和GMV达成。',
    metrics: [
      { label: '内容热度', value: '4.2亿+', icon: <TrendingUp className="w-4 h-4" /> },
      { label: '联动商户', value: '1814家', icon: <Users className="w-4 h-4" /> },
      { label: '传播声量', value: '3000w+', icon: <Zap className="w-4 h-4" /> },
      { label: '券动GMV', value: '1081w', icon: <Target className="w-4 h-4" /> },
    ],
    highlights: [
      '搭建热点运营SOP，打造"公主请喝茶"等生服热点',
      '策划年夜饭整活大赛，撬动8.2万投稿，曝光3000万+',
      '周三特价栏目【工作餐】月度营销，头客增量目标达成率98%',
    ],
  },
  {
    company: '京东集团',
    role: '家电家居事业群 整合营销',
    period: '2025.06 - 2025.09',
    description: '负责冰洗厨卫品类内容营销与大促策划，核心KPI考核直播间GMV数据。',
    metrics: [
      { label: '直播间粉丝', value: '33w+', icon: <Users className="w-4 h-4" /> },
      { label: '日均GMV', value: '15w+', icon: <Target className="w-4 h-4" /> },
      { label: '618成交额', value: '6866w', icon: <TrendingUp className="w-4 h-4" /> },
      { label: '视频播放量', value: '2.5w+', icon: <Zap className="w-4 h-4" /> },
    ],
    highlights: [
      '搭建直播间五维四率数据监控体系，主推品成交占比40%+',
      '策划618、815周年庆等10+场品牌专场',
      '打造"总裁IP+采销短视频矩阵"1+N内容矩阵',
    ],
  },
  {
    company: '腾讯',
    role: '腾讯新闻 插件内容运营',
    period: '2024.11 - 2025.03',
    description: '负责微信生态下插件业务增长，通过内容优化提升用户点击转化与APP跳转率。',
    metrics: [
      { label: '日均拉动PV', value: '100w', icon: <TrendingUp className="w-4 h-4" /> },
      { label: '打开点击率', value: '15.5%', icon: <Target className="w-4 h-4" /> },
      { label: '地域覆盖', value: '31省', icon: <Users className="w-4 h-4" /> },
      { label: '号外UV', value: '500w', icon: <Zap className="w-4 h-4" /> },
    ],
    highlights: [
      '高拉起内容日新增供给从50条提升至100条',
      '号外批次一级页UV从450w提升至500w',
      '地域信号覆盖从22省市提升至31省',
    ],
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el, index) => {
      (el as HTMLElement).style.transitionDelay = `${index * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="w-full py-24 md:py-32 px-6 bg-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="scroll-reveal mb-16">
          <p className="text-sm font-medium text-blue-600 mb-3">CAREER & FRAMEWORK</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            实习经历
          </h2>
          <p className="text-gray-500 max-w-2xl">
            在字节、京东、腾讯的实习经历，让我在市场营销、内容运营、数据分析等领域积累了丰富经验
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.company} className="scroll-reveal">
              <div className="card-light card-hover p-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-semibold text-gray-900">{exp.company}</h3>
                      <span className="text-sm text-gray-400">{exp.period}</span>
                    </div>
                    <p className="text-blue-600 font-medium">{exp.role}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">{exp.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {exp.metrics.map((metric) => (
                    <div key={metric.label} className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-gray-400 mb-1">
                        {metric.icon}
                        <span className="text-xs">{metric.label}</span>
                      </div>
                      <p className="text-2xl font-bold text-blue-600">{metric.value}</p>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                      <p className="text-sm text-gray-600">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

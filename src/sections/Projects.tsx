import { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  metrics?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: '新周刊深度报道',
    description: '聚焦民生与文化选题的深度报道策划与写作，独立撰稿5+篇文章',
    tags: ['深度报道', '内容策划'],
    link: 'https://mp.weixin.qq.com/s/WRDCwdrT0oYzyuo6nGLsDQ',
    metrics: '8w+ 阅读',
  },
  {
    id: 2,
    title: '省台视频报道',
    description: '广东省广播电视台实习编导作品，策划"各国使节与二十四节气"主题系列视频',
    tags: ['视频编导', '国际传播'],
    link: 'https://m.itouchtv.cn/article/ce09c8185e64150cb0d464e72857ef89',
    metrics: '10w+ 播放',
  },
  {
    id: 3,
    title: '环球时报国际时评',
    description: '环球时报国际时评栏目撰稿，关注国际热点话题',
    tags: ['国际时评', '新闻写作'],
    link: 'https://weibo.com/1663072851/5221022384784153',
    metrics: '微博热搜第四',
  },
  {
    id: 4,
    title: '幸会中国编导纪录片',
    description: '短纪录片编导作品《幸会中国》系列，获第十五届北京国际电影节新闻类三等奖',
    tags: ['纪录片', '编导'],
    link: 'https://weibo.com/1974576991/5192593812226789',
    metrics: '北影节获奖',
  },
  {
    id: 5,
    title: '大广赛全国一等奖',
    description: '第15届全国大学生广告艺术大赛微电影广告板块一等奖作品',
    tags: ['微电影', '广告创意'],
    link: 'https://www.bilibili.com/video/BV17i4y1z7E3',
    metrics: '全国一等奖',
  },
  {
    id: 6,
    title: '自媒体账号运营',
    description: '小红书自媒体账号运营，分享生活与职场感悟',
    tags: ['自媒体', '内容运营'],
    link: 'https://www.xiaohongshu.com/user/profile/5b54063811be1012544945a4',
    metrics: '全平台粉丝3w+',
  },
];

const Projects = () => {
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
      (el as HTMLElement).style.transitionDelay = `${index * 0.08}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="w-full py-24 md:py-32 px-6 bg-gray-50"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="scroll-reveal mb-12">
          <p className="text-sm font-medium text-blue-600 mb-3">PROJECTS</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            项目作品
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="scroll-reveal block group"
            >
              <div className="card-light card-hover p-6 h-full">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    {/* Title row */}
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                    </div>

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tags & Metrics */}
                    <div className="flex flex-wrap items-center gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.metrics && (
                        <span className="px-2.5 py-1 text-xs bg-green-50 text-green-700 rounded-full font-medium">
                          {project.metrics}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

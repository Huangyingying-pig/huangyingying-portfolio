import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const About = () => {
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
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skills = [
    '整合营销',
    '内容运营',
    '热点策划',
    '数据分析',
    '直播运营',
    '视频编导',
  ];

  // 个人照片 - 演讲照片
  const photo = '/images/1.jpg';

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full py-24 md:py-32 px-6 bg-gray-50"
    >
      <div className="max-w-5xl mx-auto">
        <div className="scroll-reveal space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <p className="text-sm font-medium text-blue-600">INTRO</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              关于我
            </h2>
          </div>

          {/* Photo */}
          <div className="max-w-md">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src={photo}
                alt="黄莹莹"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-4 text-gray-600 leading-relaxed max-w-3xl">
            <p>
              中国传媒大学新闻与传播硕士，本科毕业于华南师范大学新闻学专业（GPA 4.01，排名 1/49）。
            </p>
            <p>
              拥有字节跳动、京东、腾讯等互联网大厂实习经历，深耕市场营销与内容运营领域。擅长整合营销、热点策划、直播运营，具备扎实的数据分析能力和敏锐的市场洞察力。
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm bg-blue-50 text-blue-700 rounded-full font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-wrap gap-6 pt-4">
            <a
              href="tel:19830432878"
              className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">19830432878</span>
            </a>
            <a
              href="mailto:19830432878@163.com"
              className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">19830432878@163.com</span>
            </a>
            <span className="flex items-center gap-2 text-gray-500">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">北京</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

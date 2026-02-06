import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  org: string;
  year: string;
  image: string;
  rotate: number;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: '新闻类三等奖',
    org: '第十五届北京国际电影节',
    year: '2025',
    image: '/images/北京国际电影节三等奖.jpg',
    rotate: 0,
  },
  {
    id: 2,
    title: '全国一等奖（微电影）',
    org: '第15届全国大学生广告艺术大赛',
    year: '2023',
    image: '/images/大广赛全国一等奖.jpeg',
    rotate: 0,
  },
  {
    id: 3,
    title: '广东省一等奖',
    org: '第十七届"挑战杯"',
    year: '2023',
    image: '/images/3.挑战杯省一等奖.png',
    rotate: -90,
  },
  {
    id: 4,
    title: '广东省广告优秀学子',
    org: '广东省广告协会',
    year: '2023',
    image: '/images/广东省广告优秀学子.jpg',
    rotate: 0,
  },
  {
    id: 5,
    title: '调研报告获采纳',
    org: '广州市委办公厅',
    year: '2023',
    image: '/images/调研报告受广东省社科联采纳jpg.jpg',
    rotate: 0,
  },
  {
    id: 6,
    title: '全国银奖',
    org: '中国国际大学生创新大赛',
    year: '2023',
    image: '/images/f3feee4c-29f0-4758-a653-c22982198b14.png',
    rotate: 0,
  },
];

const Certificates = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
      (el as HTMLElement).style.transitionDelay = `${index * 0.05}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  return (
    <>
      <section
        id="certificates"
        ref={sectionRef}
        className="w-full py-24 md:py-32 px-6 bg-white"
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="scroll-reveal mb-12">
            <p className="text-sm font-medium text-blue-600 mb-3">HONORS</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              荣誉证书
            </h2>
          </div>

          {/* Certificates Grid with Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <button
                key={cert.id}
                onClick={() => setSelectedImage(cert.image)}
                className="scroll-reveal text-left group"
              >
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 hover:-translate-y-1">
                  {/* Certificate Image */}
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      style={{ transform: cert.rotate !== 0 ? `rotate(${cert.rotate}deg) scale(1.3)` : undefined }}
                    />
                  </div>
                  
                  {/* Certificate Info */}
                  <div className="p-4">
                    <h3 className="text-gray-900 font-semibold text-sm mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-gray-500 text-xs">{cert.org}</p>
                    <p className="text-gray-400 text-xs mt-1">{cert.year}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          
          {/* Modal content */}
          <div className="relative z-10 max-w-4xl w-full">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="关闭"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Image */}
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="证书"
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certificates;

import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.classList.add('animate-fade-in-up');
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContent = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/hero头图.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 z-0 bg-white/85" />
      
      {/* Main content */}
      <div 
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto opacity-0"
        style={{ animationFillMode: 'forwards' }}
      >
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-sm text-blue-700 font-medium">求职中 · 春招 · 欢迎联系</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6">
          <span className="text-gray-900">Hi there，</span>
          <br />
          <span className="text-blue-600">我是黄莹莹。</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-4 max-w-2xl">
          很高兴认识你，期待我们一起探索内容与营销。
        </p>
        
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
          Last but not least，希望你有美好的一天。
        </p>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors duration-300 cursor-pointer"
        aria-label="向下滚动"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;

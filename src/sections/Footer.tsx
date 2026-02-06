import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
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
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © {currentYear} 黄莹莹
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

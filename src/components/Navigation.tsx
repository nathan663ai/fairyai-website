import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      // If on homepage, scroll directly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    } else {
      // If on another page, navigate to homepage first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300); // Increased timeout for more reliable scrolling
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Features', path: '/features' },
    { label: 'Safety', path: '/safety' },
    { label: 'Stories', path: '/stories' },
    { label: 'About', id: 'about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/images/splash-logo-transparent.png"
              alt="FairyAI Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              link.path ? (
                <Link
                  key={index}
                  to={link.path}
                  className="text-neutral-200 hover:text-soft-blue-300 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id!)}
                  className="text-neutral-200 hover:text-soft-blue-300 font-medium transition-colors"
                >
                  {link.label}
                </button>
              )
            ))}

            {/* Download App CTA */}
            <a
              href="/#download"
              className="bg-gradient-to-r from-soft-blue-500 to-soft-green-500 text-white px-5 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('download');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#download';
                }
              }}
            >
              Download App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-neutral-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-4 py-3 space-y-3">
            {/* Download App CTA - Top of mobile menu */}
            <a
              href="/#download"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                const element = document.getElementById('download');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#download';
                }
              }}
              className="block w-full text-center bg-gradient-to-r from-soft-blue-500 to-soft-green-500 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Download App
            </a>

            {navLinks.map((link, index) => (
              link.path ? (
                <Link
                  key={index}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-left px-3 py-2 text-neutral-200 hover:bg-slate-700 rounded-lg"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id!)}
                  className="block w-full text-left px-3 py-2 text-neutral-200 hover:bg-slate-700 rounded-lg"
                >
                  {link.label}
                </button>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

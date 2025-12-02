import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/sections/Footer';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import SafetyPage from './pages/SafetyPage';
import FeaturesPage from './pages/FeaturesPage';
import StoriesPage from './pages/StoriesPage';
import StoryDetailPage from './pages/StoryDetailPage';
import UserExampleStoryPage from './pages/UserExampleStoryPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import AccountDeletePage from './pages/AccountDeletePage';
import DeletePage from './pages/DeletePage';
import ContactPage from './pages/ContactPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [showCookieNotice, setShowCookieNotice] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setShowCookieNotice(true);
  }, []);

  const handleCookieChoice = (choice: 'accepted' | 'rejected') => {
    localStorage.setItem('cookie-consent', choice);
    setShowCookieNotice(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/stories/examples/:storyId" element={<UserExampleStoryPage />} />
          <Route path="/stories/:storyId" element={<StoryDetailPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/delete-account" element={<AccountDeletePage />} />
          <Route path="/delete" element={<DeletePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
      {showCookieNotice && (
        <div className="fixed bottom-0 left-0 right-0 bg-slate-900 text-white p-4 shadow-2xl z-50">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-center sm:text-left">
              We use cookies to improve your experience.{' '}
              <Link to="/privacy" className="underline hover:text-soft-blue-300">
                Learn more
              </Link>
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => handleCookieChoice('rejected')}
                className="px-5 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap border border-white/30 hover:bg-white/10"
              >
                Necessary Only
              </button>
              <button
                onClick={() => handleCookieChoice('accepted')}
                className="bg-soft-blue-500 hover:bg-soft-blue-600 px-5 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;

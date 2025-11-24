import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FAQAccordion from '../components/sections/FAQAccordion';
import { faqs } from '../data/faqs';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-soft-blue-50 via-white to-soft-green-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We're here to help. Whether you have questions, need support, or just want to say hello, we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Support Email */}
            <div className="bg-white border border-neutral-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-soft-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-soft-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-neutral-900 mb-2">General Support</h2>
              <p className="text-neutral-600 mb-4">
                Questions about the app, features, or how to use FairyAI?
              </p>
              <a
                href="mailto:support@fairyai.co.uk"
                className="text-soft-blue-600 hover:text-soft-blue-700 font-medium hover:underline"
              >
                support@fairyai.co.uk
              </a>
            </div>

            {/* Legal/Privacy Email */}
            <div className="bg-white border border-neutral-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-soft-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-soft-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-neutral-900 mb-2">Legal & Privacy</h2>
              <p className="text-neutral-600 mb-4">
                Data requests, privacy questions, or legal matters?
              </p>
              <a
                href="mailto:legal@fairyai.co.uk"
                className="text-soft-green-600 hover:text-soft-green-700 font-medium hover:underline"
              >
                legal@fairyai.co.uk
              </a>
            </div>
          </div>

          {/* Company Information */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">About Us</h2>
            <div className="space-y-4 text-neutral-700">
              <p>
                <strong className="text-neutral-900">Company:</strong> Rebel AI Ltd
              </p>
              <p>
                <strong className="text-neutral-900">Registration:</strong> Company Number SC839626 (Scotland, UK)
              </p>
              <p>
                <strong className="text-neutral-900">Location:</strong> Scotland, United Kingdom
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQAccordion
        faqs={faqs}
        title="Common Questions"
        subtitle="Find answers before you reach out, or email us if you need more help"
      />

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Links */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-neutral-900 mb-6">Looking for something specific?</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/privacy"
                className="inline-block bg-white border-2 border-neutral-300 hover:border-soft-blue-500 text-neutral-700 hover:text-soft-blue-600 font-medium px-6 py-3 rounded-lg transition-all"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="inline-block bg-white border-2 border-neutral-300 hover:border-soft-blue-500 text-neutral-700 hover:text-soft-blue-600 font-medium px-6 py-3 rounded-lg transition-all"
              >
                Terms of Service
              </Link>
              <Link
                to="/delete-account"
                className="inline-block bg-white border-2 border-neutral-300 hover:border-soft-blue-500 text-neutral-700 hover:text-soft-blue-600 font-medium px-6 py-3 rounded-lg transition-all"
              >
                Delete Account
              </Link>
            </div>
          </div>

          {/* Response Time Note */}
          <div className="mt-12 text-center">
            <p className="text-neutral-500 text-sm">
              We typically respond within 24-48 hours during business days. Thanks for your patience!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

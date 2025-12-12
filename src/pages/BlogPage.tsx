import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import DownloadButtons from '../components/ui/DownloadButtons';
import { getAllBlogPosts } from '../content/blog';

const BlogPage: React.FC = () => {
  const posts = getAllBlogPosts();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="pt-16 bg-white min-h-screen">
      <SEO
        title="Bedtime Story Tips & Parenting Ideas | FairyAI Blog"
        description="Helpful articles about bedtime routines, storytelling, and making bedtime magical for families."
        canonical="/blog"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-soft-blue-50 to-soft-green-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            The FairyAI Blog
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Tips, insights, and ideas for making bedtime magical.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group block bg-white rounded-xl border border-neutral-200 p-6 md:p-8 hover:shadow-lg hover:border-soft-blue-300 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <h2 className="font-display text-xl md:text-2xl font-bold text-neutral-900 mb-3 group-hover:text-soft-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-neutral-600 mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-neutral-500">
                      <span>{formatDate(post.date)}</span>
                      <span className="w-1 h-1 bg-neutral-400 rounded-full"></span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-soft-blue-600 font-medium group-hover:text-soft-blue-700">
                    <span className="hidden md:inline">Read article</span>
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-600">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
            Ready to Create Magical Bedtime Stories?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Download FairyAI and start your free trial today.
          </p>
          <DownloadButtons variant="gradient" />
        </div>
      </section>
    </div>
  );
};

export default BlogPage;

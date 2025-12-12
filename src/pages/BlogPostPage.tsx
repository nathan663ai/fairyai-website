import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';
import DownloadButtons from '../components/ui/DownloadButtons';
import { getBlogPost } from '../content/blog';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPost(slug || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  // Parse markdown-like content to HTML
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let inList = false;
    let listItems: string[] = [];
    let listType: 'ul' | 'ol' = 'ul';

    const flushList = () => {
      if (listItems.length > 0) {
        const ListTag = listType;
        elements.push(
          <ListTag key={elements.length} className={listType === 'ul' ? 'list-disc ml-6 space-y-2 text-neutral-700 mb-6' : 'list-decimal ml-6 space-y-2 text-neutral-700 mb-6'}>
            {listItems.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: parseInline(item) }} />
            ))}
          </ListTag>
        );
        listItems = [];
        inList = false;
      }
    };

    const parseInline = (text: string): string => {
      // Bold
      text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      // Italic
      text = text.replace(/\*(.+?)\*/g, '<em>$1</em>');
      // Links
      text = text.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-soft-blue-600 hover:underline">$1</a>');
      return text;
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Empty line
      if (!trimmedLine) {
        flushList();
        return;
      }

      // H2
      if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="font-display text-2xl font-bold text-neutral-900 mt-10 mb-4">
            {trimmedLine.slice(3)}
          </h2>
        );
        return;
      }

      // H3
      if (trimmedLine.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="font-display text-xl font-bold text-neutral-900 mt-8 mb-3">
            {trimmedLine.slice(4)}
          </h3>
        );
        return;
      }

      // Horizontal rule
      if (trimmedLine === '---') {
        flushList();
        elements.push(<hr key={index} className="my-8 border-neutral-200" />);
        return;
      }

      // Unordered list item
      if (trimmedLine.startsWith('- ')) {
        if (!inList || listType !== 'ul') {
          flushList();
          inList = true;
          listType = 'ul';
        }
        listItems.push(trimmedLine.slice(2));
        return;
      }

      // Ordered list item
      if (/^\d+\.\s/.test(trimmedLine)) {
        if (!inList || listType !== 'ol') {
          flushList();
          inList = true;
          listType = 'ol';
        }
        listItems.push(trimmedLine.replace(/^\d+\.\s/, ''));
        return;
      }

      // Regular paragraph
      flushList();
      elements.push(
        <p
          key={index}
          className="text-neutral-700 leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: parseInline(trimmedLine) }}
        />
      );
    });

    flushList();
    return elements;
  };

  // Article schema for SEO
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'FairyAI'
    },
    publisher: {
      '@type': 'Organization',
      name: 'FairyAI',
      logo: {
        '@type': 'ImageObject',
        url: 'https://fairyai.co.uk/images/splash-logo-transparent.png'
      }
    }
  };

  return (
    <div className="pt-16 bg-white min-h-screen">
      <SEO
        title={`${post.title} | FairyAI Blog`}
        description={post.description}
        canonical={`/blog/${post.slug}`}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      {/* Article Header */}
      <section className="bg-gradient-to-br from-soft-blue-50 to-soft-green-50 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-soft-blue-600 hover:text-soft-blue-700 font-medium mb-6 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-neutral-600">
            <span>{formatDate(post.date)}</span>
            <span className="w-1 h-1 bg-neutral-400 rounded-full"></span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {renderContent(post.content)}
          </div>
        </div>
      </article>

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

export default BlogPostPage;

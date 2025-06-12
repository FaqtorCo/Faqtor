/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '../parts/Header';
import blogsData from '../json/blogs.json';
import Footer from 'parts/Footer';

function BlogPost() {
  const { slug } = useParams(); // Get the slug from URL
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the blog post by slug
    const foundBlog = blogsData.blogs.find(b => b.slug === slug);
    
    if (foundBlog) {
      setBlog(foundBlog);
      
      // Find related blogs (same category, excluding current blog)
      const related = blogsData.blogs
        .filter(b => b.category === foundBlog.category && b.id !== foundBlog.id)
        .slice(0, 3);
      setRelatedBlogs(related);
    }
    
    setLoading(false);
  }, [slug]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const renderContent = (content) => {
    if (!content) return null;

    return (
      <div className="prose prose-lg max-w-none">
        {/* Introduction */}
        {content.introduction && (
          <div className="mb-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              {content.introduction}
            </p>
          </div>
        )}

        {/* Content Sections */}
        {content.sections && content.sections.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-3xl font-bold text-[#DAF7A6] mb-6">
              {section.heading}
            </h2>
            
            <div className="text-gray-300 leading-relaxed mb-6">
              {section.content}
            </div>

            {/* Section Image */}
            {section.image && (
              <div className="my-8">
                <img 
                  src={section.image} 
                  alt={section.imageAlt || section.heading}
                  className="w-full rounded-lg shadow-lg"
                />
                {section.imageAlt && (
                  <p className="text-sm text-gray-500 mt-2 text-center italic">
                    {section.imageAlt}
                  </p>
                )}
              </div>
            )}

            {/* Bullet Points */}
            {section.bulletPoints && (
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
                {section.bulletPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}

            {/* Quote */}
            {section.quote && (
              <blockquote className="border-l-4 border-[#DAF7A6] pl-6 my-8 bg-gray-900 p-6 rounded-r-lg">
                <p className="text-xl italic text-gray-200 mb-2">
                  "{section.quote.text}"
                </p>
                <cite className="text-[#DAF7A6] font-medium">
                  — {section.quote.author}
                </cite>
              </blockquote>
            )}

            {/* Code Example */}
            {section.codeExample && (
              <div className="my-8">
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-[#DAF7A6] font-medium uppercase tracking-wider">
                      {section.codeExample.language}
                    </span>
                  </div>
                  <pre className="text-gray-300 overflow-x-auto">
                    <code>{section.codeExample.code}</code>
                  </pre>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Conclusion */}
        {content.conclusion && (
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#DAF7A6] mb-6">Conclusion</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {content.conclusion}
            </p>
          </div>
        )}

        {/* Call to Action */}
        {content.callToAction && (
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 text-center">
            <h3 className="text-2xl font-bold text-[#DAF7A6] mb-4">
              {content.callToAction.text}
            </h3>
            <a 
              href={content.callToAction.buttonLink}
              className="inline-block px-8 py-3 bg-[#f2ffd9] text-black rounded-full border-2 border-[#DAF7A6] hover:bg-[#C8E6A0] hover:border-[#C8E6A0] transition-all duration-200 font-medium transform hover:scale-105"
            >
              {content.callToAction.buttonText}
            </a>
          </div>
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="bg-black min-h-screen text-[#DAF7A6] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#DAF7A6] mx-auto mb-4"></div>
          <p className="text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="bg-black min-h-screen text-[#DAF7A6]">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/blogs"
            className="inline-block px-6 py-3 bg-[#f2ffd9] text-black rounded-full border-2 border-[#DAF7A6] hover:bg-[#C8E6A0] hover:border-[#C8E6A0] transition-all duration-200 font-medium"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      
      <article className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <button 
            onClick={() => navigate('/blogs')}
            className="flex items-center text-[#DAF7A6] hover:underline transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Blogs
          </button>
        </div>

        {/* Blog Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-4 mb-4">
            <span className="px-3 py-1 bg-[#DAF7A6] text-black text-sm font-medium rounded-full uppercase tracking-wider">
              {blog.category}
            </span>
            {blog.featured && (
              <span className="px-3 py-1 bg-yellow-500 text-black text-sm font-medium rounded-full">
                Featured
              </span>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-[#DAF7A6] mb-6 leading-tight">
            {blog.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
      
            <span>•</span>
            <time>{formatDate(blog.publishDate)}</time>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>

          {/* Featured Image */}
          {blog.featuredImage && (
            <div className="mb-12">
              <img 
                src={blog.featuredImage} 
                alt={blog.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}
        </header>

        {/* Blog Content */}
        <div className="max-w-4xl mx-auto">
          {renderContent(blog.content)}
        </div>

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-gray-800">
            <h3 className="text-lg font-semibold text-[#DAF7A6] mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <div className="max-w-4xl mx-auto mt-16">
            <h3 className="text-2xl font-bold text-[#DAF7A6] mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <Link 
                  key={relatedBlog.id}
                  to={`/blogs/${relatedBlog.slug}`}
                  className="block bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-[#DAF7A6] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-40 bg-gray-800 relative overflow-hidden">
                    {relatedBlog.featuredImage ? (
                      <img 
                        src={relatedBlog.featuredImage} 
                        alt={relatedBlog.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-[#DAF7A6] bg-opacity-20"></div>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-[#DAF7A6] uppercase tracking-wider mb-2">
                      {relatedBlog.category}
                    </p>
                    <h4 className="font-semibold text-white mb-2 line-clamp-2">
                      {relatedBlog.title}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {formatDate(relatedBlog.publishDate)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
      <Footer /> {/* Add Footer component */}



    </div>
  );
}

export default BlogPost;
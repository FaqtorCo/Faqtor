/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../parts/Header';
import blogsData from '../json/blogs.json'; // Import the JSON data

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    // Load blogs data
    setBlogs(blogsData.blogs);
    setCategories(['All', ...blogsData.categories.map(cat => cat.name)]);
    setFilteredBlogs(blogsData.blogs);
  }, []);

  useEffect(() => {
    // Filter blogs based on selected category
    if (selectedCategory === 'All') {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter(blog => blog.category === selectedCategory));
    }
  }, [selectedCategory, blogs]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Development':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#DAF7A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'Strategy':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#DAF7A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        );
      case 'Innovation':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#DAF7A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#DAF7A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
    }
  };

  return (
    <div className="blogs-page bg-black min-h-screen text-[#DAF7A6]">
      <Header />
      
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h3 className="text-5xl md:text-5xl font-bold mb-6 text-[#DAF7A6]">Our Blogs</h3>
     
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full border-2 transition-all duration-200 font-medium ${
                selectedCategory === category
                  ? 'bg-[#DAF7A6] text-black border-[#DAF7A6]'
                  : 'bg-transparent text-[#DAF7A6] border-[#DAF7A6] hover:bg-[#DAF7A6] hover:text-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <article 
              key={blog.id} 
              className="bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 border border-gray-800 hover:border-[#DAF7A6]"
            >
              <div className="h-52 bg-gray-800 relative overflow-hidden">
                {blog.featuredImage ? (
                  <img 
                    src={blog.featuredImage} 
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                {/* Fallback placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#DAF7A6] bg-opacity-20 flex items-center justify-center">
                    {getCategoryIcon(blog.category)}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-[#DAF7A6] uppercase tracking-wider">
                    {blog.category}
                  </p>
                  {blog.featured && (
                    <span className="bg-[#DAF7A6] text-black text-xs px-2 py-1 rounded-full font-medium">
                      Featured
                    </span>
                  )}
                </div>
                
                <h2 className="text-xl font-bold mb-3 text-white line-clamp-2">
                  {blog.title}
                </h2>
                
                <p className="text-gray-400 mb-5 line-clamp-3">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-500">{formatDate(blog.publishDate)}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-500">{blog.readTime}</span>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center justify-between">
         
                  
                  <Link 
                    to={`/blogs/${blog.slug}`}
                    className="text-[#DAF7A6] font-medium group flex items-center hover:underline"
                  >
                    Read More 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No blogs found message */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No blogs found for the selected category.</p>
          </div>
        )}

        {/* Subscribe Section */}
        <div className="mt-20 py-12 px-6 bg-gray-900 rounded-xl border border-gray-800">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#DAF7A6]">Stay Updated</h2>
            <p className="text-gray-300 mb-8">Subscribe to our newsletter to receive the latest insights and updates.</p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DAF7A6] text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-[#f2ffd9] text-black rounded-md border-2 border-[#DAF7A6] hover:bg-[#C8E6A0] hover:border-[#C8E6A0] transition-all duration-200 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
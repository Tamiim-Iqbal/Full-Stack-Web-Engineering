import React from 'react';

const blogsData = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    description:
      "Learn the basics of Next.js and understand how to build modern web applications with React.",
    author: "Tamim Iqbal",
    category: "Next.js",
    image: "/images/nextjs-blog.jpg",
    createdAt: "2026-09-10",
  },
  {
    id: 2,
    title: "JavaScript Array Methods You Should Know",
    slug: "javascript-array-methods-you-should-know",
    description:
      "Explore the most useful JavaScript array methods and learn how to use them effectively in real-world projects.",
    author: "Tamim Iqbal",
    category: "JavaScript",
    image: "/images/javascript-blog.jpg",
    createdAt: "2026-09-11",
  },
  {
    id: 3,
    title: "Understanding React Components",
    slug: "understanding-react-components",
    description:
      "A beginner-friendly guide to React components, props, state, and reusable UI development.",
    author: "Tamim Iqbal",
    category: "React",
    image: "/images/react-blog.jpg",
    createdAt: "2026-09-12",
  },
  {
    id: 4,
    title: "Responsive Web Design with Tailwind CSS",
    slug: "responsive-web-design-with-tailwind-css",
    description:
      "Learn how to create responsive and modern interfaces quickly using Tailwind CSS utility classes.",
    author: "Tamim Iqbal",
    category: "Tailwind CSS",
    image: "/images/tailwind-blog.jpg",
    createdAt: "2026-09-13",
  },
  {
    id: 5,
    title: "REST API Basics with Node.js and Express",
    slug: "rest-api-basics-with-nodejs-express",
    description:
      "Understand how REST APIs work and learn how to create simple API endpoints using Node.js and Express.",
    author: "Tamim Iqbal",
    category: "Node.js",
    image: "/images/nodejs-blog.jpg",
    createdAt: "2026-09-14",
  },
];

const BlogDetailPage = async ({ params  }) => {

    const {blogId} = await params;
    const blog = blogsData.find(blog => blog.id === parseInt    (blogId));

    return (
        <div>
            <h2>Blog Detail Page : {blogId}</h2>

            {
                blog && <div>
                    <h3>{blog.title}</h3>
                    <p>By {blog.author}</p>
                    <p>{blog.description}</p>
                </div>
            }
        </div>
    );
};

export default BlogDetailPage;
import Link from 'next/link';
import React from 'react';

const Blog = ({blog}) => {
     const {id, title} = blog;
     return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
               
                <div className="card-actions justify-end">
                    <Link href={`/blogs/${id}`}>
                        <button className="btn btn-primary">Show Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;
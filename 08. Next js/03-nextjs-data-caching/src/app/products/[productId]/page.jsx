import React from 'react';

export const generateStaticParams = async () => {
    const response = await fetch('http://localhost:5001/products');
    const products = await response.json();

    return products.map(product => ({ productId: product.id}));
    // return products.slice(0, 3).map(product => ({ productId: product.id}));
}
const ProductDetailPage = async ({ params }) => {

    const { productId } = await params;

    const response = await fetch(`http://localhost:5001/products/${productId}`);
    const product = await response.json();
    const { name, price, description } = product;
    return (
        <div>
            <h2>Product Detail Page : {productId}</h2>
            <div className="card bg-base-100 shadow-sm"></div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions flex justify-between items-center">
                        <p className="card-text">${price.toFixed(2)}</p>
                    </div>
                </div>
            </div>
    );
};  
export default ProductDetailPage;
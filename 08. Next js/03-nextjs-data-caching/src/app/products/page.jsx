import React from 'react';
import ProductCard from '@/app/components/ProductCard';

const getProducts = async () => {
    const response = await fetch('http://localhost:5001/products');
    return response.json();
}

const ProductsPage = async () => {
    const products = await getProducts();

    return (
        <div>
            <h2>Products : {products.length}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default ProductsPage;
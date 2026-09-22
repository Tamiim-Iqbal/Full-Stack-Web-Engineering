import React from 'react';

const ProductCard = ({ product }) => {

    const { id, name, price, description } = product;
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                
                <div className="card-actions flex justify-between items-center">
                    <p className="card-text">${price.toFixed(2)}</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
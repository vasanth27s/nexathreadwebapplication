import React from 'react';

const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            {products.map((product, index) => (
                <div key={index} className="product-item">
                    <h3>{product.name}</h3>
                    <img src={product.image} alt={product.name} />
                </div>
            ))}
        </div>
    );
};

export default ProductList;
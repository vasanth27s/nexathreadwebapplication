const filterProductsByTags = (products, apiTags) => {
    return products.filter(product => {
        return apiTags.some(tag => product.tags.includes(tag));
    });
};

export default filterProductsByTags;
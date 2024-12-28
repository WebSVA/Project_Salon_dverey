import SingleProduct from '../components/catalog/SingleProduct'
import React, { useEffect } from 'react';

function ProductPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <SingleProduct/>
        </>
    );
}

export default ProductPage;

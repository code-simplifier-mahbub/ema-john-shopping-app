import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Order = () => {
    const products = useLoaderData()
    return (
        <div>
            <h1>this is order section</h1>
            <h2>product quantity : {products.length}</h2>
        </div>
    );
};

export default Order;